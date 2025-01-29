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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isCategory = (value: any): value is Category => {
    if (value === CategoryEnum.Layout) return true;
    if (value === CategoryEnum.FlexboxAndGrid) return true;
    if (value === CategoryEnum.Spacing) return true;
    if (value === CategoryEnum.Sizing) return true;
    if (value === CategoryEnum.Typography) return true;
    if (value === CategoryEnum.Backgrounds) return true;
    if (value === CategoryEnum.Borders) return true;
    if (value === CategoryEnum.Effects) return true;
    if (value === CategoryEnum.Filters) return true;
    if (value === CategoryEnum.Tables) return true;
    if (value === CategoryEnum.TransitionsAndAnimation) return true;
    if (value === CategoryEnum.Transforms) return true;
    if (value === CategoryEnum.Interactivity) return true;
    if (value === CategoryEnum.SVG) return true;
    if (value === CategoryEnum.Accessibility) return true;
    return false;
};
