import { createToaster } from "@ark-ui/react";
import { atom } from "jotai";
import type { Language } from "../domain/models/language";
import { createBreakpoint } from "./utils/breakpoint";

export const languageAtom = atom<Language>("ja");

export const openMenuAtom = atom(false);

export const searchInputAtom = atom("");

export const breakpointAtom = atom(createBreakpoint(window.innerWidth));

export const shouldExpandAllAtom = atom<boolean | undefined>(undefined);

export const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
});
