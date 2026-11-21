import type { FullDocumentation } from "./cheatSheetData";

/** 検索ワードを含む要素をフィルタリングする */
export const filterFullDocumentations = (
  fullDocumentations: readonly FullDocumentation[],
  words: readonly string[],
): readonly FullDocumentation[] => {
  if (words.length === 0) return fullDocumentations;
  return fullDocumentations.filter(hasWords(words));
};

/* -------------------------------------------------------------------------- */

const hasWords =
  (words: readonly string[]) =>
  (doc: FullDocumentation): boolean => {
    return words.every((v) => {
      if (hasWordInEntry(doc, v)) return true;
      if (hasWordInTranslatedEntry(doc, v)) return true;
      if (hasWordInDescription(doc, v)) return true;
      if (hasWordInDetails(doc, v)) return true;
      if (hasWordInParameters(doc, v)) return true;
      return false;
    });
  };

const hasWordInEntry = (doc: FullDocumentation, word: string): boolean => {
  return hasWord(doc.entry, word);
};

const hasWordInTranslatedEntry = (doc: FullDocumentation, word: string): boolean => {
  return hasWord(doc.translatedEntry, word);
};

const hasWordInDescription = (doc: FullDocumentation, word: string): boolean => {
  return hasWord(doc.description, word);
};

const hasWordInDetails = (doc: FullDocumentation, word: string): boolean => {
  for (const details of doc.details ?? []) {
    if (hasWord(details[0], word)) return true;
    if (hasWord(details[1], word)) return true;
  }
  return false;
};

const hasWordInParameters = (doc: FullDocumentation, word: string): boolean => {
  for (const parameters of doc.parameters) {
    for (const parameter of parameters) {
      if (hasWord(parameter, word)) return true;
    }
  }
  return false;
};

const hasWord = (value: string | undefined, word: string): boolean => {
  if (value == null) return false;
  return value.toLowerCase().includes(word.toLowerCase());
};
