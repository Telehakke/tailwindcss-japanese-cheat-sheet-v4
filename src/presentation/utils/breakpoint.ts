import type { CheatSheetData } from "../../application/cheatSheetData";

/** ブレイクポイントの作成 */
export const createBreakpoint = (width: number): Breakpoint => {
  if (width >= XL.width) return XL;
  if (width >= LG.width) return LG;
  if (width >= MD.width) return MD;
  return SM;
};

/* -------------------------------------------------------------------------- */

type Breakpoint = Readonly<{
  /** Tailwind CSSで定義されるブレイクポイント最小幅 */
  width: number;
  /** チートシートを最大4列に分割する */
  sliceCheatSheetDataItems: (items: readonly CheatSheetData[]) => Column;
}>;

type Column = Readonly<{
  first: readonly CheatSheetData[];
  second: readonly CheatSheetData[];
  third: readonly CheatSheetData[];
  fourth: readonly CheatSheetData[];
}>;

const SM: Breakpoint = {
  width: 640,
  sliceCheatSheetDataItems(items) {
    return { first: items, second: [], third: [], fourth: [] };
  },
};

const MD: Breakpoint = {
  width: 768,
  sliceCheatSheetDataItems(items) {
    return { first: items.slice(0, 5), second: items.slice(5), third: [], fourth: [] };
  },
};

const LG: Breakpoint = {
  width: 1024,
  sliceCheatSheetDataItems(items) {
    return {
      first: items.slice(0, 4),
      second: items.slice(4, 8),
      third: items.slice(8),
      fourth: [],
    };
  },
};

const XL: Breakpoint = {
  width: 1280,
  sliceCheatSheetDataItems(items) {
    return {
      first: items.slice(0, 3),
      second: items.slice(3, 6),
      third: items.slice(6, 10),
      fourth: items.slice(10),
    };
  },
};
