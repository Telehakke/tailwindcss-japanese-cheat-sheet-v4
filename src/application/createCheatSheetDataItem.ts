import type { CheatSheetData } from "../application/cheatSheetData.ts";
import { getCategoryValues, type Category } from "../domain/models/category.ts";
import type { Language } from "../domain/models/language.ts";
import type { Translation } from "./translation.ts";

export type Documentation = {
  readonly url: string;
  readonly entry: string;
  readonly description: string;
  readonly parameters: readonly string[][];
};

export const createCheatSheetDataItem = (
  language: Language,
  documentations: Record<Category, Promise<readonly Documentation[]>>,
  translations: Record<Category, Promise<Map<string, Translation>>>,
): Promise<readonly CheatSheetData[]> => {
  if (language === "ja") return createCheatSheetDataItemJA(documentations, translations);
  return createCheatSheetDataItemEN(documentations);
};

/* -------------------------------------------------------------------------- */

let itemEN: CheatSheetData[] | undefined;
const createCheatSheetDataItemEN = async (
  documentations: Record<Category, Promise<readonly Documentation[]>>,
): Promise<readonly CheatSheetData[]> => {
  if (itemEN == null) {
    itemEN = await Promise.all(
      getCategoryValues().map(async (v) => convertToCheatSheetData(v, await documentations[v])),
    );
  }
  return itemEN;
};

let itemJA: CheatSheetData[] | undefined;
const createCheatSheetDataItemJA = async (
  documentations: Record<Category, Promise<readonly Documentation[]>>,
  translations: Record<Category, Promise<Map<string, Translation>>>,
): Promise<readonly CheatSheetData[]> => {
  if (itemJA == null) {
    itemJA = await Promise.all(
      getCategoryValues().map(async (v) =>
        convertToCheatSheetData(v, await documentations[v], await translations[v]),
      ),
    );
  }
  return itemJA;
};

/* -------------------------------------------------------------------------- */

/** 英語のドキュメントと翻訳した内容を合成したオブジェクトを返す */
const convertToCheatSheetData = (
  category: Category,
  documentations: readonly Documentation[],
  translations?: Map<string, Translation>,
): CheatSheetData => {
  return {
    category,
    translatedCategory: translations?.get(category)?.entry,
    fullDocumentations: documentations.map((v) => {
      const t = translations?.get(v.entry);
      return {
        url: v.url,
        entry: v.entry,
        translatedEntry: t?.entry,
        description: t?.description ?? v.description,
        details: t?.details,
        parameters: v.parameters,
      };
    }),
  };
};
