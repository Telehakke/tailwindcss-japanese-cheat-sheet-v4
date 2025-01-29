import { useAtom, useSetAtom } from "jotai";
import { version } from "../data/Layout_v4.0";
import { Bg, Border, FontSize } from "./common/classNames";
import {
    cheatSheetDataAtom,
    isJapaneseAtom,
    translatorEN,
    translatorJA,
} from "../appStates";

const Header = () => {
    return (
        <div className="space-y-4">
            <Title />
            <div className="flex items-center justify-between">
                <DocumentationVersion />
                <LanguageSelectionButton />
            </div>
        </div>
    );
};

export default Header;

const Title = () => {
    return (
        <h1 className={`text-center font-bold break-keep ${FontSize.text2xl}`}>
            Tailwind CSS 日本語チートシート v4
        </h1>
    );
};

const DocumentationVersion = () => {
    return (
        <div>
            <p
                className={`-ml-4 px-4 ${FontSize.textSm} ${Bg.purpleToTransparentGradation}`}
            >
                {`Documentation ${version}`}
            </p>
            <a
                className="underline"
                href="https://telehakke.github.io/tailwindcss-japanese-cheat-sheet/"
            >
                v3
            </a>
        </div>
    );
};

/**
 * 日本語、英語を切り替えるボタン
 */
const LanguageSelectionButton = () => {
    const setCheatSheetData = useSetAtom(cheatSheetDataAtom);
    const [isJapanese, setIsJapanese] = useAtom(isJapaneseAtom);

    return (
        <div>
            <button
                className={`rounded-l-full border-y-2 border-l-2 px-2 transition ${Border.purple300_dark800} ${isJapanese ? Bg.purple300_dark800 : Bg.hoverNeutral200_dark800}`}
                onClick={() => {
                    setCheatSheetData(translatorJA.getCheatSheetData());
                    setIsJapanese(true);
                }}
            >
                日本語
            </button>
            <button
                className={`rounded-r-full border-y-2 border-r-2 px-2 transition ${Border.purple300_dark800} ${isJapanese ? Bg.hoverNeutral200_dark800 : Bg.purple300_dark800}`}
                onClick={() => {
                    setCheatSheetData(translatorEN.getCheatSheetData());
                    setIsJapanese(false);
                }}
            >
                English
            </button>
        </div>
    );
};
