import { describe, expect, it } from "vite-plus/test";
import { splitByWhitespace } from "./split";

describe("splitByWhitespace", () => {
  it("半角スペースを区切り文字として入力文字列を配列に分割", () => {
    expect(splitByWhitespace(" a bb  ccc ")).toEqual(["a", "bb", "ccc"]);
  });

  it("全角スペースを区切り文字として入力文字列を配列に分割", () => {
    expect(splitByWhitespace("　a　bb　　ccc　")).toEqual(["a", "bb", "ccc"]);
  });

  it("空の文字列を渡すと空の配列を返す", () => {
    expect(splitByWhitespace("")).toEqual([]);
  });

  it("半角スペースだけを渡すと空の配列を返す", () => {
    expect(splitByWhitespace(" ")).toEqual([]);
  });

  it("全角スペースだけを渡すと空の配列を返す", () => {
    expect(splitByWhitespace("　")).toEqual([]);
  });
});
