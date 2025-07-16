import { createSignal, type Accessor, type Setter } from "solid-js";
import { CheatSheetState, UILabelState } from "../appStates";
import { version } from "../data/Layout_v4.1";
import { LanguageEnum, type Language } from "../models/language";
import { Bg, Border, FontSize } from "./common/classNames";

const Header = () => {
    return (
        <div class="space-y-4">
            <h1 class={`text-center font-bold break-keep ${FontSize.xl2}`}>
                Tailwind CSS 日本語チートシート v4
            </h1>
            <div class="flex items-center justify-between">
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
            <p class={`-ml-4 px-4 ${FontSize.sm} ${Bg.gradientFromPurple}`}>
                {`Documentation ${version}`}
            </p>
            <a class="underline" href={url}>
                v3
            </a>
        </div>
    );
};

/* -------------------------------------------------------------------------- */

const LanguageSelectionButton = () => {
    const [selectedLanguage, setSelectedLanguage] = createSignal<Language>(
        LanguageEnum.ja,
    );

    return (
        <div
            class={`overflow-clip rounded-full border-2 ${Border.purple300_dark800}`}
        >
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

type SelectedLanguageSignal = {
    selectedLanguage: Accessor<Language>;
    setSelectedLanguage: Setter<Language>;
};

const JapaneseButton = (props: SelectedLanguageSignal) => {
    const bg = () =>
        props.selectedLanguage() === LanguageEnum.ja
            ? Bg.purple300_dark800
            : Bg.hoverNeutral200_dark800;

    const handleClick = () => {
        props.setSelectedLanguage(LanguageEnum.ja);
        CheatSheetState.setLanguage(LanguageEnum.ja);
        UILabelState.setLanguage(LanguageEnum.ja);
    };

    return (
        <button class={`px-2 transition ${bg()}`} onClick={handleClick}>
            日本語
        </button>
    );
};

const EnglishButton = (props: SelectedLanguageSignal) => {
    const bg = () =>
        props.selectedLanguage() === LanguageEnum.en
            ? Bg.purple300_dark800
            : Bg.hoverNeutral200_dark800;

    const handleClick = () => {
        props.setSelectedLanguage(LanguageEnum.en);
        CheatSheetState.setLanguage(LanguageEnum.en);
        UILabelState.setLanguage(LanguageEnum.en);
    };

    return (
        <button class={`px-2 transition ${bg()}`} onClick={handleClick}>
            English
        </button>
    );
};
