import type { JSX } from "react";
import githubMarkWhiteSVG from "../../../assets/github-mark-white.svg";
import githubMarkSVG from "../../../assets/github-mark.svg";

const URL = "https://github.com/telehakke/tailwindcss-japanese-cheat-sheet-v4";

export const Copyright = (): JSX.Element => {
    return (
        <div className="flex items-center justify-center gap-2">
            <a href={URL} target="_blank">
                <img
                    src={githubMarkSVG}
                    className="block h-6 w-6 dark:hidden"
                    alt="GitHubリポジトリ"
                />
                <img
                    src={githubMarkWhiteSVG}
                    className="hidden h-6 w-6 dark:block"
                    alt="GitHubリポジトリ"
                />
            </a>
            <small>© 2025-2026 Telehakke</small>
        </div>
    );
};
