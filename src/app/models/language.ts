import {
    cheatSheetManagerEN,
    cheatSheetManagerJA,
    type CheatSheetData,
} from "./cheatSheetData";
import { UILabelEN, UILabelJA, type UILabel } from "./uiLabel";

export const LanguageEnum = {
    en: "en",
    ja: "ja",
} as const;

export type Language = (typeof LanguageEnum)[keyof typeof LanguageEnum];

export const isLanguage = (value: unknown): value is Language => {
    return Object.values(LanguageEnum).some((v) => v === value);
};

/* -------------------------------------------------------------------------- */

export const LanguageManagerFactory = {
    create: (language: Language): LanguageManager => {
        if (language == "ja") return JA;
        return EN;
    },
};

export type LanguageManager = {
    readonly uiLabel: UILabel;
    filterCheatSheetDataItemsByWords: (
        words: string[],
    ) => Promise<readonly CheatSheetData[]>;
};

const EN: LanguageManager = {
    uiLabel: UILabelEN,
    filterCheatSheetDataItemsByWords: async (words) => {
        return await cheatSheetManagerEN.filterByWords(words);
    },
};

const JA: LanguageManager = {
    uiLabel: UILabelJA,
    filterCheatSheetDataItemsByWords: async (words) => {
        return await cheatSheetManagerJA.filterByWords(words);
    },
};
