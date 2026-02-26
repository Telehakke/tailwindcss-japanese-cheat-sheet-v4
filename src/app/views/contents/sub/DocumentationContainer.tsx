import { useAtomValue, useSetAtom } from "jotai";
import { ChevronDown, ChevronRight, Link2 } from "lucide-react";
import { useEffect, useRef, useState, type JSX, type ReactNode } from "react";
import { languageAtom, shouldExpandAllAtom, toaster } from "../../../atoms";
import {
    CategoryManagerFactory,
    type Category,
} from "../../../models/category";
import type { FullDocumentation } from "../../../models/cheatSheetData";
import { LanguageManagerFactory } from "../../../models/language";
import { Collapsible } from "../../common/Collapsible";

export const DocumentationContainer = (props: {
    category: Category;
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const shouldExpandAll = useAtomValue(shouldExpandAllAtom);
    const [prevState, setPrevState] = useState<boolean | undefined>(
        shouldExpandAll,
    );
    const [shouldExpand, setShouldExpand] = useState<boolean>(
        shouldExpandAll ?? false,
    );

    if (prevState !== shouldExpandAll) {
        if (shouldExpandAll) {
            setShouldExpand(true);
        }
        if (shouldExpandAll === false) {
            setShouldExpand(false);
        }
        setPrevState(shouldExpandAll);
    }

    return (
        <div className="space-y-2">
            <EntryAndLink {...props} {...{ shouldExpand, setShouldExpand }} />
            <div>
                <Description {...props} />
                <Collapsible
                    collapsedHeight={0}
                    unmountOnExit
                    open={shouldExpand}
                >
                    <div className="space-y-2 pt-2">
                        <DetailTable {...props} />
                        <ParameterList {...props} />
                    </div>
                </Collapsible>
            </div>
        </div>
    );
};

/* -------------------------------------------------------------------------- */

const EntryAndLink = (props: {
    category: Category;
    fullDocumentation: FullDocumentation;
    shouldExpand: boolean;
    setShouldExpand: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
    const className = {
        _: "rounded-lg w-full p-1 transition",
        flex: "flex justify-between",
        bg: "bg-neutral-200 dark:bg-neutral-900",
        hoverBg: "hover:bg-neutral-300 hover:dark:bg-neutral-950",
        anchorHoverBg:
            "has-[a:hover]:bg-neutral-200 has-[a:hover]:dark:bg-neutral-900",
        activeBg: "active:bg-neutral-200 active:dark:bg-neutral-900",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
    };

    const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

    const handleClick = (): void => {
        setShouldExpandAll(undefined);
        props.setShouldExpand((v) => !v);
    };

    return (
        <button
            className={Object.values(className).join(" ")}
            onClick={handleClick}
        >
            <div className="flex items-center gap-2">
                <Indicator open={props.shouldExpand} />
                <Entry {...props} />
            </div>
            <div className="flex items-center gap-2">
                <Version {...props} />
                <Anchor {...props} />
            </div>
        </button>
    );
};

const Indicator = (props: { open: boolean }): JSX.Element => {
    return (
        <ChevronRight
            className="stroke-neutral-500 transition data-[state=open]:rotate-90 dark:stroke-neutral-400"
            data-state={props.open ? "open" : "closed"}
        />
    );
};

const Entry = (props: {
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const { entry, translatedEntry } = props.fullDocumentation;

    return (
        <h3 className="text-left text-lg font-bold">
            {entry}
            <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-300">
                {translatedEntry}
            </span>
        </h3>
    );
};

const Version = (props: {
    category: Category;
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const version = CategoryManagerFactory.create(props.category).getVersion(
        props.fullDocumentation.entry,
    );
    const className = {
        _: "rounded-md px-1 py-0.5 text-xs font-bold text-nowrap",
        text: " text-white",
        bg:
            version === "<= v3"
                ? "bg-neutral-500 dark:bg-neutral-700"
                : "bg-sky-700",
    };

    return <p className={Object.values(className).join(" ")}>{version}</p>;
};

const Anchor = (props: {
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const className = {
        _: "w-10 rounded-full",
        grid: "grid place-items-center",
        hoverBg: "hover:bg-white hover:dark:bg-neutral-800",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
        stroke: "stroke-neutral-500",
        hoverStroke: "hover:stroke-blue-500",
    };
    return (
        <a
            className={Object.values(className).join(" ")}
            href={props.fullDocumentation.url}
            target="_blank"
            aria-label="公式ドキュメントを開く"
            onClick={(e) => e.stopPropagation()}
        >
            <Link2 className="stroke-inherit" />
        </a>
    );
};

/* -------------------------------------------------------------------------- */

const Description = (props: {
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const className = {
        _: "text-sm whitespace-pre-line",
        text: "text-neutral-600 dark:text-neutral-300",
    };

    return (
        <p className={Object.values(className).join(" ")}>
            {props.fullDocumentation.description}
        </p>
    );
};

/* -------------------------------------------------------------------------- */

const DetailTable = (props: {
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const { details } = props.fullDocumentation;
    if (details == null) return <></>;

    const className = {
        _: "border-separate border-spacing-y-1 text-sm leading-4",
        text: "text-neutral-600 dark:text-neutral-300",
    };

    return (
        <table className={Object.values(className).join(" ")}>
            <tbody>
                {details.map((d, i) => (
                    <DetailTableRow detail={d} key={i} />
                ))}
            </tbody>
        </table>
    );
};

const DetailTableRow = (props: {
    detail: [string, string, JSX.Element?];
}): JSX.Element => {
    const [entry, description, sample] = props.detail;

    return (
        <tr>
            {sample?.type === "td" && sample}
            <td className="bg-neutral-200 px-1 whitespace-pre dark:bg-neutral-700">
                {entry}
            </td>
            <td className="px-1">{description}</td>
        </tr>
    );
};

/* -------------------------------------------------------------------------- */

const ParameterList = (props: {
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
    setShouldShowButton: React.Dispatch<React.SetStateAction<boolean>>;
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
        const height = tableElement.current?.getBoundingClientRect().height;
        if (height == null) return;
        setHeight(height);

        if (height <= 144) return;
        props.setShouldShowButton(true);
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

    const handleClick = (parameter: string): void => {
        const { copied } = LanguageManagerFactory.create(language).uiLabel;
        navigator.clipboard.writeText(parameter).then(() => {
            toaster.create({ title: copied, description: parameter });
        });
    };

    return (
        <td
            className={Object.values(className).join(" ")}
            onClick={() => handleClick(props.parameter)}
        >
            {props.parameter}
        </td>
    );
};

const ToggleDisplayButton = (props: {
    fullDocumentation: FullDocumentation;
    shouldExpand: boolean;
    setShouldExpand: React.Dispatch<React.SetStateAction<boolean>>;
    setParameters: React.Dispatch<React.SetStateAction<readonly string[][]>>;
}): JSX.Element => {
    const handleClick = (): void => {
        props.setShouldExpand((v) => !v);
        props.setParameters(props.fullDocumentation.parameters);
    };

    return (
        <div
            className="group relative"
            data-state={props.shouldExpand ? "open" : "closed"}
        >
            <RoundedButton onClick={handleClick}>
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
