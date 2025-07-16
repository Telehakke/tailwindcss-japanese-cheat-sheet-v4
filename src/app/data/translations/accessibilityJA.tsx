import { CategoryEnum } from "../../models/category";
import type { Translation } from "../../models/types";

const accessibilityJA = new Map<string, Translation>([
    [
        CategoryEnum.Accessibility,
        {
            entry: "アクセシビリティー",
            description: "",
            details: [],
        },
    ],
    [
        "forced-color-adjust",
        {
            entry: "強制カラー調整",
            description:
                "ユーザーが設定している、視覚サポート系アクセシビリティー（ハイコントラストモードなど）の効果の受け方を指定する\nブラウザー任せでは問題がある箇所に限定して、適切に使用すること",
            details: [
                ["auto", "効果を受け入れる"],
                ["none", "効果を受け入れない"],
            ],
        },
    ],
]);

export default accessibilityJA;
