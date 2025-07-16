import {
    BreakpointPrefixEnum,
    type BreakpointPrefix,
} from "./breakpointPrefix";
import type { CheatSheetData } from "./types";

export default class CheatSheetDataSlicerFactory {
    static createInstance = (
        prefix: BreakpointPrefix,
    ): CheatSheetDataSlicer => {
        if (prefix === BreakpointPrefixEnum.xl)
            return new CheatSheetDataSlicerXL();
        if (prefix === BreakpointPrefixEnum.lg)
            return new CheatSheetDataSlicerLG();
        if (prefix === BreakpointPrefixEnum.md)
            return new CheatSheetDataSlicerMD();
        return new CheatSheetDataSlicerSM();
    };
}

type CheatSheetGridRow = {
    readonly firstColumn: readonly CheatSheetData[];
    readonly secondColumn: readonly CheatSheetData[];
    readonly thirdColumn: readonly CheatSheetData[];
    readonly fourthColumn: readonly CheatSheetData[];
};

interface CheatSheetDataSlicer {
    slice(dataList: readonly CheatSheetData[]): CheatSheetGridRow;
}

class CheatSheetDataSlicerSM implements CheatSheetDataSlicer {
    slice = (dataList: readonly CheatSheetData[]): CheatSheetGridRow => {
        return {
            firstColumn: [...dataList],
            secondColumn: [],
            thirdColumn: [],
            fourthColumn: [],
        };
    };
}

class CheatSheetDataSlicerMD implements CheatSheetDataSlicer {
    slice = (dataList: readonly CheatSheetData[]): CheatSheetGridRow => {
        return {
            firstColumn: dataList.slice(0, 5),
            secondColumn: dataList.slice(5),
            thirdColumn: [],
            fourthColumn: [],
        };
    };
}

class CheatSheetDataSlicerLG implements CheatSheetDataSlicer {
    slice = (dataList: readonly CheatSheetData[]): CheatSheetGridRow => {
        return {
            firstColumn: dataList.slice(0, 4),
            secondColumn: dataList.slice(4, 8),
            thirdColumn: dataList.slice(8),
            fourthColumn: [],
        };
    };
}

class CheatSheetDataSlicerXL implements CheatSheetDataSlicer {
    slice = (dataList: readonly CheatSheetData[]): CheatSheetGridRow => {
        return {
            firstColumn: dataList.slice(0, 2),
            secondColumn: dataList.slice(2, 6),
            thirdColumn: dataList.slice(6, 10),
            fourthColumn: dataList.slice(10),
        };
    };
}
