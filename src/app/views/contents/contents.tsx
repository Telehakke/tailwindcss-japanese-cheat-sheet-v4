import { For, Index, Show } from "solid-js";
import {
    BreakpointPrefixState,
    CheatSheetState,
    SearchStringState,
} from "../../appStates";
import CheatSheetDataSlicerFactory from "../../models/cheatSheetDataSlicer";
import Split from "../../models/split";
import type { CheatSheetData } from "../../models/types";
import CategoryBar from "./sub/categoryBar";
import DocumentationGroupBox from "./sub/documentationGroupBox";
import FloatingCard from "./sub/floatingCard";

const Contents = () => {
    const cheatSheet = CheatSheetState.cheatSheet();
    const searchString = SearchStringState.searchString();
    const breakpointPrefix = BreakpointPrefixState.breakpointPrefix();

    const sliced = () => {
        const slicer =
            CheatSheetDataSlicerFactory.createInstance(breakpointPrefix());
        const cheatSheetDataList = cheatSheet().filtering(
            Split.byWhiteSpace(searchString()),
        );
        return slicer.slice(cheatSheetDataList);
    };

    return (
        <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <GridColumn cheatSheetDataList={sliced().firstColumn} />
            <GridColumn cheatSheetDataList={sliced().secondColumn} />
            <GridColumn cheatSheetDataList={sliced().thirdColumn} />
            <GridColumn cheatSheetDataList={sliced().fourthColumn} />
        </div>
    );
};

export default Contents;

/* -------------------------------------------------------------------------- */

const GridColumn = (props: {
    cheatSheetDataList: readonly CheatSheetData[];
}) => {
    return (
        <Show when={props.cheatSheetDataList.length > 0}>
            <div class="flex flex-col gap-8">
                <Index each={props.cheatSheetDataList}>
                    {(v) => <CheatSheet cheatSheetData={v()} />}
                </Index>
            </div>
        </Show>
    );
};

const CheatSheet = (props: { cheatSheetData: CheatSheetData }) => {
    return (
        <FloatingCard>
            <CategoryBar cheatSheetData={props.cheatSheetData} />
            <For each={props.cheatSheetData.documentationDetailsList}>
                {(doc) => <DocumentationGroupBox documentationDetails={doc} />}
            </For>
        </FloatingCard>
    );
};
