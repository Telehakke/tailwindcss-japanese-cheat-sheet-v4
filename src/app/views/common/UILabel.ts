import { Language, LanguageEnum } from "../../models/types";

export default class UILabelFactory {
    static createInstance = (language: Language): UILabel => {
        if (language === LanguageEnum.ja) return new UILabelJA();
        return new UILabelEN();
    };
}

interface UILabel {
    expandAll: string;
    collapseAll: string;
    copied: string;
}

class UILabelEN implements UILabel {
    expandAll: string = "Expand All";
    collapseAll: string = "Collapse All";
    copied: string = "Copied";
}

class UILabelJA implements UILabel {
    expandAll: string = "全て展開";
    collapseAll: string = "全て折りたたむ";
    copied: string = "コピーされました";
}
