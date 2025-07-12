import { atom } from "jotai";
import {
    BreakpointPrefix,
    getBreakpointPrefix,
} from "./models/breakpointPrefix";
import CheatSheetFactory from "./models/cheatSheet";
import { LanguageEnum } from "./models/types";
import UILabelFactory from "./views/common/UILabel";

export const cheatSheetAtom = atom(
    CheatSheetFactory.createInstance(LanguageEnum.ja),
);
export const UILabelAtom = atom(UILabelFactory.createInstance(LanguageEnum.ja));
export const shouldExpandAllAtom = atom<boolean | null>(false);
export const isOpenSidebarAtom = atom(false);
export const searchStringAtom = atom("");
export const isCopiedAtom = atom(false);
export const breakpointPrefixAtom = atom<BreakpointPrefix>(
    getBreakpointPrefix(window.innerWidth),
);
