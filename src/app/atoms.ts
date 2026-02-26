import { createToaster } from "@ark-ui/react";
import { atom } from "jotai";
import { BreakpointFactory } from "./models/breakpoint";
import { type Language } from "./models/language";

export const languageAtom = atom<Language>("ja");

export const openMenuAtom = atom(false);

export const searchInputAtom = atom("");

export const breakpointAtom = atom(BreakpointFactory.create(window.innerWidth));

export const shouldExpandAllAtom = atom<boolean | undefined>(undefined);

export const toaster = createToaster({
    placement: "bottom-end",
    overlap: true,
});
