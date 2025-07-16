export const LanguageEnum = {
    en: "en",
    ja: "ja",
} as const;

export type Language = (typeof LanguageEnum)[keyof typeof LanguageEnum];
