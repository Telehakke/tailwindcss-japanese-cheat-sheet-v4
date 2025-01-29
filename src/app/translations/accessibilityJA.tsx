import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const accessibilityJA = new Map<string, Translation>([
    [
        CategoryEnum.Accessibility,
        {
            entry: "アクセシビリティー",
            description: "",
            detail: null,
        },
    ],
    [
        "forced-color-adjust",
        {
            entry: "強制カラー調整",
            description:
                "ユーザーが設定している、視覚サポート系アクセシビリティー（ハイコントラストモードなど）の効果の受け方を指定する\nブラウザー任せでは問題がある箇所に限定して、適切に使用すること",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "効果を受け入れる"],
                        ["none", "効果を受け入れない"],
                    ]}
                />
            ),
        },
    ],
]);

export default accessibilityJA;
