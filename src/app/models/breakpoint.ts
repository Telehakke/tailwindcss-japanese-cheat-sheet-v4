import type { CheatSheetData } from "./cheatSheetData";

export type Breakpoint = "sm" | "md" | "lg" | "xl";

export const BreakpointFactory = {
    create: (width: number): Breakpoint => {
        if (width >= XL.width) return "xl";
        if (width >= LG.width) return "lg";
        if (width >= MD.width) return "md";
        return "sm";
    },
};

/* -------------------------------------------------------------------------- */

export const BreakpointManagerFactory = {
    create: (breakpoint: Breakpoint): BreakpointManager => {
        if (breakpoint == "xl") return XL;
        if (breakpoint == "lg") return LG;
        if (breakpoint == "md") return MD;
        return SM;
    },
};

type BreakpointManager = {
    readonly width: number;
    sliceCheatSheetDataItems: (items: readonly CheatSheetData[]) => Column;
};

export type Column = {
    readonly first: readonly CheatSheetData[];
    readonly second: readonly CheatSheetData[];
    readonly third: readonly CheatSheetData[];
    readonly fourth: readonly CheatSheetData[];
};

const SM: BreakpointManager = {
    width: 640,
    sliceCheatSheetDataItems: (item) => {
        return {
            first: item,
            second: [],
            third: [],
            fourth: [],
        };
    },
};

const MD: BreakpointManager = {
    width: 768,
    sliceCheatSheetDataItems: (item) => {
        return {
            first: item.slice(0, 5),
            second: item.slice(5),
            third: [],
            fourth: [],
        };
    },
};

const LG: BreakpointManager = {
    width: 1024,
    sliceCheatSheetDataItems: (item) => {
        return {
            first: item.slice(0, 4),
            second: item.slice(4, 8),
            third: item.slice(8),
            fourth: [],
        };
    },
};

const XL: BreakpointManager = {
    width: 1280,
    sliceCheatSheetDataItems: (item) => {
        return {
            first: item.slice(0, 3),
            second: item.slice(3, 6),
            third: item.slice(6, 10),
            fourth: item.slice(10),
        };
    },
};
