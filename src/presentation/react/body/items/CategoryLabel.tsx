import type { JSX } from "react";
import type { CheatSheetData } from "../../../../application/cheatSheetData";
import { joinObjectValues } from "../../../utils/joinObjectValues";

export const CategoryLabel = (props: { cheatSheetData: CheatSheetData }): JSX.Element => {
  const { category, translatedCategory } = props.cheatSheetData;

  const className = {
    _: "text-center text-2xl font-bold break-keep",
    scrollMargin: "scroll-mt-32 sm:scroll-mt-20",
    text: "text-sky-700 dark:text-slate-400",
  };

  return (
    <h2 className={joinObjectValues(className)} id={category}>
      {format(category, translatedCategory)}
    </h2>
  );
};

/* -------------------------------------------------------------------------- */

const format = (v1: string, v2?: string): string => {
  if (v2 == null) return v1;
  return `${v1} / ${v2}`;
};
