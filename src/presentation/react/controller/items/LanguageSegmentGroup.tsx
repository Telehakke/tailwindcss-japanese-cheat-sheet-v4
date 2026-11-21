import { useAtom } from "jotai";
import type { JSX } from "react";
import { getLanguageValues, type Language } from "../../../../domain/models/language";
import { languageAtom } from "../../../atoms";
import { exhaustiveCheck } from "../../../utils/exhaustiveCheck";
import { SegmentGroup, type SegmentGroupItem } from "../../common/SegmentGroup";

export const LanguageSegmentGroup = (): JSX.Element => {
  const [language, setLanguage] = useAtom(languageAtom);

  const handleValueChange = (value: string | null): void => {
    setLanguage(value as Language);
  };

  return <SegmentGroup items={getItems()} value={language} onValueChange={handleValueChange} />;
};

/* -------------------------------------------------------------------------- */

const getItems = (): SegmentGroupItem[] => {
  return getLanguageValues().map((v) => ({
    value: v,
    label: getLabel(v),
  }));
};

const getLabel = (key: Language): string => {
  switch (key) {
    case "ja":
      return "日本語";
    case "en":
      return "English";
    default:
      exhaustiveCheck(key);
      throw new Error();
  }
};
