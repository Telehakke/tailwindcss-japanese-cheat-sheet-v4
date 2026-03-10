import { useAtomValue } from "jotai";
import { Suspense, use, useDeferredValue, type JSX } from "react";
import { breakpointAtom, languageAtom, searchInputAtom } from "../../atoms";
import { BreakpointManagerFactory } from "../../models/breakpoint";
import type { CheatSheetData } from "../../models/cheatSheetData";
import { LanguageManagerFactory } from "../../models/language";
import { splitByWhitespace } from "../../models/split";
import { CategoryLabel } from "./sub/CategoryLabel";
import { FloatingCard } from "./sub/FloatingCard";
import { CheatSheet } from "./sub/cheatSheet/CheatSheet";

export const Body = (): JSX.Element => {
    const language = useAtomValue(languageAtom);
    const searchInput = useAtomValue(searchInputAtom);
    const asyncItems = LanguageManagerFactory.create(
        language,
    ).filterCheatSheetDataItemsByWords(splitByWhitespace(searchInput));

    return (
        <Suspense>
            <Content asyncItems={asyncItems} />
        </Suspense>
    );
};

const Content = (props: {
    asyncItems: Promise<readonly CheatSheetData[]>;
}): JSX.Element => {
    const items = use(useDeferredValue(props.asyncItems));
    const breakpoint = useAtomValue(breakpointAtom);
    const column =
        BreakpointManagerFactory.create(breakpoint).sliceCheatSheetDataItems(
            items,
        );

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
}): JSX.Element => {
    if (props.cheatSheetDataItems.length === 0) return <></>;
    return (
        <div className="space-y-8">
            {props.cheatSheetDataItems.map((c) => (
                <CheatSheetGroup cheatSheetData={c} key={c.category} />
            ))}
        </div>
    );
};

const CheatSheetGroup = (props: {
    cheatSheetData: CheatSheetData;
}): JSX.Element => {
    return (
        <div className="flex flex-col gap-2">
            <CategoryLabel {...props} />
            {props.cheatSheetData.fullDocumentations.map((f) => (
                <FloatingCard key={f.entry}>
                    <CheatSheet
                        category={props.cheatSheetData.category}
                        fullDocumentation={f}
                    />
                </FloatingCard>
            ))}
        </div>
    );
};
