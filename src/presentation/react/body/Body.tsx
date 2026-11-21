import { useAtomValue } from "jotai";
import { Suspense, use, useDeferredValue, type JSX } from "react";
import type { CheatSheetData } from "../../../application/cheatSheetData";
import { filterFullDocumentations } from "../../../application/filterFullDocumentations";
import { getCheatSheetDataItem } from "../../../application/getCheatSheetDataItem";
import type { Category } from "../../../domain/models/category";
import { breakpointAtom, languageAtom, searchInputAtom } from "../../atoms";
import { splitByWhitespace } from "../../utils/split";
import { CategoryLabel } from "./items/CategoryLabel";
import { FloatingCard } from "./items/FloatingCard";
import { CheatSheet } from "./items/cheatSheet/CheatSheet";

export const Body = (): JSX.Element => {
  const language = useAtomValue(languageAtom);
  const asyncItems = getCheatSheetDataItem(language);

  return (
    <Suspense>
      <Content asyncItems={asyncItems} />
    </Suspense>
  );
};

/* -------------------------------------------------------------------------- */

const Content = (props: { asyncItems: Promise<readonly CheatSheetData[]> }): JSX.Element => {
  const items = use(useDeferredValue(props.asyncItems));
  const breakpoint = useAtomValue(breakpointAtom);
  const column = breakpoint.sliceCheatSheetDataItems(items);

  return (
    <div className="my-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <GridColumn cheatSheetDataItems={column.first} />
      <GridColumn cheatSheetDataItems={column.second} />
      <GridColumn cheatSheetDataItems={column.third} />
      <GridColumn cheatSheetDataItems={column.fourth} />
    </div>
  );
};

const GridColumn = (props: {
  cheatSheetDataItems: readonly CheatSheetData[];
}): JSX.Element | null => {
  if (props.cheatSheetDataItems.length === 0) return null;
  return (
    <div className="space-y-8">
      {props.cheatSheetDataItems.map((v) => (
        <CheatSheetGroup cheatSheetData={v} key={v.category} category={v.category} />
      ))}
    </div>
  );
};

const CheatSheetGroup = (props: {
  cheatSheetData: CheatSheetData;
  category: Category;
}): JSX.Element => {
  const searchInput = useAtomValue(searchInputAtom);
  const fullDocumentations = filterFullDocumentations(
    props.cheatSheetData.fullDocumentations,
    splitByWhitespace(searchInput),
  );

  return (
    <div className="flex flex-col gap-2">
      <CategoryLabel {...props} />
      {fullDocumentations.map((v) => (
        <FloatingCard key={v.entry}>
          <CheatSheet category={props.cheatSheetData.category} fullDocumentation={v} />
        </FloatingCard>
      ))}
    </div>
  );
};
