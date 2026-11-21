export const LanguageEnum = { ja: "ja", en: "en" } as const;

export type Language = (typeof LanguageEnum)[keyof typeof LanguageEnum];

export const isLanguage = (value: unknown): value is Language => {
  return values.some((v) => v === value);
};

export const getLanguageValues = (): readonly Language[] => {
  return values;
};

/* -------------------------------------------------------------------------- */

const values = Object.values(LanguageEnum);
