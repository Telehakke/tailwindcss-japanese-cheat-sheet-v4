import { atom, useAtom, useSetAtom } from "jotai";
import { Search, X } from "lucide-react";
import { useRef, type JSX } from "react";
import { searchInputAtom } from "../../../atoms";
import { DelayAction } from "../../../models/delayAction";

export const SearchTextField = (): JSX.Element => {
    const inputElement = useRef<HTMLInputElement | null>(null);

    return (
        <div className="relative w-full max-w-60">
            <TextField inputElement={inputElement} />
            <SearchIcon />
            <ClearButton inputElement={inputElement} />
        </div>
    );
};

/* -------------------------------------------------------------------------- */

const inputAtom = atom("");
const delayAction = new DelayAction();

const TextField = ({
    inputElement,
}: {
    inputElement: React.RefObject<HTMLInputElement | null>;
}): JSX.Element => {
    const className = {
        _: "peer h-8 w-full rounded-md pl-2 pr-8 text-sm transition",
        bg: "bg-white dark:bg-neutral-900",
        hoverBg:
            "hover:not-focus:bg-neutral-100 dark:hover:not-focus:bg-neutral-800",
        border: "border border-neutral-300 dark:border-neutral-600",
        focusBorder: "focus-visible:border-transparent",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
    };

    const [input, setInput] = useAtom(inputAtom);
    const setSearchInput = useSetAtom(searchInputAtom);

    const handleChange = (value: string): void => {
        setInput(value);
        delayAction.run(() => {
            setSearchInput(value);
        }, 500);
    };

    return (
        <input
            className={Object.values(className).join(" ")}
            type="text"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            data-empty={input.length === 0}
            ref={inputElement}
        />
    );
};

const SearchIcon = (): JSX.Element => {
    const className = {
        _: "pointer-events-none size-4",
        position: "absolute top-1/2 left-2 -translate-y-1/2",
        peer: "peer-focus-visible:hidden peer-data-[empty=false]:hidden",
        stroke: "stroke-neutral-500 dark:stroke-neutral-400",
    };

    return <Search className={Object.values(className).join(" ")} />;
};

const ClearButton = ({
    inputElement,
}: {
    inputElement: React.RefObject<HTMLInputElement | null>;
}): JSX.Element => {
    const className = {
        _: "size-6 rounded-full transition",
        grid: "grid place-items-center",
        position: "absolute top-1/2 right-1 -translate-y-1/2",
        peer: "peer-data-[empty=true]:hidden",
        hoverBg: "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        activeBg: "active:bg-neutral-200 dark:active:bg-neutral-700",
        outline:
            "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
        stroke: "stroke-neutral-500 dark:stroke-neutral-400",
    };

    const setInput = useSetAtom(inputAtom);
    const setSearchInput = useSetAtom(searchInputAtom);

    const handleClick = (): void => {
        setInput("");
        setSearchInput("");
        inputElement.current?.focus();
    };

    return (
        <button
            className={Object.values(className).join(" ")}
            onClick={handleClick}
        >
            <X className="size-4 stroke-inherit" />
        </button>
    );
};
