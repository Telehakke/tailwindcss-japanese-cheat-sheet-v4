import type { JSX } from "react/jsx-runtime";
import type { Category } from "../domain/models/category";

export type CheatSheetData = Readonly<{
  category: Category;
  translatedCategory?: string;
  fullDocumentations: readonly FullDocumentation[];
}>;

export type FullDocumentation = Readonly<{
  url: string;
  entry: string;
  translatedEntry?: string;
  description: string;
  details?: readonly [string, string, JSX.Element?][];
  parameters: readonly string[][];
}>;
