import { describe } from "node:test";
import { expect, it } from "vitest";
import { isLanguage, LanguageEnum } from "../language";

describe("isLanguage", () => {
    it("1", () => {
        expect(isLanguage(LanguageEnum.ja)).toBeTruthy();
    });

    it("2", () => {
        expect(isLanguage(LanguageEnum.en)).toBeTruthy();
    });

    it("3", () => {
        expect(isLanguage(null)).toBeFalsy();
    });
});
