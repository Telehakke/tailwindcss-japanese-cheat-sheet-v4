import { getCategoryValues, type Category } from "../domain/models/category.ts";
import type { Language } from "../domain/models/language.ts";
import type { CheatSheetData } from "./cheatSheetData.ts";
import type { Translation } from "./translation.tsx";

export type Documentation = {
  readonly url: string;
  readonly entry: string;
  readonly description: string;
  readonly parameters: readonly string[][];
};

export const getCheatSheetDataItem = (language: Language): Promise<readonly CheatSheetData[]> => {
  if (language === "ja") return getCheatSheetDataItemJA();
  return getCheatSheetDataItemEN();
};

/* -------------------------------------------------------------------------- */

let itemEN: CheatSheetData[] | undefined;
const getCheatSheetDataItemEN = async (): Promise<readonly CheatSheetData[]> => {
  if (itemEN == null) {
    itemEN = await Promise.all(
      getCategoryValues().map(async (v) => convertToCheatSheetData(v, await documentationsMap[v])),
    );
  }
  return itemEN;
};

let itemJA: CheatSheetData[] | undefined;
const getCheatSheetDataItemJA = async (): Promise<readonly CheatSheetData[]> => {
  if (itemJA == null) {
    itemJA = await Promise.all(
      getCategoryValues().map(async (v) =>
        convertToCheatSheetData(v, await documentationsMap[v], await translationsMap[v]),
      ),
    );
  }
  return itemJA;
};

/* -------------------------------------------------------------------------- */

/** 英語のドキュメントと翻訳した内容を合成したオブジェクトを返す */
const convertToCheatSheetData = (
  category: Category,
  documentations: readonly Documentation[],
  translations?: Map<string, Translation>,
): CheatSheetData => {
  return {
    category,
    translatedCategory: translations?.get(category)?.entry,
    fullDocumentations: documentations.map((v) => {
      const t = translations?.get(v.entry);
      return {
        url: v.url,
        entry: v.entry,
        translatedEntry: t?.entry,
        description: t?.description ?? v.description,
        details: t?.details,
        parameters: v.parameters,
      };
    }),
  };
};

/* -------------------------------------------------------------------------- */

// oxfmt-ignore
const documentationsMap: Record<Category, Promise<readonly Documentation[]>> = {
  Layout:                    import("./documentations/Layout_v4.3.ts").then((v) => v.documentations),
  "Flexbox & Grid":          import("./documentations/Flexbox & Grid_v4.3.ts").then((v) => v.documentations),
  Spacing:                   import("./documentations/Spacing_v4.3.ts").then((v) => v.documentations),
  Sizing:                    import("./documentations/Sizing_v4.3.ts").then((v) => v.documentations),
  Typography:                import("./documentations/Typography_v4.3.ts").then((v) => v.documentations),
  Backgrounds:               import("./documentations/Backgrounds_v4.3.ts").then((v) => v.documentations),
  Borders:                   import("./documentations/Borders_v4.3.ts").then((v) => v.documentations),
  Effects:                   import("./documentations/Effects_v4.3.ts").then((v) => v.documentations),
  Filters:                   import("./documentations/Filters_v4.3.ts").then((v) => v.documentations),
  Tables:                    import("./documentations/Tables_v4.3.ts").then((v) => v.documentations),
  "Transitions & Animation": import("./documentations/Transitions & Animation_v4.3.ts").then((v) => v.documentations),
  Transforms:                import("./documentations/Transforms_v4.3.ts").then((v) => v.documentations),
  Interactivity:             import("./documentations/Interactivity_v4.3.ts").then((v) => v.documentations),
  SVG:                       import("./documentations/SVG_v4.3.ts").then((v) => v.documentations),
  Accessibility:             import("./documentations/Accessibility_v4.3.ts").then((v) => v.documentations),
};

// oxfmt-ignore
const translationsMap: Record<Category, Promise<Map<string, Translation>>> = {
  "Layout":                  import("./translations/layoutJA.tsx").then((v) => v.layoutJA),
  "Flexbox & Grid":          import("./translations/flexboxAndGridJA.tsx").then((v) => v.flexboxAndGridJA),
  Spacing:                   import("./translations/spacingJA.tsx").then((v) => v.spacingJA),
  Sizing:                    import("./translations/sizingJA.tsx").then((v) => v.sizingJA),
  Typography:                import("./translations/typographyJA.tsx").then((v) => v.typographyJA),
  Backgrounds:               import("./translations/backgroundsJA.tsx").then((v) => v.backgroundsJA),
  Borders:                   import("./translations/bordersJA.tsx").then((v) => v.bordersJA),
  Effects:                   import("./translations/effectsJA.tsx").then((v) => v.effectsJA),
  Filters:                   import("./translations/filtersJA.tsx").then((v) => v.filtersJA),
  Tables:                    import("./translations/tablesJA.tsx").then((v) => v.tablesJA),
  "Transitions & Animation": import("./translations/transitionsAndAnimationJA.tsx").then((v) => v.transitionsAndAnimationJA),
  Transforms:                import("./translations/transformsJA.tsx").then((v) => v.transformsJA),
  Interactivity:             import("./translations/interactivityJA.tsx").then((v) => v.interactivityJA),
  SVG:                       import("./translations/svgJA.tsx").then((v) => v.svgJA),
  Accessibility:             import("./translations/accessibilityJA.tsx").then((v) => v.accessibilityJA),
};
