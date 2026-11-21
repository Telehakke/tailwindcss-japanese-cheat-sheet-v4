import { describe, expect, it } from "vite-plus/test";
import { CategoryEnum, isCategory } from "./category";

describe("isCategory", () => {
  it("正常値を渡すとtrueを返す", () => {
    expect(isCategory(CategoryEnum.Layout)).toBeTruthy();
    expect(isCategory(CategoryEnum.FlexboxAndGrid)).toBeTruthy();
    expect(isCategory(CategoryEnum.Spacing)).toBeTruthy();
    expect(isCategory(CategoryEnum.Sizing)).toBeTruthy();
    expect(isCategory(CategoryEnum.Typography)).toBeTruthy();
    expect(isCategory(CategoryEnum.Backgrounds)).toBeTruthy();
    expect(isCategory(CategoryEnum.Borders)).toBeTruthy();
    expect(isCategory(CategoryEnum.Effects)).toBeTruthy();
    expect(isCategory(CategoryEnum.Filters)).toBeTruthy();
    expect(isCategory(CategoryEnum.Tables)).toBeTruthy();
    expect(isCategory(CategoryEnum.TransitionsAndAnimation)).toBeTruthy();
    expect(isCategory(CategoryEnum.Transforms)).toBeTruthy();
    expect(isCategory(CategoryEnum.Interactivity)).toBeTruthy();
    expect(isCategory(CategoryEnum.SVG)).toBeTruthy();
    expect(isCategory(CategoryEnum.Accessibility)).toBeTruthy();
  });

  it("不正値を渡すとfalseを返す", () => {
    expect(isCategory(null)).toBeFalsy();
  });
});
