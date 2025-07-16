import { describe, expect, it } from "vitest";
import { CategoryEnum, type Category } from "../category";
import DocumentationConverter from "../documentationConverter";
import type { CheatSheetData, Documentation, Translation } from "../types";

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
            "aspect-ratio",
            {
                entry: "アスペクト比",
                description: "要素のアスペクト比を指定する",
                details: [],
            },
        ],
    ]);

    it("1", () => {
        const documentations: [
            Category,
            Documentation[],
            Map<string, Translation>,
        ][] = [[CategoryEnum.Layout, layoutEN, layoutJA]];
        const result = new DocumentationConverter().convertToCheatSheetDataList(
            documentations,
        );
        const expected: CheatSheetData[] = [
            {
                category: "Layout / レイアウト",
                categoryEN: "Layout",
                documentationDetailsList: [
                    {
                        url: "https://tailwindcss.com/docs/aspect-ratio",
                        entry: "aspect-ratio\nアスペクト比",
                        description: "要素のアスペクト比を指定する",
                        details: [],
                        parameters: [
                            ["aspect-<ratio>", "aspect-ratio: <ratio>;"],
                        ],
                    },
                ],
            },
        ];
        expect(result).toEqual(expected);
    });

    it("2", () => {
        const documentations: [
            Category,
            Documentation[],
            Map<string, Translation>,
        ][] = [[CategoryEnum.Layout, layoutEN, new Map()]];
        const result = new DocumentationConverter().convertToCheatSheetDataList(
            documentations,
        );
        const expected: CheatSheetData[] = [
            {
                category: "Layout",
                categoryEN: "Layout",
                documentationDetailsList: [
                    {
                        url: "https://tailwindcss.com/docs/aspect-ratio",
                        entry: "aspect-ratio",
                        description:
                            "Utilities for controlling the aspect ratio of an element.",
                        details: [],
                        parameters: [
                            ["aspect-<ratio>", "aspect-ratio: <ratio>;"],
                        ],
                    },
                ],
            },
        ];
        expect(result).toEqual(expected);
    });
});
