import type { Translation } from "../../application/translation";
import { CategoryEnum } from "../../domain/models/category";
import { AccessibilityEnum } from "../../domain/models/entry";

export const accessibilityJA = new Map<string, Translation>([
  [
    CategoryEnum.Accessibility,
    {
      entry: "アクセシビリティー",
      description: "",
      details: [],
    },
  ],
  [
    AccessibilityEnum.forcedColorAdjust,
    {
      entry: "強制カラー調整",
      description:
        "ユーザーが設定している、視覚サポート系アクセシビリティー（ハイコントラストモードなど）の効果の受け方を指定する",
      details: [
        ["auto", "効果を受け入れる"],
        ["none", "効果を受け入れない"],
      ],
    },
  ],
]);
