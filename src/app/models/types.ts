export type Navigation = {
    category: string;
    urls: readonly string[];
};

export type Documentation = {
    url: string;
    entry: string;
    description: string;
    parameters: readonly string[][];
};

export type DocumentationDetails = {
    url: string;
    entry: string;
    description: string;
    detail: React.JSX.Element | null | undefined;
    parameters: readonly string[][];
};

export type Translation = {
    entry: string;
    description: string;
    detail: React.JSX.Element | null;
};

export type CheatSheetData = {
    category: string;
    categoryEN: string;
    documentationDetailsList: readonly DocumentationDetails[];
};

export const LanguageEnum = {
    en: "en",
    ja: "ja",
} as const;

export type Language = (typeof LanguageEnum)[keyof typeof LanguageEnum];
