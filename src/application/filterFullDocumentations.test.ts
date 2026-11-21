import { describe, expect, it } from "vite-plus/test";
import type { FullDocumentation } from "./cheatSheetData";
import { filterFullDocumentations } from "./filterFullDocumentations";

describe("filterFullDocumentations", () => {
  const documentation: FullDocumentation = {
    url: "",
    entry: "entry",
    translatedEntry: "translatedEntry",
    description: "description",
    details: [["detail1", "detail2"]],
    parameters: [["param1", "param2"]],
  };
  const documentations: FullDocumentation[] = [documentation];

  it("指定した文字列が含まれていれば、配列の要素は取り除かれない", () => {
    expect(filterFullDocumentations(documentations, ["entry"])).toEqual(documentations);
    expect(filterFullDocumentations(documentations, ["translatedEntry"])).toEqual(documentations);
    expect(filterFullDocumentations(documentations, ["description"])).toEqual(documentations);
    expect(filterFullDocumentations(documentations, ["detail"])).toEqual(documentations);
    expect(filterFullDocumentations(documentations, ["param"])).toEqual(documentations);
  });

  it("指定した文字列が含まれていなければ、配列の要素は取り除かれる", () => {
    expect(filterFullDocumentations(documentations, ["nonexistence"])).toEqual([]);
  });
});
