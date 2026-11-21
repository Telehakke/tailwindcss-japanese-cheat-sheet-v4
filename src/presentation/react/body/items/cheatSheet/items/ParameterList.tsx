import { useAtomValue } from "jotai";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, type Dispatch, type JSX, type SetStateAction } from "react";
import type { FullDocumentation } from "../../../../../../application/cheatSheetData";
import { languageAtom, toaster } from "../../../../../atoms";
import { joinObjectValues } from "../../../../../utils/joinObjectValues";
import { createUILabel } from "../../../../../utils/uiLabel";
import { Collapsible } from "../../../../common/Collapsible";

export const ParameterList = (props: { fullDocumentation: FullDocumentation }): JSX.Element => {
  const [shouldExpand, setShouldExpand] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);

  // 動作を軽くするため、初回のパラメータは7つまで読み込む
  const [parameters, setParameters] = useState<readonly string[][]>(
    props.fullDocumentation.parameters.filter((_, i) => i < 7),
  );

  return (
    <>
      <ParameterTable {...props} {...{ shouldExpand, setShouldShowButton, parameters }} />
      {shouldShowButton && (
        <ToggleDisplayButton {...props} {...{ shouldExpand, setShouldExpand, setParameters }} />
      )}
    </>
  );
};

/* -------------------------------------------------------------------------- */

/**
 * クラス名とそれに対応するCSSを表示する\
 * 高さが144pxを超える場合、コンパクトに表示する
 */
const ParameterTable = (props: {
  fullDocumentation: FullDocumentation;
  shouldExpand: boolean;
  setShouldShowButton: Dispatch<SetStateAction<boolean>>;
  parameters: readonly string[][];
}): JSX.Element => {
  const tableRef = useRef<HTMLTableElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const height = tableRef.current?.getBoundingClientRect().height;
    if (height == null) return;
    setHeight(height);

    if (height <= 144) return;
    props.setShouldShowButton(true);
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const className = {
    _: "w-full table-fixed border-collapse overflow-clip rounded-lg whitespace-pre-line",
    outline: "outline-1 -outline-offset-1 outline-neutral-300 dark:outline-neutral-700",
  };

  return (
    <Collapsible collapsedHeight={height > 144 ? 144 : height} open={props.shouldExpand}>
      <table className={joinObjectValues(className)} ref={tableRef}>
        <tbody>
          {props.parameters.map((v, i) => (
            <ParameterTableRow parameters={v} key={i} />
          ))}
        </tbody>
      </table>
    </Collapsible>
  );
};

const ParameterTableRow = (props: { parameters: string[] }): JSX.Element => {
  return (
    <tr className="even:bg-neutral-200 even:dark:bg-neutral-700">
      {props.parameters.map((v, i) => (
        <ParameterTableData parameter={v} key={i} />
      ))}
    </tr>
  );
};

const ParameterTableData = (props: { parameter: string }): JSX.Element => {
  const language = useAtomValue(languageAtom);

  const handleClick = (): void => {
    const { copied } = createUILabel(language);
    void navigator.clipboard.writeText(props.parameter).then(() => {
      toaster.create({ title: copied, description: props.parameter });
    });
  };

  const className = {
    _: "cursor-copy px-2 py-1 text-xs hover:underline",
    text: "text-neutral-600 dark:text-neutral-300",
    firstText: "first:text-blue-700 first:dark:text-blue-300",
    lastText: "last:text-green-700 last:dark:text-green-300",
  };

  return (
    <td className={joinObjectValues(className)} onClick={handleClick}>
      {props.parameter}
    </td>
  );
};

/* -------------------------------------------------------------------------- */

const ToggleDisplayButton = (props: {
  fullDocumentation: FullDocumentation;
  shouldExpand: boolean;
  setShouldExpand: Dispatch<SetStateAction<boolean>>;
  setParameters: Dispatch<SetStateAction<readonly string[][]>>;
}): JSX.Element => {
  const handleClick = (): void => {
    props.setShouldExpand((v) => !v);
    props.setParameters(props.fullDocumentation.parameters);
  };

  return (
    <div className="relative">
      <RoundedButton shouldExpand={props.shouldExpand} onClick={handleClick} />
      <Veil shouldExpand={props.shouldExpand} />
    </div>
  );
};

const RoundedButton = (props: { shouldExpand: boolean; onClick: () => void }): JSX.Element => {
  const className = {
    _: "h-8 w-full rounded-full px-2 text-sm text-nowrap transition",
    flex: "flex justify-center items-center gap-1",
    bg: "bg-white dark:bg-neutral-800",
    hoverBg: "hover:bg-neutral-100 dark:hover:bg-neutral-700",
    activeBg: "active:bg-neutral-200 dark:active:bg-neutral-600",
    border: "border border-neutral-300 dark:border-neutral-700",
    focusBorder: "focus-visible:border-transparent",
    outline: "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
    stroke: "stroke-neutral-500 dark:stroke-neutral-400",
  };

  return (
    <button className={joinObjectValues(className)} onClick={props.onClick}>
      <ChevronDown
        className={`stroke-inherit transition ${props.shouldExpand ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const Veil = (props: { shouldExpand: boolean }): JSX.Element | null => {
  if (props.shouldExpand) return null;

  const className = {
    _: "pointer-events-none h-8 w-full",
    position: "absolute inset-y-0 top-0 -translate-y-full",
    bg: "bg-linear-to-b from-transparent to-white dark:to-neutral-800",
  };

  return <div className={joinObjectValues(className)} />;
};
