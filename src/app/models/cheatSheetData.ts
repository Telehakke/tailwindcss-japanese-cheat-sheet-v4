import type { JSX } from "react";
import { CategoryEnum, type Category } from "./category";

// prettier-ignore
const Importer: Record<Category, Promise<readonly Documentation[]>> = {
    [CategoryEnum.Layout] :  import("../data/Layout_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.FlexboxAndGrid]:  import("../data/Flexbox & Grid_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Spacing]:  import("../data/Spacing_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Sizing]:  import("../data/Sizing_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Typography]:  import("../data/Typography_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Backgrounds]:  import("../data/Backgrounds_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Borders]:  import("../data/Borders_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Effects]:  import("../data/Effects_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Filters]:  import("../data/Filters_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Tables]:  import("../data/Tables_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.TransitionsAndAnimation]:  import("../data/Transitions & Animation_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Transforms]:  import("../data/Transforms_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Interactivity]: import("../data/Interactivity_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.SVG]: import("../data/SVG_v4.3.ts").then((v) => v.documentations),
    [CategoryEnum.Accessibility]: import("../data/Accessibility_v4.3.ts").then((v) => v.documentations),
} as const

// prettier-ignore
const ImporterJA: Record<Category, Promise<Map<string, Translation>>> = {
    [CategoryEnum.Layout]: import("../data/translations/layoutJA.tsx").then((v) => v.layoutJA),
    [CategoryEnum.FlexboxAndGrid]: import("../data/translations/flexboxAndGridJA.tsx").then((v => v.flexboxAndGridJA)),
    [CategoryEnum.Spacing]: import("../data/translations/spacingJA.tsx").then((v) => v.spacingJA),
    [CategoryEnum.Sizing]: import("../data/translations/sizingJA.tsx").then((v) => v.sizingJA),
    [CategoryEnum.Typography]:  import("../data/translations/typographyJA.tsx").then((v) => v.typographyJA),
    [CategoryEnum.Backgrounds]: import("../data/translations/backgroundsJA.tsx").then((v) => v.backgroundsJA),
    [CategoryEnum.Borders]:  import("../data/translations/bordersJA.tsx").then((v) => v.bordersJA),
    [CategoryEnum.Effects]:  import("../data/translations/effectsJA.tsx").then((v => v.effectsJA)),
    [CategoryEnum.Filters]:  import("../data/translations/filtersJA.tsx").then((v) => v.filtersJA),
    [CategoryEnum.Tables]:  import("../data/translations/tablesJA.tsx").then((v) => v.tablesJA),
    [CategoryEnum.TransitionsAndAnimation]:  import("../data/translations/transitionsAndAnimationJA.tsx").then((v) => v.transitionsAndAnimationJA),
    [CategoryEnum.Transforms]:  import("../data/translations/transformsJA.tsx").then((v) => v.transformsJA),
    [CategoryEnum.Interactivity]:  import("../data/translations/interactivityJA.tsx").then((v) => v.interactivityJA),
    [CategoryEnum.SVG]:  import("../data/translations/svgJA.tsx").then((v) => v.svgJA),
    [CategoryEnum.Accessibility]:  import("../data/translations/accessibilityJA.tsx").then((v) => v.accessibilityJA),
} as const;

export type CheatSheetData = {
    readonly category: Category;
    readonly translatedCategory?: string;
    readonly fullDocumentations: readonly FullDocumentation[];
};

export type FullDocumentation = {
    readonly url: string;
    readonly entry: string;
    readonly translatedEntry?: string;
    readonly description: string;
    readonly details?: readonly [string, string, JSX.Element?][];
    readonly parameters: readonly string[][];
};

export type Documentation = {
    readonly url: string;
    readonly entry: string;
    readonly description: string;
    readonly parameters: readonly string[][];
};

export type Translation = {
    readonly entry: string;
    readonly description: string;
    readonly details: readonly [string, string, JSX.Element?][];
};

/* -------------------------------------------------------------------------- */

interface CheatSheetManager {
    filterByWords: (
        words: readonly string[],
    ) => Promise<readonly CheatSheetData[]>;
}

class EN implements CheatSheetManager {
    private items: readonly CheatSheetData[] | undefined;

    filterByWords = async (
        words: readonly string[],
    ): Promise<readonly CheatSheetData[]> => {
        if (this.items == null) {
            this.items = await this.createItems();
        }
        return this.items.map((i) => {
            return {
                ...i,
                fullDocumentations: filterByWords(i.fullDocumentations, words),
            };
        });
    };

    private createItems = async (): Promise<CheatSheetData[]> => {
        return Promise.all(
            Object.values(CategoryEnum).map(async (c) => {
                return convertToCSData(c, await Importer[c]);
            }),
        );
    };
}

export const cheatSheetManagerEN = new EN();

class JA implements CheatSheetManager {
    private items: readonly CheatSheetData[] | undefined;

    filterByWords = async (
        words: readonly string[],
    ): Promise<readonly CheatSheetData[]> => {
        if (this.items == null) {
            this.items = await this.createItems();
        }
        return this.items.map((i) => {
            return {
                ...i,
                fullDocumentations: filterByWords(i.fullDocumentations, words),
            };
        });
    };

    private createItems = async (): Promise<CheatSheetData[]> => {
        return Promise.all(
            Object.values(CategoryEnum).map(async (c) => {
                return convertToCSData(
                    c,
                    await Importer[c],
                    await ImporterJA[c],
                );
            }),
        );
    };
}

export const cheatSheetManagerJA = new JA();

/* -------------------------------------------------------------------------- */

/** 英語のドキュメントと翻訳した内容を合成したオブジェクトを返す */
export const convertToCSData = (
    category: Category,
    documentations: readonly Documentation[],
    translations?: Map<string, Translation>,
): CheatSheetData => {
    return {
        category: category,
        translatedCategory: translations?.get(category)?.entry,
        fullDocumentations: documentations.map((d) => {
            const t = translations?.get(d.entry);
            return {
                url: d.url,
                entry: d.entry,
                translatedEntry: t?.entry,
                description: t?.description ?? d.description,
                details: t?.details,
                parameters: d.parameters,
            };
        }),
    };
};

/** 検索ワードを含む要素をフィルタリングする */
export const filterByWords = (
    fullDocumentations: readonly FullDocumentation[],
    words?: readonly string[],
): readonly FullDocumentation[] => {
    if (words == null) return fullDocumentations;
    if (words.length === 0) return fullDocumentations;

    return fullDocumentations.filter((f) => {
        return words.every((w) => {
            if (hasWord(f.entry, w)) return true;
            if (hasWord(f.translatedEntry, w)) return true;
            if (hasWord(f.description, w)) return true;
            for (const details of f.details ?? []) {
                if (hasWord(details[0], w)) return true;
                if (hasWord(details[1], w)) return true;
            }
            for (const parameters of f.parameters) {
                for (const parameter of parameters) {
                    if (hasWord(parameter, w)) return true;
                }
            }
            return false;
        });
    });
};

const hasWord = (value: string | undefined, word: string): boolean => {
    if (value == null) return false;
    return value.toLowerCase().includes(word.toLowerCase());
};
