import type {
    Accessibility,
    Backgrounds,
    Borders,
    Effects,
    Filters,
    FlexboxAndGrid,
    Interactivity,
    Layout,
    Sizing,
    Spacing,
    SVG,
    Tables,
    Transforms,
    TransitionsAndAnimation,
    Typography,
} from "./entry";
import {
    AccessibilityVersionEnum,
    BackgroundsVersionEnum,
    BordersVersionEnum,
    EffectsVersionEnum,
    FiltersVersionEnum,
    FlexboxAndGridVersionEnum,
    InteractivityVersionEnum,
    LayoutVersionEnum,
    SizingVersionEnum,
    SpacingVersionEnum,
    SVGVersionEnum,
    TablesVersionEnum,
    TransformsVersionEnum,
    TransitionsAndAnimationVersionEnum,
    TypographyVersionEnum,
    type Version,
} from "./version";

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
    return Object.values(CategoryEnum).some((v) => v === value);
};

/* -------------------------------------------------------------------------- */

export const CategoryManagerFactory = {
    create: (category: Category): CategoryManager => {
        switch (category) {
            case "Layout":
                return Layout;
            case "Flexbox & Grid":
                return FlexboxAndGrid;
            case "Spacing":
                return Spacing;
            case "Sizing":
                return Sizing;
            case "Typography":
                return Typography;
            case "Backgrounds":
                return Backgrounds;
            case "Borders":
                return Borders;
            case "Effects":
                return Effects;
            case "Filters":
                return Filters;
            case "Tables":
                return Tables;
            case "Transitions & Animation":
                return TransitionsAndAnimation;
            case "Transforms":
                return Transforms;
            case "Interactivity":
                return Interactivity;
            case "SVG":
                return SVG;
            case "Accessibility":
                return Accessibility;
        }
    },
};

type CategoryManager = {
    getVersion: (entry: string) => Version;
};

const Layout: CategoryManager = {
    getVersion: (entry) => LayoutVersionEnum[entry as Layout],
};

const FlexboxAndGrid: CategoryManager = {
    getVersion: (entry) => FlexboxAndGridVersionEnum[entry as FlexboxAndGrid],
};

const Spacing: CategoryManager = {
    getVersion: (entry) => SpacingVersionEnum[entry as Spacing],
};

const Sizing: CategoryManager = {
    getVersion: (entry) => SizingVersionEnum[entry as Sizing],
};

const Typography: CategoryManager = {
    getVersion: (entry) => TypographyVersionEnum[entry as Typography],
};

const Backgrounds: CategoryManager = {
    getVersion: (entry) => BackgroundsVersionEnum[entry as Backgrounds],
};

const Borders: CategoryManager = {
    getVersion: (entry) => BordersVersionEnum[entry as Borders],
};

const Effects: CategoryManager = {
    getVersion: (entry) => EffectsVersionEnum[entry as Effects],
};

const Filters: CategoryManager = {
    getVersion: (entry) => FiltersVersionEnum[entry as Filters],
};

const Tables: CategoryManager = {
    getVersion: (entry) => TablesVersionEnum[entry as Tables],
};

const TransitionsAndAnimation: CategoryManager = {
    getVersion: (entry) =>
        TransitionsAndAnimationVersionEnum[entry as TransitionsAndAnimation],
};

const Transforms: CategoryManager = {
    getVersion: (entry) => TransformsVersionEnum[entry as Transforms],
};

const Interactivity: CategoryManager = {
    getVersion: (entry) => InteractivityVersionEnum[entry as Interactivity],
};

const SVG: CategoryManager = {
    getVersion: (entry) => SVGVersionEnum[entry as SVG],
};

const Accessibility: CategoryManager = {
    getVersion: (entry) => AccessibilityVersionEnum[entry as Accessibility],
};
