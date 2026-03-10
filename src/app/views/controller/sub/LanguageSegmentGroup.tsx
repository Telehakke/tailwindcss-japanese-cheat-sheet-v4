import { useAtom } from "jotai";
import { type JSX } from "react";
import { languageAtom } from "../../../atoms";
import { isLanguage, LanguageEnum } from "../../../models/language";
import { SegmentGroup, type SegmentGroupItem } from "../../common/SegmentGroup";

const items: SegmentGroupItem[] = [
    { value: LanguageEnum.ja, label: "日本語" },
    { value: LanguageEnum.en, label: "English" },
];

export const LanguageSegmentGroup = (): JSX.Element => {
    const [language, setLanguage] = useAtom(languageAtom);

    const setLanguageState = (value: string | null): void => {
        setLanguage(isLanguage(value) ? value : "en");
    };

    return (
        <SegmentGroup
            items={items}
            value={language}
            onValueChange={setLanguageState}
        />
    );
};
