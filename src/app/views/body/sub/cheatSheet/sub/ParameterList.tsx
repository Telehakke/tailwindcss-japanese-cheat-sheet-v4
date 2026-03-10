import { useAtomValue } from "jotai";
import { ChevronDown } from "lucide-react";
import {
    useEffect,
    useRef,
    useState,
    type Dispatch,
    type JSX,
    type ReactNode,
    type SetStateAction,
} from "react";
import { languageAtom, toaster } from "../../../../../atoms";
import type { FullDocumentation } from "../../../../../models/cheatSheetData";
import { LanguageManagerFactory } from "../../../../../models/language";
import { Collapsible } from "../../../../common/Collapsible";

export const ParameterList = (props: {
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const [shouldExpand, setShouldExpand] = useState(false);
    const [shouldShowButton, setShouldShowButton] = useState(false);

    // 動作を軽くするため、初回のパラメータは7つまで読み込む
    const [parameters, setParameters] = useState<readonly string[][]>(
        props.fullDocumentation.parameters.filter((_, i) => i < 7),
    );

    return (
        <>
            <ParameterTable
                {...props}
                {...{ shouldExpand, setShouldShowButton, parameters }}
            />
            {shouldShowButton && (
                <ToggleDisplayButton
                    {...props}
                    {...{ shouldExpand, setShouldExpand, setParameters }}
                />
            )}
        </>
    );
};

/**
 * クラス名とそれに対応するCSSを表示する\
 * 高さが144pxを超える場合、コンパクトに表示する
 */
const ParameterTable = (props: {
    fullDocumentation: FullDocumentation;
    shouldExpand: boolean;
    setShouldShowButton: Dispatch<SetStateAction<boolean>>;
    parameters: readonly string[][];
}): JSX.Element => {
    const className = {
        _: "w-full table-fixed border-collapse overflow-clip rounded-lg whitespace-pre-line",
        outline:
            "outline-1 -outline-offset-1 outline-neutral-300 dark:outline-neutral-700",
    };

    const tableElement = useRef<HTMLTableElement | null>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        ((): void => {
            const height = tableElement.current?.getBoundingClientRect().height;
            if (height == null) return;
            setHeight(height);

            if (height <= 144) return;
            props.setShouldShowButton(true);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Collapsible
            collapsedHeight={height > 144 ? 144 : height}
            open={props.shouldExpand}
        >
            <table
                className={Object.values(className).join(" ")}
                ref={tableElement}
            >
                <tbody>
                    {props.parameters.map((p, i) => (
                        <ParameterTableRow parameters={p} key={i} />
                    ))}
                </tbody>
            </table>
        </Collapsible>
    );
};

const ParameterTableRow = (props: { parameters: string[] }): JSX.Element => {
    return (
        <tr className="even:bg-neutral-200 even:dark:bg-neutral-700">
            {props.parameters.map((p, i) => (
                <ParameterTableData parameter={p} key={i} />
            ))}
        </tr>
    );
};

const ParameterTableData = (props: { parameter: string }): JSX.Element => {
    const className = {
        _: "cursor-copy px-2 py-1 text-xs hover:underline",
        text: "text-neutral-600 dark:text-neutral-300",
        firstText: "first:text-blue-700 first:dark:text-blue-300",
        lastText: "last:text-green-700 last:dark:text-green-300",
    };

    const language = useAtomValue(languageAtom);

    const copyParameter = (parameter: string): void => {
        const { copied } = LanguageManagerFactory.create(language).uiLabel;
        navigator.clipboard.writeText(parameter).then(() => {
            toaster.create({ title: copied, description: parameter });
        });
    };

    return (
        <td
            className={Object.values(className).join(" ")}
            onClick={() => copyParameter(props.parameter)}
        >
            {props.parameter}
        </td>
    );
};

const ToggleDisplayButton = (props: {
    fullDocumentation: FullDocumentation;
    shouldExpand: boolean;
    setShouldExpand: Dispatch<SetStateAction<boolean>>;
    setParameters: Dispatch<SetStateAction<readonly string[][]>>;
}): JSX.Element => {
    const toggleParameterList = (): void => {
        props.setShouldExpand((v) => !v);
        props.setParameters(props.fullDocumentation.parameters);
    };

    return (
        <div
            className="group relative"
            data-state={props.shouldExpand ? "open" : "closed"}
        >
            <RoundedButton onClick={toggleParameterList}>
                <ChevronDown className="stroke-inherit transition group-data-[state=open]:rotate-180" />
            </RoundedButton>
            <Veil />
        </div>
    );
};

const Veil = (): JSX.Element => {
    const className = {
        _: "pointer-events-none h-8 w-full group-data-[state=open]:hidden",
        position: "absolute inset-y-0 top-0 -translate-y-full",
        bg: "bg-linear-to-b from-transparent to-white dark:to-neutral-800",
    };

    return <div className={Object.values(className).join(" ")} />;
};

const RoundedButton = (props: {
    onClick?: () => void;
    children?: ReactNode;
}): JSX.Element => {
    const className = {
        _: "h-8 w-full rounded-full px-2 text-sm text-nowrap transition",
        flex: "flex justify-center items-center gap-1",
        bg: "bg-white dark:bg-neutral-800",
        hoverBg: "hover:bg-neutral-100 dark:hover:bg-neutral-700",
        activeBg: "active:bg-neutral-200 dark:active:bg-neutral-600",
        border: "border border-neutral-300 dark:border-neutral-700",
        focusBorder: "focus-visible:border-transparent",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
        stroke: "stroke-neutral-500 dark:stroke-neutral-400",
    };

    return (
        <button
            className={Object.values(className).join(" ")}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
