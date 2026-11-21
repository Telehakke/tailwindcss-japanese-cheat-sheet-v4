import { describe, expect, it } from "vite-plus/test";
import { isLanguage, LanguageEnum } from "./language";

describe("isLanguage", () => {
  it("正常値を渡すとtrueを返す", () => {
    expect(isLanguage(LanguageEnum.ja)).toBeTruthy();
    expect(isLanguage(LanguageEnum.en)).toBeTruthy();
  });

  it("不正値を渡すとfalseを返す", () => {
    expect(isLanguage(null)).toBeFalsy();
  });
});
