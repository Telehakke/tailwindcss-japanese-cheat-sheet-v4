import { useAtomValue, useSetAtom } from "jotai";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import type { JSX, ReactNode } from "react";
import { languageAtom, shouldExpandAllAtom } from "../../../atoms";
import { joinObjectValues } from "../../../utils/joinObjectValues";
import { createUILabel } from "../../../utils/uiLabel";

export const ExpandAndCollapseButtons = (): JSX.Element => {
  const language = useAtomValue(languageAtom);
  const uiLabel = createUILabel(language);

  return (
    <div className="grid w-max auto-cols-fr grid-flow-col gap-4">
      <ExpandButton>{uiLabel.expand}</ExpandButton>
      <CollapseButton>{uiLabel.collapse}</CollapseButton>
    </div>
  );
};

/* -------------------------------------------------------------------------- */

const ExpandButton = (props: { children: ReactNode }): JSX.Element => {
  const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

  const handleClick = (): void => {
    setShouldExpandAll(true);
  };

  return (
    <RoundedButton
      icon={<ChevronsUpDown className="size-4 stroke-inherit" />}
      onClick={handleClick}
    >
      {props.children}
    </RoundedButton>
  );
};

const CollapseButton = (props: { children: ReactNode }): JSX.Element => {
  const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

  const handleClick = (): void => {
    setShouldExpandAll(false);
  };

  return (
    <RoundedButton
      icon={<ChevronsDownUp className="size-4 stroke-inherit" />}
      onClick={handleClick}
    >
      {props.children}
    </RoundedButton>
  );
};

/* -------------------------------------------------------------------------- */

const RoundedButton = (props: {
  icon: ReactNode;
  onClick: () => void;
  children: ReactNode;
}): JSX.Element => {
  const className = {
    _: "h-8 rounded-full px-2 text-sm text-nowrap transition",
    flex: "flex justify-center items-center gap-1",
    bg: "bg-white dark:bg-neutral-900",
    hoverBg: "hover:bg-neutral-100 dark:hover:bg-neutral-800",
    activeBg: "active:bg-neutral-200 dark:active:bg-neutral-700",
    border: "border border-neutral-300 dark:border-neutral-600",
    focusBorder: "focus-visible:border-transparent",
    outline: "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
    stroke: "stroke-neutral-500 dark:stroke-neutral-400",
  };

  return (
    <button className={joinObjectValues(className)} onClick={props.onClick}>
      {props.icon}
      {props.children}
    </button>
  );
};
