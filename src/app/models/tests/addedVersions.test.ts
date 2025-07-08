import { describe, expect, it } from "vitest";
import { getAddedVersion } from "../addedVersions";

describe("getAddedVersion", () => {
    it("1", () => {
        const result = getAddedVersion("aspect-ratio");
        expect(result).toBe("v3");
    });

    it("2", () => {
        const result = getAddedVersion("");
        expect(result).toBe("");
    });
});
