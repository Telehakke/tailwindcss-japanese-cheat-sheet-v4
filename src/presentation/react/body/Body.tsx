import { useAtomValue } from "jotai";
import { Suspense, use, useDeferredValue, type JSX } from "react";
import type { CheatSheetData } from "../../../application/cheatSheetData";
import {
  createCheatSheetDataItem,
  type Documentation,
} from "../../../application/createCheatSheetDataItem";
import { filterFullDocumentations } from "../../../application/filterFullDocumentations";
import type { Translation } from "../../../application/translation";
import type { Category } from "../../../domain/models/category";
import { breakpointAtom, languageAtom, searchInputAtom } from "../../atoms";
import { splitByWhitespace } from "../../utils/split";
import { CategoryLabel } from "./items/CategoryLabel";
import { FloatingCard } from "./items/FloatingCard";
import { CheatSheet } from "./items/cheatSheet/CheatSheet";

export const Body = (): JSX.Element => {
  const language = useAtomValue(languageAtom);
  const asyncItems = createCheatSheetDataItem(language, documentations, translations);

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

/* -------------------------------------------------------------------------- */

// oxfmt-ignore
const documentations: Record<Category, Promise<readonly Documentation[]>> = {
  Layout:                    import("../../../infrastructure/documentations/Layout_v4.3.ts").then((v) => v.documentations),
  "Flexbox & Grid":          import("../../../infrastructure/documentations/Flexbox & Grid_v4.3.ts").then((v) => v.documentations),
  Spacing:                   import("../../../infrastructure/documentations/Spacing_v4.3.ts").then((v) => v.documentations),
  Sizing:                    import("../../../infrastructure/documentations/Sizing_v4.3.ts").then((v) => v.documentations),
  Typography:                import("../../../infrastructure/documentations/Typography_v4.3.ts").then((v) => v.documentations),
  Backgrounds:               import("../../../infrastructure/documentations/Backgrounds_v4.3.ts").then((v) => v.documentations),
  Borders:                   import("../../../infrastructure/documentations/Borders_v4.3.ts").then((v) => v.documentations),
  Effects:                   import("../../../infrastructure/documentations/Effects_v4.3.ts").then((v) => v.documentations),
  Filters:                   import("../../../infrastructure/documentations/Filters_v4.3.ts").then((v) => v.documentations),
  Tables:                    import("../../../infrastructure/documentations/Tables_v4.3.ts").then((v) => v.documentations),
  "Transitions & Animation": import("../../../infrastructure/documentations/Transitions & Animation_v4.3.ts").then((v) => v.documentations),
  Transforms:                import("../../../infrastructure/documentations/Transforms_v4.3.ts").then((v) => v.documentations),
  Interactivity:             import("../../../infrastructure/documentations/Interactivity_v4.3.ts").then((v) => v.documentations),
  SVG:                       import("../../../infrastructure/documentations/SVG_v4.3.ts").then((v) => v.documentations),
  Accessibility:             import("../../../infrastructure/documentations/Accessibility_v4.3.ts").then((v) => v.documentations),
};

//  oxfmt-ignore
const translations: Record<Category, Promise<Map<string, Translation>>> = {
  "Layout":                  import("../../../infrastructure/translations/layoutJA.ts").then((v) => v.layoutJA),
  "Flexbox & Grid":          import("../../../infrastructure/translations/flexboxAndGridJA.ts").then((v) => v.flexboxAndGridJA),
  Spacing:                   import("../../../infrastructure/translations/spacingJA.ts").then((v) => v.spacingJA),
  Sizing:                    import("../../../infrastructure/translations/sizingJA.ts").then((v) => v.sizingJA),
  Typography:                import("../../../infrastructure/translations/typographyJA.ts").then((v) => v.typographyJA),
  Backgrounds:               import("../../../infrastructure/translations/backgroundsJA.ts").then((v) => v.backgroundsJA),
  Borders:                   import("../../../infrastructure/translations/bordersJA.ts").then((v) => v.bordersJA),
  Effects:                   import("../../../infrastructure/translations/effectsJA.ts").then((v) => v.effectsJA),
  Filters:                   import("../../../infrastructure/translations/filtersJA.ts").then((v) => v.filtersJA),
  Tables:                    import("../../../infrastructure/translations/tablesJA.ts").then((v) => v.tablesJA),
  "Transitions & Animation": import("../../../infrastructure/translations/transitionsAndAnimationJA.ts").then((v) => v.transitionsAndAnimationJA),
  Transforms:                import("../../../infrastructure/translations/transformsJA.ts").then((v) => v.transformsJA),
  Interactivity:             import("../../../infrastructure/translations/interactivityJA.ts").then((v) => v.interactivityJA),
  SVG:                       import("../../../infrastructure/translations/svgJA.ts").then((v) => v.svgJA),
  Accessibility:             import("../../../infrastructure/translations/accessibilityJA.ts").then((v) => v.accessibilityJA),
};
