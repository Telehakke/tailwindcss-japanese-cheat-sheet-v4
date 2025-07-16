import githubMarkWhiteSVG from "../assets/github-mark-white.svg";
import githubMarkSVG from "../assets/github-mark.svg";

const Footer = () => {
    const url =
        "https://github.com/telehakke/tailwindcss-japanese-cheat-sheet-v4";

    return (
        <div class="flex items-center justify-center gap-2">
            <a href={url} target="_blank">
                <picture class="transition hover:opacity-70">
                    <source
                        srcset={githubMarkWhiteSVG}
                        media="(prefers-color-scheme: dark)"
                    />
                    <img
                        src={githubMarkSVG}
                        class="h-6 w-6"
                        alt="GitHubリポジトリ"
                    />
                </picture>
            </a>
            <small>© 2025 Telehakke</small>
        </div>
    );
};

export default Footer;
