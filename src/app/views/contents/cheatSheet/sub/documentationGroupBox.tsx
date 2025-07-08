import { useAtomValue, useSetAtom } from "jotai";
import { useLayoutEffect, useRef, useState } from "react";
import { isCopiedAtom, shouldExpandAllAtom } from "../../../../appStates";
import { getAddedVersion } from "../../../../models/addedVersions";
import { DocumentationDetails } from "../../../../models/types";
import {
    Bg,
    Border,
    Fill,
    FontSize,
    Outline,
    TextColor,
} from "../../../common/classNames";
import {
    KeyboardArrowDown,
    KeyboardArrowUp,
    Link,
} from "../../../common/icons";
import RoundedButton from "../../../common/roundedButton";

const DocumentationGroupBox = ({
    documentationDetails,
}: {
    documentationDetails: DocumentationDetails;
}) => {
    const shouldExpandAll = useAtomValue(shouldExpandAllAtom);
    const [shouldExpand, setShouldExpand] = useState<boolean>(
        shouldExpandAll ?? false,
    );

    // 「全て展開・全て折りたたむ」ボタンに連動して詳細エリアを開閉する
    if (shouldExpandAll !== shouldExpand && shouldExpandAll != null) {
        setShouldExpand(shouldExpandAll);
    }

    return (
        <div className="space-y-2 px-2 pb-2">
            <EntryAndLinkBar
                documentationDetails={documentationDetails}
                setShouldExpand={setShouldExpand}
            />
            <DescriptionBar documentationDetails={documentationDetails} />
            <DetailAndParametersBox
                documentationDetails={documentationDetails}
                shouldExpand={shouldExpand}
            />
        </div>
    );
};

export default DocumentationGroupBox;

/* -------------------------------------------------------------------------- */

const EntryAndLinkBar = ({
    documentationDetails,
    setShouldExpand,
}: {
    documentationDetails: DocumentationDetails;
    setShouldExpand: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

    const handleClick = (): void => {
        setShouldExpand((v) => !v);
        setShouldExpandAll(null);
    };

    const space = "-mx-2 p-2";
    const flex = "flex justify-between";
    const border = `border-t-2 ${Border.neutral400_dark700}`;
    const bg = `${Bg.neutral200_dark900} ${Bg.hoverNeutral300_dark700}`;

    return (
        <div
            className={`cursor-pointer transition ${space} ${flex} ${border} ${bg} `}
            onClick={handleClick}
        >
            <EntryAndLink documentationDetails={documentationDetails} />
        </div>
    );
};

const EntryAndLink = ({
    documentationDetails,
}: {
    documentationDetails: DocumentationDetails;
}) => {
    return (
        <>
            <h3 className="leading-5 whitespace-pre-line">
                {documentationDetails.entry}
            </h3>
            <div className="flex items-center gap-2">
                <AddedVersion documentationDetails={documentationDetails} />
                <a
                    className={`w-10 rounded-full ${Fill.neutral500_hoverSky500} ${Bg.hoverNeutral50}`}
                    href={documentationDetails.url}
                    target="_blank"
                    aria-label="公式ドキュメントに移動して詳細を確認する"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Link className="mx-auto" />
                </a>
            </div>
        </>
    );
};

const AddedVersion = ({
    documentationDetails,
}: {
    documentationDetails: DocumentationDetails;
}) => {
    const version = getAddedVersion(documentationDetails.entry.split("\n")[0]);
    const bg = version === "v3" ? "bg-neutral-500" : "bg-green-600";

    return (
        <p
            className={`rounded-md px-1 text-xs font-bold text-neutral-100 ${bg}`}
        >
            {version}
        </p>
    );
};

/* -------------------------------------------------------------------------- */

const DescriptionBar = ({
    documentationDetails,
}: {
    documentationDetails: DocumentationDetails;
}) => {
    return (
        <p
            className={`whitespace-pre-line ${FontSize.sm} ${TextColor.neutral600_dark300}`}
        >
            {documentationDetails.description}
        </p>
    );
};

/* -------------------------------------------------------------------------- */

const DetailAndParametersBox = ({
    documentationDetails,
    shouldExpand,
}: {
    documentationDetails: DocumentationDetails;
    shouldExpand: boolean;
}) => {
    if (!shouldExpand) return <></>;
    return (
        <>
            {documentationDetails.detail}
            <ParameterView documentationDetails={documentationDetails} />
        </>
    );
};

const ParameterView = ({
    documentationDetails,
}: {
    documentationDetails: DocumentationDetails;
}) => {
    const [innerShouldExpand, setInnerShouldExpand] = useState(false);
    const [shouldShowButton, setShouldShowButton] = useState(false);

    return (
        <>
            <ParameterTable
                documentationDetails={documentationDetails}
                innerShouldExpand={innerShouldExpand}
                setShouldShowButton={setShouldShowButton}
            />
            <ParameterToggleButton
                innerShouldExpand={innerShouldExpand}
                setInnerShouldExpand={setInnerShouldExpand}
                shouldShowButton={shouldShowButton}
            />
        </>
    );
};

/**
 * クラス名とそれに対応するCSSを表示する\
 * 高さが144pxを超える場合、コンパクトに表示する
 */
const ParameterTable = ({
    documentationDetails,
    innerShouldExpand,
    setShouldShowButton,
}: {
    documentationDetails: DocumentationDetails;
    innerShouldExpand: boolean;
    setShouldShowButton: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const tableElement = useRef<HTMLTableElement>(null);

    // useEffectを使用すると描画がチラつくため、useLayoutEffectを使用
    useLayoutEffect(() => {
        const height = tableElement.current?.getBoundingClientRect().height;
        if (height == null) return;
        if (height <= 144) return;

        setShouldShowButton(true);
    }, [setShouldShowButton]);

    const maxHeight = innerShouldExpand ? "" : "max-h-[144px]";
    const tableStyle = `table-fixed border-collapse`;
    const outline = `rounded-lg outline-2 -outline-offset-2 ${Outline.stone400_dark700}`;

    return (
        <div className={`overflow-clip ${maxHeight}`}>
            <table
                className={`w-full overflow-clip whitespace-pre-line ${tableStyle} ${outline}`}
                ref={tableElement}
            >
                <tbody>
                    {documentationDetails.parameters
                        .filter((_, i) => {
                            // 描画コストを減らすため、折りたたみ時は7行分までを表示する
                            if (!innerShouldExpand) return i < 7;
                            return true;
                        })
                        .map((parameters, i) => (
                            <tr
                                key={i}
                                className={`${Bg.oddStone50_dark800} ${Bg.evenStone200_dark900}`}
                            >
                                <TableData parameters={parameters} />
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

const TableData = ({ parameters }: { parameters: string[] }) => {
    const setIsCopied = useSetAtom(isCopiedAtom);

    const handleClick = (text: string): void => {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
        });
    };

    const textColor = `${TextColor.firstBlue700_dark300} ${TextColor.neutral600_dark300} ${TextColor.lastGreen700_dark300}`;

    return (
        <>
            {parameters.map((parameter) => (
                <td
                    key={parameter}
                    className={`cursor-copy px-2 py-1 text-xs hover:underline ${textColor}`}
                    onClick={() => handleClick(parameter)}
                >
                    {parameter}
                </td>
            ))}
        </>
    );
};

const ParameterToggleButton = ({
    innerShouldExpand,
    setInnerShouldExpand,
    shouldShowButton,
}: {
    innerShouldExpand: boolean;
    setInnerShouldExpand: React.Dispatch<React.SetStateAction<boolean>>;
    shouldShowButton: boolean;
}) => {
    if (!shouldShowButton) return <></>;

    const icon = innerShouldExpand ? (
        <KeyboardArrowUp className={Fill.neutral500} />
    ) : (
        <KeyboardArrowDown className={Fill.neutral500} />
    );

    return (
        <RoundedButton
            className={`w-full border-2 ${Border.neutral400_dark700} ${Bg.hoverNeutral100_dark700}`}
            Icon={icon}
            onClick={() => setInnerShouldExpand((v) => !v)}
        />
    );
};
