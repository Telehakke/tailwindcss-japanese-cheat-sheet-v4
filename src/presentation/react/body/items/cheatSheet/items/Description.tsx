import type { JSX } from "react";
import type { FullDocumentation } from "../../../../../../application/cheatSheetData";
import { joinObjectValues } from "../../../../../utils/joinObjectValues";

export const Description = (props: { fullDocumentation: FullDocumentation }): JSX.Element => {
  const className = {
    _: "text-sm whitespace-pre-line",
    text: "text-neutral-600 dark:text-neutral-300",
  };

  return <p className={joinObjectValues(className)}>{props.fullDocumentation.description}</p>;
};
