import { useSetAtom } from "jotai";
import { ChevronRight, Link2 } from "lucide-react";
import type { Dispatch, JSX, SetStateAction } from "react";
import type { FullDocumentation } from "../../../../../../application/cheatSheetData";
import { getAddedVersion } from "../../../../../../domain/models/addedVersion";
import type { Category } from "../../../../../../domain/models/category";
import { shouldExpandAllAtom } from "../../../../../atoms";
import { joinObjectValues } from "../../../../../utils/joinObjectValues";

export const EntryAndLink = (props: {
  category: Category;
  fullDocumentation: FullDocumentation;
  shouldExpand: boolean;
  setShouldExpand: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

  const handleClick = (): void => {
    setShouldExpandAll(undefined);
    props.setShouldExpand((v) => !v);
  };

  const className = {
    _: "rounded-lg w-full p-1 transition",
    flex: "flex justify-between",
    bg: "bg-neutral-200 dark:bg-neutral-900",
    hoverBg: "hover:bg-neutral-300 hover:dark:bg-neutral-950",
    anchorHoverBg: "has-[a:hover]:bg-neutral-200 has-[a:hover]:dark:bg-neutral-900",
    activeBg: "active:bg-neutral-200 active:dark:bg-neutral-900",
    outline: "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
  };

  return (
    <button className={joinObjectValues(className)} onClick={handleClick}>
      <div className="flex items-center gap-2">
        <Indicator open={props.shouldExpand} />
        <Entry {...props} />
      </div>
      <div className="flex items-center gap-2">
        <Version {...props} />
        <Anchor {...props} />
      </div>
    </button>
  );
};

/* -------------------------------------------------------------------------- */

const Indicator = (props: { open: boolean }): JSX.Element => {
  const className = {
    _: "transition",
    stroke: "stroke-neutral-500 dark:stroke-neutral-400",
    rotate: props.open ? "rotate-90" : "",
  };

  return <ChevronRight className={joinObjectValues(className)} />;
};

const Entry = (props: { fullDocumentation: FullDocumentation }): JSX.Element => {
  const { entry, translatedEntry } = props.fullDocumentation;

  return (
    <h3 className="text-left text-lg font-bold">
      {entry}
      <span className="block text-sm font-normal text-neutral-600 dark:text-neutral-300">
        {translatedEntry}
      </span>
    </h3>
  );
};

const Version = (props: {
  category: Category;
  fullDocumentation: FullDocumentation;
}): JSX.Element | null => {
  const version = getAddedVersion(props.category, props.fullDocumentation.entry);

  const className = {
    _: "rounded-md px-1 py-0.5 text-xs font-bold text-nowrap",
    text: " text-white",
    bg: version === "<= v3" ? "bg-neutral-500 dark:bg-neutral-700" : "bg-sky-700",
  };

  if (version == null) return null;
  return <p className={joinObjectValues(className)}>{version}</p>;
};

const Anchor = (props: { fullDocumentation: FullDocumentation }): JSX.Element => {
  const className = {
    _: "w-10 rounded-full",
    grid: "grid place-items-center",
    hoverBg: "hover:bg-white hover:dark:bg-neutral-800",
    outline: "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
    stroke: "stroke-neutral-500",
    hoverStroke: "hover:stroke-blue-500",
  };

  return (
    <a
      className={joinObjectValues(className)}
      href={props.fullDocumentation.url}
      target="_blank"
      aria-label="公式ドキュメントを開く"
      onClick={(e) => e.stopPropagation()}
    >
      <Link2 className="stroke-inherit" />
    </a>
  );
};
