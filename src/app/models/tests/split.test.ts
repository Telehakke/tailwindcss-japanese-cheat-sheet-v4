import { describe, expect, it } from "vitest";
import { splitByWhitespace } from "../split";

describe("splitByWhitespace", () => {
    it("半角スペースを区切り文字として入力文字列を配列に分割", () => {
        const result = splitByWhitespace(" a bb  ccc ");
        expect(result).toEqual(["a", "bb", "ccc"]);
    });

    it("全角スペースを区切り文字として入力文字列を配列に分割", () => {
        const result = splitByWhitespace("　a　bb　　ccc　");
        expect(result).toEqual(["a", "bb", "ccc"]);
    });

    it("空の文字列を渡すと空の配列を返す", () => {
        const result = splitByWhitespace("");
        expect(result).toEqual([]);
    });

    it("半角スペースだけを渡すと空の配列を返す", () => {
        const result = splitByWhitespace(" ");
        expect(result).toEqual([]);
    });

    it("全角スペースだけを渡すと空の配列を返す", () => {
        const result = splitByWhitespace("　");
        expect(result).toEqual([]);
    });
});
