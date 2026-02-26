import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState, type JSX } from "react";
import { SegmentGroup, type SegmentGroupItem } from "../../common/SegmentGroup";

export const ThemeSegmentGroup = (): JSX.Element => {
    const [value, setValue] = useState<string>(() => {
        const value = ThemeStorage.get();
        ThemeFactory.create(value).apply();
        return value ?? ThemeEnum.system;
    });

    useEffect(() => {
        DarkModeManager.watch();
        return (): void => {
            DarkModeManager.unwatch();
        };
    }, []);

    const handleValueChange = (value: string | null): void => {
        setValue(value ?? ThemeEnum.system);
        const theme = ThemeFactory.create(value);
        theme.apply();
        theme.save();
    };

    return (
        <SegmentGroup
            items={items}
            value={value}
            onValueChange={handleValueChange}
        />
    );
};

/* -------------------------------------------------------------------------- */

const ThemeEnum = {
    light: "light",
    dark: "dark",
    system: "system",
} as const;

const items: SegmentGroupItem[] = [
    {
        value: ThemeEnum.light,
        label: <Sun className="size-4" />,
    },
    {
        value: ThemeEnum.dark,
        label: <Moon className="size-4" />,
    },
    {
        value: ThemeEnum.system,
        label: <Monitor className="size-4" />,
    },
];

/* -------------------------------------------------------------------------- */

const ThemeStorage = {
    KEY: "theme",
    get(): string | null {
        return localStorage.getItem(this.KEY);
    },
    set(value: string): void {
        localStorage.setItem(this.KEY, value);
    },
    remove(): void {
        localStorage.removeItem(this.KEY);
    },
} as const;

const DarkModeManager = {
    QUERY: "(prefers-color-scheme: dark)",
    DARK: "dark",
    isSystemDark: (): boolean => {
        return window.matchMedia(DarkModeManager.QUERY).matches;
    },
    setDarkMode: (isDark: boolean): void => {
        if (isDark) {
            document.documentElement.classList.add(DarkModeManager.DARK);
        } else {
            document.documentElement.classList.remove(DarkModeManager.DARK);
        }
    },
    onThemeChange: (event: MediaQueryListEvent): void => {
        if (ThemeStorage.get() !== null) return;
        DarkModeManager.setDarkMode(event.matches);
    },
    watch: (): void => {
        window
            .matchMedia(DarkModeManager.QUERY)
            .addEventListener("change", DarkModeManager.onThemeChange);
    },
    unwatch: (): void => {
        window
            .matchMedia(DarkModeManager.QUERY)
            .removeEventListener("change", DarkModeManager.onThemeChange);
    },
} as const;

/* -------------------------------------------------------------------------- */

const ThemeFactory = {
    create: (value: string | null): Theme => {
        if (value === ThemeEnum.light) return LightTheme;
        if (value === ThemeEnum.dark) return DarkTheme;
        return SystemTheme;
    },
};

type Theme = {
    apply: () => void;
    save: () => void;
};

const LightTheme: Theme = {
    apply: (): void => {
        DarkModeManager.setDarkMode(false);
    },
    save: (): void => {
        ThemeStorage.set(ThemeEnum.light);
    },
};

const DarkTheme: Theme = {
    apply: (): void => {
        DarkModeManager.setDarkMode(true);
    },
    save: (): void => {
        ThemeStorage.set(ThemeEnum.dark);
    },
};

const SystemTheme: Theme = {
    apply: (): void => {
        DarkModeManager.setDarkMode(DarkModeManager.isSystemDark());
    },
    save: (): void => {
        ThemeStorage.remove();
    },
};
