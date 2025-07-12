import { useSetAtom } from "jotai";
import { useState } from "react";
import { cheatSheetAtom, UILabelAtom } from "../appStates";
import { version } from "../data/Layout_v4.1";
import CheatSheetFactory from "../models/cheatSheet";
import { Language, LanguageEnum } from "../models/types";
import { Bg, Border, FontSize } from "./common/classNames";
import UILabelFactory from "./common/UILabel";

const Header = () => {
    return (
        <div className="space-y-4">
            <h1 className={`text-center font-bold break-keep ${FontSize.xl2}`}>
                Tailwind CSS 日本語チートシート v4
            </h1>
            <div className="flex items-center justify-between">
                <VersionGroup />
                <LanguageSelectionButton />
            </div>
        </div>
    );
};

export default Header;

/* -------------------------------------------------------------------------- */

const VersionGroup = () => {
    const url = "https://telehakke.github.io/tailwindcss-japanese-cheat-sheet/";

    return (
        <div>
            <p className={`-ml-4 px-4 ${FontSize.sm} ${Bg.gradientFromPurple}`}>
                {`Documentation ${version}`}
            </p>
            <a className="underline" href={url}>
                v3
            </a>
        </div>
    );
};

/* -------------------------------------------------------------------------- */

const LanguageSelectionButton = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(
        LanguageEnum.ja,
    );

    return (
        <div>
            <JapaneseButton
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />
            <EnglishButton
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
            />
        </div>
    );
};

const JapaneseButton = ({
    selectedLanguage,
    setSelectedLanguage,
}: {
    selectedLanguage: Language;
    setSelectedLanguage: React.Dispatch<React.SetStateAction<Language>>;
}) => {
    const setCheatSheet = useSetAtom(cheatSheetAtom);
    const setUILabel = useSetAtom(UILabelAtom);

    const backgroundColor =
        selectedLanguage === LanguageEnum.ja
            ? Bg.purple300_dark800
            : Bg.hoverNeutral200_dark800;
    const border = `rounded-l-full border-y-2 border-l-2 ${Border.purple300_dark800}`;

    const handleClick = (): void => {
        setSelectedLanguage(LanguageEnum.ja);
        setCheatSheet(CheatSheetFactory.createInstance(LanguageEnum.ja));
        setUILabel(UILabelFactory.createInstance(LanguageEnum.ja));
    };

    return (
        <button
            className={`px-2 transition ${backgroundColor} ${border}`}
            onClick={handleClick}
        >
            日本語
        </button>
    );
};

const EnglishButton = ({
    selectedLanguage,
    setSelectedLanguage,
}: {
    selectedLanguage: Language;
    setSelectedLanguage: React.Dispatch<React.SetStateAction<Language>>;
}) => {
    const setCheatSheet = useSetAtom(cheatSheetAtom);
    const setUILabel = useSetAtom(UILabelAtom);

    const backgroundColor =
        selectedLanguage === LanguageEnum.en
            ? Bg.purple300_dark800
            : Bg.hoverNeutral200_dark800;
    const border = `rounded-r-full border-y-2 border-r-2 ${Border.purple300_dark800}`;

    const handleClick = (): void => {
        setSelectedLanguage(LanguageEnum.en);
        setCheatSheet(CheatSheetFactory.createInstance(LanguageEnum.en));
        setUILabel(UILabelFactory.createInstance(LanguageEnum.en));
    };

    return (
        <button
            className={`px-2 transition ${backgroundColor} ${border}`}
            onClick={handleClick}
        >
            English
        </button>
    );
};
