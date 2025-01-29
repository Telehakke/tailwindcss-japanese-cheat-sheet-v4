import { CategoryEnum } from "./category";
import {
    CheatSheetData,
    DetailedDocumentation,
    Documentation,
    Translation,
} from "./types";
import { documentations as layout } from "../data/Layout_v4.0";
import { documentations as flexboxAndGrid } from "../data/Flexbox & Grid_v4.0";
import { documentations as spacing } from "../data/Spacing_v4.0";
import { documentations as sizing } from "../data/Sizing_v4.0";
import { documentations as typography } from "../data/Typography_v4.0";
import { documentations as backgrounds } from "../data/Backgrounds_v4.0";
import { documentations as borders } from "../data/Borders_v4.0";
import { documentations as effects } from "../data/Effects_v4.0";
import { documentations as filters } from "../data/Filters_v4.0";
import { documentations as tables } from "../data/Tables_v4.0";
import { documentations as transitionsAndAnimation } from "../data/Transitions & Animation_v4.0";
import { documentations as transforms } from "../data/Transforms_v4.0";
import { documentations as interactivity } from "../data/Interactivity_v4.0";
import { documentations as svg } from "../data/SVG_v4.0";
import { documentations as accessibility } from "../data/Accessibility_v4.0";
import layoutJA from "../translations/layoutJA";
import flexboxAndGridJA from "../translations/flexboxAndGridJA";
import spacingJA from "../translations/spacingJA";
import sizingJA from "../translations/sizingJA";
import typographyJA from "../translations/typographyJA";
import backgroundsJA from "../translations/backgroundsJA";
import bordersJA from "../translations/bordersJA";
import effectsJA from "../translations/effectsJA";
import filtersJA from "../translations/filtersJA";
import tableJA from "../translations/tableJA";
import transitionsAndAnimationJA from "../translations/transitionsAndAnimationJA";
import transformsJA from "../translations/transformsJA";
import interactivityJA from "../translations/interactivityJA";
import svgJA from "../translations/svgJA";
import accessibilityJA from "../translations/accessibilityJA";

abstract class Translator {
    protected cache: CheatSheetData[] | null = null;

    protected abstract documentationsTriple: [
        string,
        Documentation[],
        Map<string, Translation>,
    ][];

    /**
     * 翻訳されたカテゴリー名と詳細な説明書を返す
     */
    getCheatSheetData = (): CheatSheetData[] => {
        if (this.cache == null) {
            this.cache = this.documentationsTriple //
                .map(([category, documentations, translations]) => {
                    const newCategory = this.translateCategory(
                        category,
                        translations,
                    );
                    const detailedDocumentations =
                        this.translateDetailedDocumentations(
                            documentations,
                            translations,
                        );
                    return {
                        category: newCategory,
                        categoryEN: category,
                        detailedDocumentations: detailedDocumentations,
                    };
                });
        }
        return this.cache;
    };

    /**
     * カテゴリー名を"Category / カテゴリー" のような形式で返す
     */
    private translateCategory = (
        category: string,
        translations: Map<string, Translation>,
    ): string => {
        const translation = translations.get(category);
        return `${category}${translation ? ` / ${translation.entry}` : ""}`;
    };

    /**
     *  元の説明書と翻訳文を合成した詳細な説明書を返す
     */
    private translateDetailedDocumentations = (
        documentations: Documentation[],
        translations: Map<string, Translation>,
    ): DetailedDocumentation[] => {
        const result = documentations.map((doc) => {
            const translation = translations.get(doc.entry);
            const detailedDocumentation: DetailedDocumentation = {
                url: doc.url,
                entry: `${doc.entry}\n${translation?.entry ?? ""}`,
                description:
                    translation != null && translation.description !== ""
                        ? translation.description
                        : doc.description,
                detail: translation?.detail,
                parameters: doc.parameters,
            };
            return detailedDocumentation;
        });
        return result;
    };
}

/**
 * カテゴリー名と詳細な説明書を日本語で提供する
 */
export class TranslatorJA extends Translator {
    // prettier-ignore
    protected readonly documentationsTriple: [
        string,
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
        [CategoryEnum.TransitionsAndAnimation, transitionsAndAnimation, transitionsAndAnimationJA],
        [CategoryEnum.Transforms, transforms, transformsJA],
        [CategoryEnum.Interactivity, interactivity, interactivityJA],
        [CategoryEnum.SVG, svg, svgJA],
        [CategoryEnum.Accessibility, accessibility, accessibilityJA],
    ];
}

/**
 * カテゴリー名と詳細な説明書を英語で提供する
 */
export class TranslatorEN extends Translator {
    private empty = new Map<string, Translation>();

    // prettier-ignore
    protected readonly documentationsTriple: [
        string,
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
        [CategoryEnum.TransitionsAndAnimation, transitionsAndAnimation, this.empty],
        [CategoryEnum.Transforms, transforms, this.empty],
        [CategoryEnum.Interactivity, interactivity, this.empty],
        [CategoryEnum.SVG, svg, this.empty],
        [CategoryEnum.Accessibility, accessibility, this.empty],
    ];
}
