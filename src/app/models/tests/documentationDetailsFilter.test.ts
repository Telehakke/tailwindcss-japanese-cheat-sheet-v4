import { describe, expect, it } from "vitest";
import DocumentationDetailsFilter from "../documentationDetailsFilter";
import { DocumentationDetails } from "../types";

describe("filtering", () => {
    const documentationDetailsList: DocumentationDetails[] = [
        {
            url: "https://tailwindcss.com/docs/aspect-ratio",
            entry: "aspect-ratio",
            description:
                "Utilities for controlling the aspect ratio of an element.",
            detail: undefined,
            parameters: [["aspect-<ratio>", "aspect-ratio: <ratio>;"]],
        },
        {
            url: "https://tailwindcss.com/docs/columns",
            entry: "columns",
            description:
                "Utilities for controlling the number of columns within an element.",
            detail: undefined,
            parameters: [["columns-<number>", "columns: <number>;"]],
        },
    ];

    const filter = new DocumentationDetailsFilter();

    it("1", () => {
        const result = filter.filtering(documentationDetailsList, [
            "aspect-ratio",
        ]);
        const expected: DocumentationDetails[] = [
            {
                url: "https://tailwindcss.com/docs/aspect-ratio",
                entry: "aspect-ratio",
                description:
                    "Utilities for controlling the aspect ratio of an element.",
                detail: undefined,
                parameters: [["aspect-<ratio>", "aspect-ratio: <ratio>;"]],
            },
        ];
        expect(result).toEqual(expected);
    });

    it("2", () => {
        const result = filter.filtering(documentationDetailsList, [
            "Utilities for controlling the aspect ratio of an element.",
        ]);
        const expected: DocumentationDetails[] = [
            {
                url: "https://tailwindcss.com/docs/aspect-ratio",
                entry: "aspect-ratio",
                description:
                    "Utilities for controlling the aspect ratio of an element.",
                detail: undefined,
                parameters: [["aspect-<ratio>", "aspect-ratio: <ratio>;"]],
            },
        ];
        expect(result).toEqual(expected);
    });

    it("3", () => {
        const result = filter.filtering(documentationDetailsList, [
            "aspect-<ratio>",
        ]);
        const expected: DocumentationDetails[] = [
            {
                url: "https://tailwindcss.com/docs/aspect-ratio",
                entry: "aspect-ratio",
                description:
                    "Utilities for controlling the aspect ratio of an element.",
                detail: undefined,
                parameters: [["aspect-<ratio>", "aspect-ratio: <ratio>;"]],
            },
        ];
        expect(result).toEqual(expected);
    });

    it("4", () => {
        const result = filter.filtering(documentationDetailsList, [
            "utilities",
            "aspect",
        ]);
        const expected: DocumentationDetails[] = [
            {
                url: "https://tailwindcss.com/docs/aspect-ratio",
                entry: "aspect-ratio",
                description:
                    "Utilities for controlling the aspect ratio of an element.",
                detail: undefined,
                parameters: [["aspect-<ratio>", "aspect-ratio: <ratio>;"]],
            },
        ];
        expect(result).toEqual(expected);
    });

    it("5", () => {
        const result = filter.filtering(documentationDetailsList, [
            "存在しない文字列",
        ]);
        expect(result).toEqual([]);
    });
});
