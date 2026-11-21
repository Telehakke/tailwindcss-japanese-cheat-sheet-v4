import { useAtom, useSetAtom } from "jotai";
import type { JSX } from "react";
import { getCategoryValues } from "../../domain/models/category";
import { openMenuAtom } from "../atoms";
import { SideMenuDialog } from "./common/SideMenuDialog";

export const SideMenu = (): JSX.Element => {
  const [open, setOpen] = useAtom(openMenuAtom);

  return (
    <SideMenuDialog open={open} onOpenChange={setOpen}>
      <CategoryLinks />
    </SideMenuDialog>
  );
};

/* -------------------------------------------------------------------------- */

const CategoryLinks = (): JSX.Element => {
  const setOpen = useSetAtom(openMenuAtom);

  const handleClick = (): void => {
    setOpen(false);
  };

  return (
    <>
      {getCategoryValues().map((v) => (
        <a
          className="text-xl outline-0 transition hover:text-blue-500 focus-visible:text-blue-500"
          href={`#${v}`}
          onClick={handleClick}
          key={v}
        >
          {v}
        </a>
      ))}
    </>
  );
};
