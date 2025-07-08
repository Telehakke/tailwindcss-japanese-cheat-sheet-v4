import { describe, expect, it } from "vitest";
import { Category, CategoryEnum } from "../category";
import DocumentationConverter from "../documentationConverter";
import { CheatSheetData, Documentation, Translation } from "../types";

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
                detail: null,
            },
        ],
        [
            "aspect-ratio",
            {
                entry: "アスペクト比",
                description: "要素のアスペクト比を指定する",
                detail: null,
            },
        ],
    ]);

    it("1", () => {
        const documentations: [
            Category,
            Documentation[],
            Map<string, Translation>,
        ][] = [[CategoryEnum.Layout, layoutEN, layoutJA]];
        const result = new DocumentationConverter().convertToCheatSheetData(
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
                        detail: null,
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
        const result = new DocumentationConverter().convertToCheatSheetData(
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
                        detail: undefined,
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
