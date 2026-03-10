import type { JSX } from "react";
import type { FullDocumentation } from "../../../../../models/cheatSheetData";

export const Description = (props: {
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const className = {
        _: "text-sm whitespace-pre-line",
        text: "text-neutral-600 dark:text-neutral-300",
    };

    return (
        <p className={Object.values(className).join(" ")}>
            {props.fullDocumentation.description}
        </p>
    );
};
