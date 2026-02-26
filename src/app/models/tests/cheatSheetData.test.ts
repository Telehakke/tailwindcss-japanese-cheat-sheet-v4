import { describe, expect, it } from "vitest";
import { CategoryEnum } from "../category";
import {
    convertToCSData,
    filterByWords,
    type CheatSheetData,
    type Documentation,
    type FullDocumentation,
    type Translation,
} from "../cheatSheetData";
import { LayoutEnum } from "../entry";

describe("convertToCheatSheetData", () => {
    const layoutEN: Documentation[] = [
        {
            url: "https://tailwindcss.com/docs/aspect-ratio",
            entry: "aspect-ratio",
            description:
                "Utilities for controlling the aspect ratio of an element.",
            parameters: [["aspect-<ratio>", "aspect-ratio: <ratio>;"]],
        },
    ];
    const layoutJA: Map<string, Translation> = new Map([
        [
            CategoryEnum.Layout,
            {
                entry: "レイアウト",
                description: "",
                details: [],
            },
        ],
        [
            LayoutEnum.aspectRatio,
            {
                entry: "アスペクト比",
                description: "要素のアスペクト比を指定する",
                details: [],
            },
        ],
    ]);

    it("英語と日本語のデータを渡すと合成した結果を返す", () => {
        const result = convertToCSData("Layout", layoutEN, layoutJA);
        const expected: CheatSheetData = {
            category: "Layout",
            translatedCategory: "レイアウト",
            fullDocumentations: [
                {
                    url: "https://tailwindcss.com/docs/aspect-ratio",
                    entry: "aspect-ratio",
                    translatedEntry: "アスペクト比",
                    description: "要素のアスペクト比を指定する",
                    details: [],
                    parameters: [["aspect-<ratio>", "aspect-ratio: <ratio>;"]],
                },
            ],
        };
        expect(result).toEqual(expected);
    });

    it("英語だけのデータを渡すと、英語の結果を返す", () => {
        const result = convertToCSData("Layout", layoutEN);
        const expected: CheatSheetData = {
            category: "Layout",
            translatedCategory: undefined,
            fullDocumentations: [
                {
                    url: "https://tailwindcss.com/docs/aspect-ratio",
                    entry: "aspect-ratio",
                    translatedEntry: undefined,
                    description:
                        "Utilities for controlling the aspect ratio of an element.",
                    details: undefined,
                    parameters: [["aspect-<ratio>", "aspect-ratio: <ratio>;"]],
                },
            ],
        };
        expect(result).toEqual(expected);
    });
});

describe("filterByWords", () => {
    const fullDocumentations: FullDocumentation[] = [
        {
            url: "https://example.com/",
            entry: "Entry1",
            translatedEntry: "エントリー1",
            description: "Description1",
            details: [["Detail1-1", "Detail1-2"]],
            parameters: [["Parameter1-1", "Parameter1-2"]],
        },
        {
            url: "https://example.com/",
            entry: "Entry2",
            translatedEntry: "エントリー2",
            description: "Description2",
            details: [["Detail2-1", "Detail2-2"]],
            parameters: [["Parameter2-1", "Parameter2-2"]],
        },
    ];

    it("検索ワードをentryに含む0番目の要素を返す", () => {
        const result = filterByWords(fullDocumentations, ["entry1"]);
        expect(result).toEqual([fullDocumentations[0]]);
    });

    it("検索ワードをentryに含む1番目の要素を返す", () => {
        const result = filterByWords(fullDocumentations, ["entry2"]);
        expect(result).toEqual([fullDocumentations[1]]);
    });

    it("検索ワードをentryに含む2つの要素を返す", () => {
        const result = filterByWords(fullDocumentations, ["entry"]);
        expect(result).toEqual(fullDocumentations);
    });

    it("検索ワードをtranslatedEntryに含む0番目の要素を返す", () => {
        const result = filterByWords(fullDocumentations, ["エントリー1"]);
        expect(result).toEqual([fullDocumentations[0]]);
    });

    it("検索ワードをdescriptionに含む0番目の要素を返す", () => {
        const result = filterByWords(fullDocumentations, ["description1"]);
        expect(result).toEqual([fullDocumentations[0]]);
    });

    it("検索ワードをdetailsに含む0番目の要素を返す", () => {
        const result = filterByWords(fullDocumentations, ["detail1-1"]);
        expect(result).toEqual([fullDocumentations[0]]);
    });

    it("検索ワードをparametersに含む0番目の要素を返す", () => {
        const result = filterByWords(fullDocumentations, ["parameter1-1"]);
        expect(result).toEqual([fullDocumentations[0]]);
    });

    it("検索ワードを含まない場合、空の配列を返す", () => {
        const result = filterByWords(fullDocumentations, ["abcde"]);
        expect(result).toEqual([]);
    });

    it("検索ワードが空の配列の場合、値をそのまま返す", () => {
        const result = filterByWords(fullDocumentations, []);
        expect(result).toEqual(fullDocumentations);
    });

    it("検索ワードを渡さない場合、値をそのまま返す", () => {
        const result = filterByWords(fullDocumentations);
        expect(result).toEqual(fullDocumentations);
    });

    describe("translatedEntryがundefinedでも正しく動作するか", () => {
        const fullDocumentations: FullDocumentation[] = [
            {
                url: "https://example.com/",
                entry: "Entry1",
                translatedEntry: undefined,
                description: "Description1",
                details: [["Detail1-1", "Detail1-2"]],
                parameters: [["Parameter1-1", "Parameter1-2"]],
            },
        ];

        it("検索ワードを含むケース", () => {
            const result = filterByWords(fullDocumentations, ["parameter1-1"]);
            expect(result).toEqual(fullDocumentations);
        });

        it("検索ワードを含まないケース", () => {
            const result = filterByWords(fullDocumentations, ["abcde"]);
            expect(result).toEqual([]);
        });
    });

    describe("detailsがundefinedでも正しく動作するか", () => {
        const fullDocumentations: FullDocumentation[] = [
            {
                url: "https://example.com/",
                entry: "Entry1",
                translatedEntry: "エントリー1",
                description: "Description1",
                details: undefined,
                parameters: [["Parameter1-1", "Parameter1-2"]],
            },
        ];
        it("検索ワードを含むケース", () => {
            const result = filterByWords(fullDocumentations, ["parameter1-1"]);
            expect(result).toEqual(fullDocumentations);
        });

        it("検索ワードを含まないケース", () => {
            const result = filterByWords(fullDocumentations, ["abcde"]);
            expect(result).toEqual([]);
        });
    });
});
