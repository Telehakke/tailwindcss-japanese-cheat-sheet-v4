import type { JSX } from "react";
import type { FullDocumentation } from "../../../../../models/cheatSheetData";

export const DetailTable = (props: {
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const { details } = props.fullDocumentation;
    if (details == null) return <></>;

    const className = {
        _: "border-separate border-spacing-y-1 text-sm leading-4",
        text: "text-neutral-600 dark:text-neutral-300",
    };

    return (
        <table className={Object.values(className).join(" ")}>
            <tbody>
                {details.map((d, i) => (
                    <DetailTableRow detail={d} key={i} />
                ))}
            </tbody>
        </table>
    );
};

const DetailTableRow = (props: {
    detail: [string, string, JSX.Element?];
}): JSX.Element => {
    const [entry, description, sample] = props.detail;

    return (
        <tr>
            {sample?.type === "td" && sample}
            <td className="bg-neutral-200 px-1 whitespace-pre dark:bg-neutral-700">
                {entry}
            </td>
            <td className="px-1">{description}</td>
        </tr>
    );
};
