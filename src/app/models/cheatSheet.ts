import { documentations as accessibility } from "../data/Accessibility_v4.1";
import { documentations as backgrounds } from "../data/Backgrounds_v4.1";
import { documentations as borders } from "../data/Borders_v4.1";
import { documentations as effects } from "../data/Effects_v4.1";
import { documentations as filters } from "../data/Filters_v4.1";
import { documentations as flexboxAndGrid } from "../data/Flexbox & Grid_v4.1";
import { documentations as interactivity } from "../data/Interactivity_v4.1";
import { documentations as layout } from "../data/Layout_v4.1";
import { documentations as sizing } from "../data/Sizing_v4.1";
import { documentations as spacing } from "../data/Spacing_v4.1";
import { documentations as svg } from "../data/SVG_v4.1";
import { documentations as tables } from "../data/Tables_v4.1";
import { documentations as transforms } from "../data/Transforms_v4.1";
import { documentations as transitionsAndAnimation } from "../data/Transitions & Animation_v4.1";
import accessibilityJA from "../data/translations/accessibilityJA";
import backgroundsJA from "../data/translations/backgroundsJA";
import bordersJA from "../data/translations/bordersJA";
import effectsJA from "../data/translations/effectsJA";
import filtersJA from "../data/translations/filtersJA";
import flexboxAndGridJA from "../data/translations/flexboxAndGridJA";
import interactivityJA from "../data/translations/interactivityJA";
import layoutJA from "../data/translations/layoutJA";
import sizingJA from "../data/translations/sizingJA";
import spacingJA from "../data/translations/spacingJA";
import svgJA from "../data/translations/svgJA";
import tableJA from "../data/translations/tableJA";
import transformsJA from "../data/translations/transformsJA";
import transitionsAndAnimationJA from "../data/translations/transitionsAndAnimationJA";
import typographyJA from "../data/translations/typographyJA";
import { documentations as typography } from "../data/Typography_v4.1";

import { CategoryEnum, type Category } from "./category";
import DocumentationConverter from "./documentationConverter";
import DocumentationDetailsFilter from "./documentationDetailsFilter";
import { LanguageEnum, type Language } from "./language";
import {
    type CheatSheetData,
    type Documentation,
    type Translation,
} from "./types";

export class CheatSheetFactory {
    static createInstance = (language: Language): CheatSheet => {
        if (language === LanguageEnum.ja) {
            return new CheatSheetJA(
                new DocumentationConverter(),
                new DocumentationDetailsFilter(),
            );
        }
        return new CheatSheetEN(
            new DocumentationConverter(),
            new DocumentationDetailsFilter(),
        );
    };
}

export interface CheatSheet {
    cheatSheetDataList(): readonly CheatSheetData[];
    filtering(searchStrings: string[]): readonly CheatSheetData[];
}

class CheatSheetEN implements CheatSheet {
    private empty: Map<string, Translation> = new Map();
    private documentations: [
        Category,
        Documentation[],
        Map<string, Translation>,
    ][] = [
        [CategoryEnum.Layout, layout, this.empty],
        [CategoryEnum.FlexboxAndGrid, flexboxAndGrid, this.empty],
        [CategoryEnum.Spacing, spacing, this.empty],
        [CategoryEnum.Sizing, sizing, this.empty],
        [CategoryEnum.Typography, typography, this.empty],
        [CategoryEnum.Backgrounds, backgrounds, this.empty],
        [CategoryEnum.Borders, borders, this.empty],
        [CategoryEnum.Effects, effects, this.empty],
        [CategoryEnum.Filters, filters, this.empty],
        [CategoryEnum.Tables, tables, this.empty],
        [
            CategoryEnum.TransitionsAndAnimation,
            transitionsAndAnimation,
            this.empty,
        ],
        [CategoryEnum.Transforms, transforms, this.empty],
        [CategoryEnum.Interactivity, interactivity, this.empty],
        [CategoryEnum.SVG, svg, this.empty],
        [CategoryEnum.Accessibility, accessibility, this.empty],
    ];
    private _cheatSheetDataList: readonly CheatSheetData[];
    private documentationDetailsFilter: DocumentationDetailsFilter;

    constructor(
        documentationConverter: DocumentationConverter,
        documentationDetailsFilter: DocumentationDetailsFilter,
    ) {
        this._cheatSheetDataList =
            documentationConverter.convertToCheatSheetDataList(
                this.documentations,
            );
        this.documentationDetailsFilter = documentationDetailsFilter;
    }

    cheatSheetDataList = (): readonly CheatSheetData[] => {
        return this._cheatSheetDataList;
    };

    filtering = (searchStrings: string[]): readonly CheatSheetData[] => {
        return this._cheatSheetDataList.map((v) => {
            const obj: CheatSheetData = {
                category: v.category,
                categoryEN: v.categoryEN,
                documentationDetailsList:
                    this.documentationDetailsFilter.filtering(
                        v.documentationDetailsList,
                        searchStrings,
                    ),
            };
            return obj;
        });
    };
}

class CheatSheetJA implements CheatSheet {
    private documentations: [
        Category,
        Documentation[],
        Map<string, Translation>,
    ][] = [
        [CategoryEnum.Layout, layout, layoutJA],
        [CategoryEnum.FlexboxAndGrid, flexboxAndGrid, flexboxAndGridJA],
        [CategoryEnum.Spacing, spacing, spacingJA],
        [CategoryEnum.Sizing, sizing, sizingJA],
        [CategoryEnum.Typography, typography, typographyJA],
        [CategoryEnum.Backgrounds, backgrounds, backgroundsJA],
        [CategoryEnum.Borders, borders, bordersJA],
        [CategoryEnum.Effects, effects, effectsJA],
        [CategoryEnum.Filters, filters, filtersJA],
        [CategoryEnum.Tables, tables, tableJA],
        [
            CategoryEnum.TransitionsAndAnimation,
            transitionsAndAnimation,
            transitionsAndAnimationJA,
        ],
        [CategoryEnum.Transforms, transforms, transformsJA],
        [CategoryEnum.Interactivity, interactivity, interactivityJA],
        [CategoryEnum.SVG, svg, svgJA],
        [CategoryEnum.Accessibility, accessibility, accessibilityJA],
    ];
    private _cheatSheetDataList: readonly CheatSheetData[];
    private documentationDetailsFilter: DocumentationDetailsFilter;

    constructor(
        documentationConverter: DocumentationConverter,
        documentationDetailsFilter: DocumentationDetailsFilter,
    ) {
        this._cheatSheetDataList =
            documentationConverter.convertToCheatSheetDataList(
                this.documentations,
            );
        this.documentationDetailsFilter = documentationDetailsFilter;
    }

    cheatSheetDataList = (): readonly CheatSheetData[] => {
        return this._cheatSheetDataList;
    };

    filtering = (searchStrings: string[]): readonly CheatSheetData[] => {
        return this._cheatSheetDataList.map((v) => {
            const obj: CheatSheetData = {
                category: v.category,
                categoryEN: v.categoryEN,
                documentationDetailsList:
                    this.documentationDetailsFilter.filtering(
                        v.documentationDetailsList,
                        searchStrings,
                    ),
            };
            return obj;
        });
    };
}
