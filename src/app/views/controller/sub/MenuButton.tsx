import { useSetAtom } from "jotai";
import { Menu } from "lucide-react";
import type { JSX } from "react";
import { openMenuAtom } from "../../../atoms";

export const MenuButton = (): JSX.Element => {
    const className = {
        _: "size-8 rounded-full text-sm text-nowrap transition",
        flex: "flex justify-center items-center gap-1",
        position: "absolute top-4 left-4",
        hoverBg: "hover:bg-neutral-200 dark:hover:bg-neutral-700",
        activeBg: "active:bg-neutral-300 dark:active:bg-neutral-600",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
        stroke: "stroke-neutral-500 dark:stroke-neutral-400",
    };

    const setOpen = useSetAtom(openMenuAtom);

    const handleClick = (): void => {
        setOpen(true);
    };

    return (
        <button
            className={Object.values(className).join(" ")}
            onClick={handleClick}
        >
            <Menu className="stroke-inherit" />
        </button>
    );
};
