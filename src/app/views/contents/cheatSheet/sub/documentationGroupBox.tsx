import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DetailedDocumentation } from "../../../../models/types";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { shouldExpandAllAtom } from "../../../../appStates";
import {
    KeyboardArrowDown,
    KeyboardArrowUp,
    Link,
} from "../../../common/icons";
import RoundedButton from "../../../common/roundedButton";
import {
    Bg,
    Border,
    Fill,
    FontSize,
    Outline,
    TextColor,
} from "../../../common/classNames";
import { PrimitiveAtom } from "jotai";

type WithInitialValue<Value> = {
    init: Value;
};

/**
 * 項目、リンクボタン、説明、詳細、パラメーターを表示する
 */
const DocumentationGroupBox = ({
    detailedDocumentation,
}: {
    detailedDocumentation: DetailedDocumentation;
}) => {
    const shouldExpandAtom = useRef(atom(false));

    return (
        <div className="space-y-2 px-2 pb-2">
            <EntryAndLinkBar
                detailedDocumentation={detailedDocumentation}
                shouldExpandAtom={shouldExpandAtom.current}
            />
            <DescriptionBar detailedDocumentation={detailedDocumentation} />
            <DetailAndParametersBox
                detailedDocumentation={detailedDocumentation}
                shouldExpandAtom={shouldExpandAtom.current}
            />
        </div>
    );
};

export default DocumentationGroupBox;

/**
 * 項目とリンクを表示するバー
 */
const EntryAndLinkBar = ({
    detailedDocumentation,
    shouldExpandAtom,
}: {
    detailedDocumentation: DetailedDocumentation;
    shouldExpandAtom: PrimitiveAtom<boolean> & WithInitialValue<boolean>;
}) => {
    const setShouldExpand = useSetAtom(shouldExpandAtom);
    const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

    // 項目エリアをクリックすると詳細エリアを開閉する
    const handleEntryClick: React.MouseEventHandler<HTMLDivElement> = () => {
        setShouldExpand((v) => !v);
        setShouldExpandAll(null);
    };
    return (
        <div
            className={`-mx-2 flex cursor-pointer justify-between border-t-2 p-2 leading-5 whitespace-pre-line transition ${Border.neutral400_dark700} ${Bg.neutral200_dark900} ${Bg.hoverNeutral300_dark700} `}
            onClick={handleEntryClick}
        >
            <EntryAndLink detailedDocumentation={detailedDocumentation} />
        </div>
    );
};

/**
 * 項目とリンクを表示する
 */
const EntryAndLink = ({
    detailedDocumentation,
}: {
    detailedDocumentation: DetailedDocumentation;
}) => {
    return (
        <>
            <h3>{detailedDocumentation.entry}</h3>
            <a
                className={`my-auto w-10 content-center rounded-full ${Fill.neutral500_hoverSky500} ${Bg.hoverNeutral50}`}
                href={detailedDocumentation.url}
                target="_blank"
                aria-label="公式ドキュメントに移動して詳細を確認する"
                onClick={(event) => {
                    // handleEntryClick()が呼び出されないよう、
                    // クリックイベントの伝播を止める
                    event.stopPropagation();
                }}
            >
                <Link className="mx-auto" />
            </a>
        </>
    );
};

/**
 * 説明を表示する
 */
const DescriptionBar = ({
    detailedDocumentation,
}: {
    detailedDocumentation: DetailedDocumentation;
}) => {
    return (
        <p
            className={`whitespace-pre-line ${FontSize.textSm} ${TextColor.neutral600_dark300}`}
        >
            {detailedDocumentation.description}
        </p>
    );
};

/**
 * 詳細な説明とパラメータを表示する
 */
const DetailAndParametersBox = ({
    detailedDocumentation,
    shouldExpandAtom,
}: {
    detailedDocumentation: DetailedDocumentation;
    shouldExpandAtom: PrimitiveAtom<boolean> & WithInitialValue<boolean>;
}) => {
    const [shouldExpand, setShouldExpand] = useAtom(shouldExpandAtom);
    const shouldExpandAll = useAtomValue(shouldExpandAllAtom);

    // 「全て展開」「全て折りたたむ」が押された状態に合わせて詳細エリアを開閉する
    useEffect(() => {
        if (shouldExpandAll != null) {
            setShouldExpand(shouldExpandAll);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldExpandAll]);

    return (
        <>
            {shouldExpand && (
                <>
                    {detailedDocumentation.detail}
                    <ParametersTable
                        detailedDocumentation={detailedDocumentation}
                    />
                </>
            )}
        </>
    );
};

/**
 * クラス名とそれに対応するCSSを表示する\
 * 高さが144pxを超える場合、コンパクトに表示する
 */
const ParametersTable = ({
    detailedDocumentation,
}: {
    detailedDocumentation: DetailedDocumentation;
}) => {
    const [innerShouldExpand, innerSetShouldExpand] = useState(false);
    const [shouldShowButton, setShouldShowButton] = useState(false);
    const tableElement = useRef<HTMLTableElement>(null);

    // レンダリング直後に<table>要素の高さを取得する
    useLayoutEffect(() => {
        const tableHeight =
            tableElement.current?.getBoundingClientRect().height;
        if (tableHeight == null) return;

        if (tableHeight > 144) {
            setShouldShowButton(true);
        }
    }, []);

    return (
        <>
            <div
                className={`overflow-clip ${innerShouldExpand ? "" : "max-h-[144px]"}`}
            >
                <table
                    className={`w-full table-fixed border-collapse overflow-clip rounded-lg whitespace-pre-line outline-2 -outline-offset-2 ${Outline.stone400_dark700}`}
                    ref={tableElement}
                >
                    {detailedDocumentation.entry.includes("Container") ? (
                        // Layout > Containerの項目だけ、専用の<tbody>要素を使用する
                        <TbodyUsedOnlyForContainer
                            documentation={detailedDocumentation}
                        />
                    ) : (
                        // それ以外で使用する<tbody>要素
                        <TbodyOfParameters
                            documentation={detailedDocumentation}
                            shouldExpand={innerShouldExpand}
                        />
                    )}
                </table>
            </div>
            <RoundedButton
                className={`w-full border-2 ${Border.neutral400_dark700} ${Bg.hoverNeutral100_dark700} ${shouldShowButton ? "" : "hidden"}`}
                Icon={
                    innerShouldExpand ? (
                        <KeyboardArrowUp className={Fill.neutral500} />
                    ) : (
                        <KeyboardArrowDown className={Fill.neutral500} />
                    )
                }
                text=""
                onClick={() => innerSetShouldExpand(!innerShouldExpand)}
            />
        </>
    );
};

/**
 * Parameterの値を表示するための<tbody>要素
 */
const TbodyOfParameters = ({
    documentation,
    shouldExpand,
}: {
    documentation: DetailedDocumentation;
    shouldExpand: boolean;
}) => {
    return (
        <tbody>
            {documentation.parameters
                .filter((_, i) => {
                    // 描画コストを減らすために折りたたみ時は7行分まで表示する
                    if (!shouldExpand) {
                        return i < 7;
                    }

                    return true;
                })
                .map((parameters, i) => {
                    return (
                        <tr
                            key={i}
                            className={`${Bg.oddStone50_dark800} ${Bg.evenStone200_dark900}`}
                        >
                            {parameters.map((parameter) => {
                                return (
                                    <td
                                        key={parameter}
                                        className={`px-2 py-1 text-xs ${TextColor.firstBlue700_dark300} ${TextColor.neutral600_dark300} ${TextColor.lastGreen700_dark300}`}
                                    >
                                        {parameter}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
        </tbody>
    );
};

/**
 * 「Layout > Container」のみで使用する<tbody>要素
 */
const TbodyUsedOnlyForContainer = ({
    documentation,
}: {
    documentation: DetailedDocumentation;
}) => {
    return (
        <tbody>
            {documentation.parameters.map((parameters, i) => {
                return (
                    <tr
                        key={i}
                        className={`${Bg.oddStone50_dark800} ${Bg.evenStone200_dark900}`}
                    >
                        {parameters.map((parameter, j) => {
                            return (
                                <td
                                    key={parameter}
                                    className={`px-2 py-1 text-xs ${TextColor.neutral600_dark300} ${TextColor.lastGreen700_dark300} ${i === 0 ? TextColor.firstBlue700_dark300 : ""}`}
                                    // 最初のセルだけ縦方向に連結する
                                    rowSpan={i === 0 && j === 0 ? 6 : undefined}
                                >
                                    {parameter}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};
