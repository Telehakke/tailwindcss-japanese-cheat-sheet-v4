import {
    createEffect,
    createMemo,
    createSignal,
    Index,
    Show,
    untrack,
    type Accessor,
    type Setter,
} from "solid-js";
import { CopyState, DocumentDetailsState } from "../../../appStates";
import { getAddedVersion } from "../../../models/addedVersions";
import type { DocumentationDetails } from "../../../models/types";
import {
    Bg,
    Border,
    Fill,
    FontSize,
    Outline,
    TextColor,
} from "../../common/classNames";
import DetailTable from "../../common/detailTable";
import { KeyboardArrowDown, KeyboardArrowUp, Link } from "../../common/icons";
import RoundedButton from "../../common/roundedButton";

const DocumentationGroupBox = (props: {
    documentationDetails: DocumentationDetails;
}) => {
    const shouldExpandAll = DocumentDetailsState.shouldExpandAll();
    const [shouldExpand, setShouldExpand] = createSignal(false);

    createEffect(() => {
        // 「全て展開・全て折りたたむ」ボタンに連動して詳細エリアを開閉する
        const v1 = shouldExpandAll();
        const v2 = untrack(() => shouldExpand());
        if (v1 != null && v1 !== v2) {
            setShouldExpand(v1);
        }
    });

    return (
        <div class="space-y-2 pb-2">
            <EntryAndLinkBar
                documentationDetails={props.documentationDetails}
                setShouldExpand={setShouldExpand}
            />
            <div class="space-y-2 px-2">
                <DescriptionBar
                    documentationDetails={props.documentationDetails}
                />
                <DetailAndParametersBox
                    documentationDetails={props.documentationDetails}
                    shouldExpand={shouldExpand}
                />
            </div>
        </div>
    );
};

export default DocumentationGroupBox;

/* -------------------------------------------------------------------------- */

const EntryAndLinkBar = (props: {
    documentationDetails: DocumentationDetails;
    setShouldExpand: Setter<boolean>;
}) => {
    const handleClick = () => {
        props.setShouldExpand((v) => !v);
        DocumentDetailsState.expandPartial();
    };

    const space = "p-2";
    const flex = "flex justify-between";
    const border = `border-t-2 ${Border.neutral400_dark700}`;
    const bg = `${Bg.neutral200_dark900} ${Bg.hoverNeutral300_dark700}`;

    return (
        <button
            class={`w-full cursor-pointer transition ${space} ${flex} ${border} ${bg} `}
            onClick={handleClick}
        >
            <EntryAndLink documentationDetails={props.documentationDetails} />
        </button>
    );
};

const EntryAndLink = (props: {
    documentationDetails: DocumentationDetails;
}) => {
    return (
        <>
            <h3 class="text-left leading-5 whitespace-pre-line">
                {props.documentationDetails.entry}
            </h3>
            <div class="flex items-center gap-2">
                <AddedVersion
                    documentationDetails={props.documentationDetails}
                />
                <a
                    class={`w-10 rounded-full ${Fill.neutral500_hoverSky500} ${Bg.hoverNeutral50}`}
                    href={props.documentationDetails.url}
                    target="_blank"
                    aria-label="公式ドキュメントに移動して詳細を確認する"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Link class="mx-auto" />
                </a>
            </div>
        </>
    );
};

const AddedVersion = (props: {
    documentationDetails: DocumentationDetails;
}) => {
    const entry = createMemo(
        () => props.documentationDetails.entry.split("\n")[0],
    );
    const version = () => getAddedVersion(entry());
    const bg = () => (version() === "v3" ? "bg-neutral-500" : "bg-green-600");

    return (
        <p class={`rounded-md px-1 text-xs font-bold text-neutral-100 ${bg()}`}>
            {version()}
        </p>
    );
};

/* -------------------------------------------------------------------------- */

const DescriptionBar = (props: {
    documentationDetails: DocumentationDetails;
}) => {
    return (
        <p
            class={`whitespace-pre-line ${FontSize.sm} ${TextColor.neutral600_dark300}`}
        >
            {props.documentationDetails.description}
        </p>
    );
};

/* -------------------------------------------------------------------------- */

const DetailAndParametersBox = (props: {
    documentationDetails: DocumentationDetails;
    shouldExpand: Accessor<boolean>;
}) => {
    return (
        <Show when={props.shouldExpand()}>
            <>
                <Show when={props.documentationDetails.details.length > 0}>
                    <DetailTable list={props.documentationDetails.details} />
                </Show>
                <ParameterView
                    documentationDetails={props.documentationDetails}
                />
            </>
        </Show>
    );
};

const ParameterView = (props: {
    documentationDetails: DocumentationDetails;
}) => {
    const [innerShouldExpand, setInnerShouldExpand] = createSignal(false);
    const [shouldShowButton, setShouldShowButton] = createSignal(false);

    return (
        <>
            <ParameterTable
                documentationDetails={props.documentationDetails}
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
const ParameterTable = (props: {
    documentationDetails: DocumentationDetails;
    innerShouldExpand: Accessor<boolean>;
    setShouldShowButton: Setter<boolean>;
}) => {
    let tableElement: HTMLTableElement | undefined;

    createEffect(() => {
        const height = tableElement?.getBoundingClientRect().height;
        if (height == null) return;
        if (height <= 144) return;

        props.setShouldShowButton(true);
    });

    const maxHeight = () => (props.innerShouldExpand() ? "" : "max-h-[144px]");
    const tableStyle = `table-fixed border-collapse`;
    const outline = `rounded-lg outline-2 -outline-offset-2 ${Outline.stone400_dark700}`;

    return (
        <div class={`overflow-clip ${maxHeight()}`}>
            <table
                class={`w-full overflow-clip whitespace-pre-line ${tableStyle} ${outline}`}
                ref={tableElement}
            >
                <tbody>
                    <Index
                        each={props.documentationDetails.parameters.filter(
                            (_, i) => {
                                // 描画コストを減らすため、折りたたみ時は7行分までを表示する
                                if (!props.innerShouldExpand()) return i < 7;
                                return true;
                            },
                        )}
                    >
                        {(parameters) => (
                            <tr
                                class={`${Bg.oddStone50_dark800} ${Bg.evenStone200_dark900}`}
                            >
                                <TableData parameters={parameters()} />
                            </tr>
                        )}
                    </Index>
                </tbody>
            </table>
        </div>
    );
};

const TableData = (props: { parameters: string[] }) => {
    const handleClick = (text: string): void => {
        navigator.clipboard.writeText(text).then(() => {
            CopyState.setCopied();
        });
    };

    const textColor = `${TextColor.firstBlue700_dark300} ${TextColor.neutral600_dark300} ${TextColor.lastGreen700_dark300}`;

    return (
        <Index each={props.parameters}>
            {(v) => (
                <td
                    class={`cursor-copy px-2 py-1 text-xs hover:underline ${textColor}`}
                    onClick={() => handleClick(v())}
                >
                    {v()}
                </td>
            )}
        </Index>
    );
};

const ParameterToggleButton = (props: {
    innerShouldExpand: Accessor<boolean>;
    setInnerShouldExpand: Setter<boolean>;
    shouldShowButton: Accessor<boolean>;
}) => {
    const icon = () =>
        props.innerShouldExpand() ? (
            <KeyboardArrowUp class={Fill.neutral500} />
        ) : (
            <KeyboardArrowDown class={Fill.neutral500} />
        );

    return (
        <Show when={props.shouldShowButton()}>
            <RoundedButton
                class={`w-full border-2 ${Border.neutral400_dark700} ${Bg.hoverNeutral100_dark700}`}
                Icon={icon()}
                onClick={() => props.setInnerShouldExpand((v) => !v)}
            />
        </Show>
    );
};
