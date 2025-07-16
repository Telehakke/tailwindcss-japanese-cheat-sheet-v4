import { createSignal, type Accessor, type Setter } from "solid-js";
import {
    getBreakpointPrefix,
    type BreakpointPrefix,
} from "./models/breakpointPrefix";
import { CheatSheetFactory, type CheatSheet } from "./models/cheatSheet";
import { LanguageEnum, type Language } from "./models/language";
import { UILabelFactory, type UILabel } from "./views/common/UILabel";

type Signal<T> = [Accessor<T>, Setter<T>];

export class CheatSheetState {
    private static signal: Signal<CheatSheet> = (() => {
        const [state, setState] = createSignal(
            CheatSheetFactory.createInstance(LanguageEnum.ja),
        );
        return [state, setState];
    })();

    static cheatSheet = (): Accessor<CheatSheet> => {
        return this.signal[0];
    };

    static setLanguage = (language: Language): void => {
        this.signal[1](CheatSheetFactory.createInstance(language));
    };
}

export class UILabelState {
    private static signal: Signal<UILabel> = (() => {
        const [state, setState] = createSignal(
            UILabelFactory.createInstance(LanguageEnum.ja),
        );
        return [state, setState];
    })();

    static uiLabel = (): Accessor<UILabel> => {
        return this.signal[0];
    };

    static setLanguage = (language: Language): void => {
        this.signal[1](UILabelFactory.createInstance(language));
    };
}

export class DocumentDetailsState {
    private static signal: Signal<boolean | null> = (() => {
        const [state, setState] = createSignal<boolean | null>(false);
        return [state, setState];
    })();

    static shouldExpandAll = (): Accessor<boolean | null> => {
        return this.signal[0];
    };

    static expandAll = (): void => {
        this.signal[1](true);
    };

    static expandPartial = (): void => {
        this.signal[1](null);
    };

    static collapseAll = (): void => {
        this.signal[1](false);
    };
}

export class SidebarState {
    private static signal: Signal<boolean> = (() => {
        const [state, setState] = createSignal(false);
        return [state, setState];
    })();

    static isOpen = (): Accessor<boolean> => {
        return this.signal[0];
    };

    static toggle = (focusedId?: string): void => {
        this.signal[1]((v) => !v);
        const element = focusedId ? document.getElementById(focusedId) : null;
        element?.focus();
    };
}

export class SearchStringState {
    private static signal: Signal<string> = (() => {
        const [state, setState] = createSignal("");
        return [state, setState];
    })();

    static searchString = (): Accessor<string> => {
        return this.signal[0];
    };

    static setSearchString = (value: string): void => {
        this.signal[1](value);
    };
}

export class CopyState {
    private static signal: Signal<boolean> = (() => {
        const [state, setState] = createSignal(false);
        return [state, setState];
    })();

    static isCopied = (): Accessor<boolean> => {
        return this.signal[0];
    };

    static setCopied = (): void => {
        this.signal[1](true);
        setTimeout(() => {
            this.signal[1](false);
        }, 1500);
    };
}

export class BreakpointPrefixState {
    private static signal: Signal<BreakpointPrefix> = (() => {
        const [state, setState] = createSignal(
            getBreakpointPrefix(window.innerWidth),
        );
        window.addEventListener("resize", () => {
            setState(getBreakpointPrefix(window.innerWidth));
        });
        return [state, setState];
    })();

    static breakpointPrefix(): Accessor<BreakpointPrefix> {
        return this.signal[0];
    }
}
