import { useAtomValue } from "jotai";
import {
    breakpointPrefixAtom,
    cheatSheetAtom,
    searchStringAtom,
} from "../../appStates";
import CheatSheetDataSlicerFactory from "../../models/cheatSheetDataSlicer";
import Split from "../../models/split";
import { CheatSheetData } from "../../models/types";
import { CheatSheet } from "./cheatSheet/cheatSheet";

const Contents = () => {
    const cheatSheet = useAtomValue(cheatSheetAtom);
    const searchString = useAtomValue(searchStringAtom);
    const breakpointPrefix = useAtomValue(breakpointPrefixAtom);

    const slicer = CheatSheetDataSlicerFactory.createInstance(breakpointPrefix);
    const cheatSheetDataList = cheatSheet.filtering(
        Split.byWhiteSpace(searchString),
    );
    const sliced = slicer.slice(cheatSheetDataList);

    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <GridColumn cheatSheetDataList={sliced.firstColumn} />
            <GridColumn cheatSheetDataList={sliced.secondColumn} />
            <GridColumn cheatSheetDataList={sliced.thirdColumn} />
            <GridColumn cheatSheetDataList={sliced.fourthColumn} />
        </div>
    );
};

export default Contents;

/* -------------------------------------------------------------------------- */

const GridColumn = ({
    cheatSheetDataList,
}: {
    cheatSheetDataList: readonly CheatSheetData[];
}) => {
    if (cheatSheetDataList.length === 0) return <></>;
    return (
        <div className="flex flex-col gap-8">
            {cheatSheetDataList.map((v) => (
                <CheatSheet key={v.category} cheatSheetData={v} />
            ))}
        </div>
    );
};
