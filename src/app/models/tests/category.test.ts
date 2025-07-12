import { describe, expect, it } from "vitest";
import { CategoryEnum, isCategory } from "../category";

describe("isCategory", () => {
    it("1", () => {
        expect(isCategory(CategoryEnum.Layout)).toBeTruthy();
    });

    it("2", () => {
        expect(isCategory(CategoryEnum.FlexboxAndGrid)).toBeTruthy();
    });

    it("3", () => {
        expect(isCategory(CategoryEnum.Spacing)).toBeTruthy();
    });

    it("4", () => {
        expect(isCategory(CategoryEnum.Sizing)).toBeTruthy();
    });

    it("5", () => {
        expect(isCategory(CategoryEnum.Typography)).toBeTruthy();
    });

    it("6", () => {
        expect(isCategory(CategoryEnum.Backgrounds)).toBeTruthy();
    });

    it("7", () => {
        expect(isCategory(CategoryEnum.Borders)).toBeTruthy();
    });

    it("8", () => {
        expect(isCategory(CategoryEnum.Effects)).toBeTruthy();
    });

    it("9", () => {
        expect(isCategory(CategoryEnum.Filters)).toBeTruthy();
    });

    it("10", () => {
        expect(isCategory(CategoryEnum.Tables)).toBeTruthy();
    });

    it("11", () => {
        expect(isCategory(CategoryEnum.TransitionsAndAnimation)).toBeTruthy();
    });

    it("12", () => {
        expect(isCategory(CategoryEnum.Transforms)).toBeTruthy();
    });

    it("13", () => {
        expect(isCategory(CategoryEnum.Interactivity)).toBeTruthy();
    });

    it("14", () => {
        expect(isCategory(CategoryEnum.SVG)).toBeTruthy();
    });

    it("15", () => {
        expect(isCategory(CategoryEnum.Accessibility)).toBeTruthy();
    });

    it("16", () => {
        expect(isCategory(null)).toBeFalsy();
    });
});
