import { BreakpointPrefix, BreakpointPrefixEnum } from "./breakpointPrefix";
import { CheatSheetData } from "./types";

type CheatSheetGridRow = {
    readonly firstRow: CheatSheetData[];
    readonly secondRow: CheatSheetData[];
    readonly thirdRow: CheatSheetData[];
    readonly fourthRow: CheatSheetData[];
};

interface ICheatSheetDataSlicer {
    sliced(cheatSheetData: CheatSheetData[]): CheatSheetGridRow;
}

/**
 * チートシートを1列で表示する場合のデータの分割
 */
class CheatSheetDataSlicerSM implements ICheatSheetDataSlicer {
    sliced(cheatSheetData: CheatSheetData[]): CheatSheetGridRow {
        return {
            firstRow: [...cheatSheetData],
            secondRow: [],
            thirdRow: [],
            fourthRow: [],
        };
    }
}

/**
 * チートシートを2列で表示する場合のデータの分割
 */
class CheatSheetDataSlicerMD implements ICheatSheetDataSlicer {
    sliced(cheatSheetData: CheatSheetData[]): CheatSheetGridRow {
        return {
            firstRow: cheatSheetData.slice(0, 5),
            secondRow: cheatSheetData.slice(5),
            thirdRow: [],
            fourthRow: [],
        };
    }
}

/**
 * チートシートを3列で表示する場合のデータの分割
 */
class CheatSheetDataSlicerLG implements ICheatSheetDataSlicer {
    sliced(cheatSheetData: CheatSheetData[]): CheatSheetGridRow {
        return {
            firstRow: cheatSheetData.slice(0, 4),
            secondRow: cheatSheetData.slice(4, 8),
            thirdRow: cheatSheetData.slice(8),
            fourthRow: [],
        };
    }
}

/**
 * チートシートを4列で表示する場合のデータの分割
 */
class CheatSheetDataSlicerXL implements ICheatSheetDataSlicer {
    sliced(cheatSheetData: CheatSheetData[]): CheatSheetGridRow {
        return {
            firstRow: cheatSheetData.slice(0, 2),
            secondRow: cheatSheetData.slice(2, 6),
            thirdRow: cheatSheetData.slice(6, 10),
            fourthRow: cheatSheetData.slice(10),
        };
    }
}

export default class CheatSheetDataSlicer {
    private static values = new Map<BreakpointPrefix, ICheatSheetDataSlicer>([
        [BreakpointPrefixEnum.sm, new CheatSheetDataSlicerSM()],
        [BreakpointPrefixEnum.md, new CheatSheetDataSlicerMD()],
        [BreakpointPrefixEnum.lg, new CheatSheetDataSlicerLG()],
        [BreakpointPrefixEnum.xl, new CheatSheetDataSlicerXL()],
    ]);

    static get = (prefix: BreakpointPrefix): ICheatSheetDataSlicer => {
        const result = this.values.get(prefix) ?? new CheatSheetDataSlicerSM();
        return result;
    };
}
