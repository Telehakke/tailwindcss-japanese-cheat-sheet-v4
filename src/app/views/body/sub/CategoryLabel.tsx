import type { JSX } from "react";
import type { CheatSheetData } from "../../../models/cheatSheetData";

export const CategoryLabel = (props: {
    cheatSheetData: CheatSheetData;
}): JSX.Element => {
    const className = {
        _: "text-center text-2xl font-bold break-keep",
        scrollMargin: "scroll-mt-32 sm:scroll-mt-20",
        text: "text-sky-700 dark:text-slate-400",
    };

    const { category, translatedCategory } = props.cheatSheetData;
    const text = [category, translatedCategory]
        .filter((v) => v != null)
        .join(" / ");

    return (
        <h2 className={Object.values(className).join(" ")} id={category}>
            {text}
        </h2>
    );
};
