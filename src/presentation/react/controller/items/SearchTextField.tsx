import { useSetAtom } from "jotai";
import { Search, X } from "lucide-react";
import { useRef, useState, type Dispatch, type JSX, type RefObject } from "react";
import { searchInputAtom } from "../../../atoms";
import { DelayAction } from "../../../utils/delayAction";
import { joinObjectValues } from "../../../utils/joinObjectValues";

type Input = HTMLInputElement | null;

export const SearchTextField = (): JSX.Element => {
  const inputRef = useRef<Input>(null);
  const [input, setInput] = useState("");

  return (
    <div className="relative w-full max-w-60">
      <TextField inputRef={inputRef} input={input} setInput={setInput} />
      <SearchIcon />
      <ClearButton inputRef={inputRef} setInput={setInput} />
    </div>
  );
};

/* -------------------------------------------------------------------------- */

type TextFieldOptions = {
  inputRef: RefObject<Input>;
  input: string;
  setInput: Dispatch<React.SetStateAction<string>>;
};

const TextField = ({ inputRef, input, setInput }: TextFieldOptions): JSX.Element => {
  const delayAction = useRef(new DelayAction());
  const setSearchInput = useSetAtom(searchInputAtom);

  const handleChange = (value: string): void => {
    setInput(value);
    delayAction.current.run(() => {
      setSearchInput(value);
    }, 500);
  };

  const className = {
    _: "peer h-8 w-full rounded-md pl-2 pr-8 text-sm transition",
    bg: "bg-white dark:bg-neutral-900",
    hoverBg: "hover:not-focus:bg-neutral-100 dark:hover:not-focus:bg-neutral-800",
    border: "border border-neutral-300 dark:border-neutral-600",
    focusBorder: "focus-visible:border-transparent",
    outline: "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
  };

  return (
    <input
      className={joinObjectValues(className)}
      type="text"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      data-empty={input.length === 0}
      ref={inputRef}
    />
  );
};

/* -------------------------------------------------------------------------- */

const SearchIcon = (): JSX.Element => {
  const className = {
    _: "pointer-events-none size-4",
    position: "absolute top-1/2 left-2 -translate-y-1/2",
    peer: "peer-focus-visible:hidden peer-data-[empty=false]:hidden",
    stroke: "stroke-neutral-500 dark:stroke-neutral-400",
  };

  return <Search className={joinObjectValues(className)} />;
};

/* -------------------------------------------------------------------------- */

type ClearButtonOptions = {
  inputRef: RefObject<Input>;
  setInput: Dispatch<React.SetStateAction<string>>;
};

const ClearButton = ({ inputRef, setInput }: ClearButtonOptions): JSX.Element => {
  const setSearchInput = useSetAtom(searchInputAtom);

  const handleClick = (): void => {
    setInput("");
    setSearchInput("");
    inputRef.current?.focus();
  };

  const className = {
    _: "size-6 rounded-full transition",
    grid: "grid place-items-center",
    position: "absolute top-1/2 right-1 -translate-y-1/2",
    peer: "peer-data-[empty=true]:hidden",
    hoverBg: "hover:bg-neutral-100 dark:hover:bg-neutral-800",
    activeBg: "active:bg-neutral-200 dark:active:bg-neutral-700",
    outline: "-outline-offset-2 outline-blue-500/75 focus-visible:outline-2",
    stroke: "stroke-neutral-500 dark:stroke-neutral-400",
  };

  return (
    <button className={joinObjectValues(className)} onClick={handleClick}>
      <X className="size-4 stroke-inherit" />
    </button>
  );
};
