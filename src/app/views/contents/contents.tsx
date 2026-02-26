import { useAtomValue } from "jotai";
import { useEffect, useState, type JSX } from "react";
import { breakpointAtom, languageAtom, searchInputAtom } from "../../atoms";
import { BreakpointManagerFactory, type Column } from "../../models/breakpoint";
import type { CheatSheetData } from "../../models/cheatSheetData";
import { LanguageManagerFactory } from "../../models/language";
import { splitByWhitespace } from "../../models/split";
import { CategoryLabel } from "./sub/CategoryLabel";
import { DocumentationContainer } from "./sub/DocumentationContainer";
import { FloatingCard } from "./sub/FloatingCard";

export const Contents = (): JSX.Element => {
    const language = useAtomValue(languageAtom);
    const searchInput = useAtomValue(searchInputAtom);
    const breakpoint = useAtomValue(breakpointAtom);
    const [column, setColumn] = useState<Column | undefined>();

    useEffect(() => {
        (async (): Promise<void> => {
            const items = await LanguageManagerFactory.create(
                language,
            ).filterCheatSheetDataItemsByWords(splitByWhitespace(searchInput));
            const column =
                BreakpointManagerFactory.create(
                    breakpoint,
                ).sliceCheatSheetDataItems(items);
            setColumn(column);
        })();
    }, [language, searchInput, breakpoint]);

    if (column == null) return <></>;
    return (
        <div className="my-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <GridColumn cheatSheetDataItems={column.first} />
            <GridColumn cheatSheetDataItems={column.second} />
            <GridColumn cheatSheetDataItems={column.third} />
            <GridColumn cheatSheetDataItems={column.fourth} />
        </div>
    );
};

/* -------------------------------------------------------------------------- */

const GridColumn = (props: {
    cheatSheetDataItems: readonly CheatSheetData[];
}): JSX.Element => {
    if (props.cheatSheetDataItems.length === 0) return <></>;
    return (
        <div className="space-y-8">
            {props.cheatSheetDataItems.map((c) => (
                <CheatSheet cheatSheetData={c} key={c.category} />
            ))}
        </div>
    );
};

const CheatSheet = (props: { cheatSheetData: CheatSheetData }): JSX.Element => {
    return (
        <div className="flex flex-col gap-2">
            <CategoryLabel {...props} />
            {props.cheatSheetData.fullDocumentations.map((f) => (
                <FloatingCard key={f.entry}>
                    <DocumentationContainer
                        category={props.cheatSheetData.category}
                        fullDocumentation={f}
                    />
                </FloatingCard>
            ))}
        </div>
    );
};
