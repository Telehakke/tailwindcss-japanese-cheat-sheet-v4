export const CategoryEnum = {
  Layout: "Layout",
  FlexboxAndGrid: "Flexbox & Grid",
  Spacing: "Spacing",
  Sizing: "Sizing",
  Typography: "Typography",
  Backgrounds: "Backgrounds",
  Borders: "Borders",
  Effects: "Effects",
  Filters: "Filters",
  Tables: "Tables",
  TransitionsAndAnimation: "Transitions & Animation",
  Transforms: "Transforms",
  Interactivity: "Interactivity",
  SVG: "SVG",
  Accessibility: "Accessibility",
} as const;

export type Category = (typeof CategoryEnum)[keyof typeof CategoryEnum];

export const isCategory = (value: unknown): value is Category => {
  return values.some((v) => v === value);
};

export const getCategoryValues = (): readonly Category[] => {
  return values;
};

/* -------------------------------------------------------------------------- */

const values = Object.values(CategoryEnum);
