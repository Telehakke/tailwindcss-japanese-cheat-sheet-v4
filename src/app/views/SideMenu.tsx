import { useAtom } from "jotai";
import { type JSX } from "react";
import { openMenuAtom } from "../atoms";
import { CategoryEnum } from "../models/category";
import { SideMenuDialog } from "./common/SideMenuDialog";

export const SideMenu = (): JSX.Element => {
    const [open, setOpen] = useAtom(openMenuAtom);

    return (
        <SideMenuDialog open={open} onOpenChange={(o) => setOpen(o)}>
            {Object.values(CategoryEnum).map((v) => (
                <a
                    className="text-xl outline-0 transition hover:text-blue-500 focus-visible:text-blue-500"
                    href={`#${v}`}
                    onClick={() => setOpen(false)}
                    key={v}
                >
                    {v}
                </a>
            ))}
        </SideMenuDialog>
    );
};
