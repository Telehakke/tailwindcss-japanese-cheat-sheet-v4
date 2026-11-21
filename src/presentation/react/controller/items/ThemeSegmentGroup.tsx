import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState, type JSX } from "react";
import { SegmentGroup, type SegmentGroupItem } from "../../common/SegmentGroup";

export const ThemeSegmentGroup = (): JSX.Element => {
  const [theme, setTheme] = useState<string>(() => {
    const value = getStoredTheme();
    createTheme(value).apply();
    return value ?? ThemeEnum.system;
  });

  useEffect(() => {
    watchDarkMode();
    return (): void => unwatchDarkMode();
  }, []);

  const handleValueChange = (value: string | null): void => {
    setTheme(value ?? ThemeEnum.system);
    const theme = createTheme(value);
    theme.apply();
    theme.save();
  };

  return <SegmentGroup items={items} value={theme} onValueChange={handleValueChange} />;
};

/* -------------------------------------------------------------------------- */

const ThemeEnum = { light: "light", dark: "dark", system: "system" } as const;

const items: SegmentGroupItem[] = [
  { value: ThemeEnum.light, label: <Sun className="size-4" /> },
  { value: ThemeEnum.dark, label: <Moon className="size-4" /> },
  { value: ThemeEnum.system, label: <Monitor className="size-4" /> },
];

/* -------------------------------------------------------------------------- */

const themeStorageKey = "theme";

const getStoredTheme = (): string | null => {
  return localStorage.getItem(themeStorageKey);
};

const setStoredTheme = (value: string): void => {
  localStorage.setItem(themeStorageKey, value);
};

const removeStoredTheme = (): void => {
  localStorage.removeItem(themeStorageKey);
};

/* -------------------------------------------------------------------------- */

const darkModeQuery = "(prefers-color-scheme: dark)";
const darkModeClassName = "dark";

const isSystemDarkMode = (): boolean => {
  return window.matchMedia(darkModeQuery).matches;
};

const setDarkMode = (onDark: boolean): void => {
  if (onDark) {
    document.documentElement.classList.add(darkModeClassName);
  } else {
    document.documentElement.classList.remove(darkModeClassName);
  }
};

const onThemeChange = (event: MediaQueryListEvent): void => {
  // テーマにライト、またはダークが選ばれていれば早期リターン
  if (getStoredTheme() !== null) return;

  setDarkMode(event.matches);
};

const watchDarkMode = (): void => {
  window.matchMedia(darkModeQuery).addEventListener("change", onThemeChange);
};

const unwatchDarkMode = (): void => {
  window.matchMedia(darkModeQuery).removeEventListener("change", onThemeChange);
};

/* -------------------------------------------------------------------------- */

const createTheme = (value: string | null): Theme => {
  if (value === ThemeEnum.light) return LightTheme;
  if (value === ThemeEnum.dark) return DarkTheme;
  return SystemTheme;
};

type Theme = { apply: () => void; save: () => void };

const LightTheme: Theme = {
  apply: () => setDarkMode(false),
  save: () => setStoredTheme(ThemeEnum.light),
};

const DarkTheme: Theme = {
  apply: () => setDarkMode(true),
  save: () => setStoredTheme(ThemeEnum.dark),
};

const SystemTheme: Theme = {
  apply: () => setDarkMode(isSystemDarkMode()),
  save: () => removeStoredTheme(),
};
