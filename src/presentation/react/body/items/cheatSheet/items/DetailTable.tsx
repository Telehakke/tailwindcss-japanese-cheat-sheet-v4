import type { JSX, ReactNode } from "react";
import type { FullDocumentation } from "../../../../../../application/cheatSheetData";
import { type Category } from "../../../../../../domain/models/category";
import { joinObjectValues } from "../../../../../utils/joinObjectValues";
import { backgroundsTableData } from "../tableData/backgroundsTableData";
import { bordersTableData } from "../tableData/bordersTableData";
import { effectsTableData } from "../tableData/effectsTableData";
import { filtersTableData } from "../tableData/filtersTableData";
import { interactivityTableData } from "../tableData/interactivityTableData";
import { svgTableData } from "../tableData/svgTableData";
import { transitionsAndAnimationTableData } from "../tableData/transitionsAndAnimationTableData";
import { typographyTableData } from "../tableData/typographyTableData";

export const DetailTable = (props: {
  fullDocumentation: FullDocumentation;
  category: Category;
}): JSX.Element | null => {
  const { details, entry } = props.fullDocumentation;
  if (details == null) return null;

  const className = {
    _: "border-separate border-spacing-y-1 text-sm leading-4",
    text: "text-neutral-600 dark:text-neutral-300",
  };

  return (
    <table className={joinObjectValues(className)}>
      <tbody>
        {details.map((v, i) => (
          <DetailTableRow detail={v} category={props.category} entry={entry} index={i} key={i} />
        ))}
      </tbody>
    </table>
  );
};

/* -------------------------------------------------------------------------- */

const DetailTableRow = (props: {
  detail: [string, string];
  category: Category;
  entry: string;
  index: number;
}): JSX.Element => {
  const [entry, description] = props.detail;

  return (
    <tr>
      {getTableData(props.category, props.entry, props.index)}
      <td className="bg-neutral-200 px-1 whitespace-pre dark:bg-neutral-700">{entry}</td>
      <td className="px-1">{description}</td>
    </tr>
  );
};

const getTableData = (category: Category, entry: string, index: number): ReactNode => {
  return tableDataMap.get(category)?.[entry]?.[index];
};

const tableDataMap = new Map<Category, Record<string, ReactNode[]>>([
  ["Typography", typographyTableData],
  ["Backgrounds", backgroundsTableData],
  ["Borders", bordersTableData],
  ["Effects", effectsTableData],
  ["Filters", filtersTableData],
  ["Transitions & Animation", transitionsAndAnimationTableData],
  ["Interactivity", interactivityTableData],
  ["SVG", svgTableData],
]);
