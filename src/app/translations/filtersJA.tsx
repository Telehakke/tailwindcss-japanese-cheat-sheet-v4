import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const filtersJA = new Map<string, Translation>([
    [
        CategoryEnum.Filters,
        {
            entry: "フィルター",
            description: "",
            detail: null,
        },
    ],
    [
        "filter",
        {
            entry: "フィルター",
            description: "フィルターを操作する",
            detail: (
                <DetailTable value={[["none", "全てのフィルターを解除"]]} />
            ),
        },
    ],
    [
        "filter: blur()",
        {
            entry: "ぼかし",
            description: "ぼかしの強度を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["（xs–3xl）", "プリセット値を使用"],
                        ["none", "フィルターを解除"],
                    ]}
                />
            ),
        },
    ],
    [
        "filter: brightness()",
        {
            entry: "明るさ",
            description: "明るさの強度をパーセンテージで指定する",
            detail: null,
        },
    ],
    [
        "filter: contrast()",
        {
            entry: "コントラスト",
            description: "明暗差の強度をパーセンテージで指定する",
            detail: null,
        },
    ],
    [
        "filter: drop-shadow()",
        {
            entry: "ドロップシャドー",
            description: "コンテンツに対する影を描画する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "drop-shadow-xs",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-xs">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow-sm",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-sm">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow-md",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow-lg",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-lg">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow-xl",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-xl">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow-2xl",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-2xl">
                                    Aa
                                </p>
                            </td>,
                        ],
                        ["drop-shadow-none", "影を描画しない", <td></td>],
                    ]}
                />
            ),
        },
    ],
    [
        "filter: grayscale()",
        {
            entry: "グレースケール",
            description: "グレーの濃淡で描画する",
            detail: (
                <DetailTable
                    value={[
                        ["grayscale", "フィルター強度100%"],
                        [
                            "grayscale-（数値）",
                            "フィルター強度をパーセンテージで指定",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "filter: hue-rotate()",
        {
            entry: "色相",
            description: "指定した角度で色相を回転し色味を変える",
            detail: null,
        },
    ],
    [
        "filter: invert()",
        {
            entry: "反転",
            description: "色を反転する",
            detail: (
                <DetailTable
                    value={[
                        ["invert", "フィルター強度100%"],
                        [
                            "invert-（数値）",
                            "フィルター強度をパーセンテージで指定",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "filter: saturate()",
        {
            entry: "彩度",
            description: "鮮やかさの強度をパーセンテージで指定する",
            detail: null,
        },
    ],
    [
        "filter: sepia()",
        {
            entry: "セピア",
            description: "黒茶色の濃淡で描画する",
            detail: (
                <DetailTable
                    value={[
                        ["sepia", "フィルター強度100%"],
                        [
                            "sepia-（数値）",
                            "フィルター強度をパーセンテージで指定",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "backdrop-filter",
        {
            entry: "背景フィルター",
            description: "背後の要素に対して作用するフィルターを操作する",
            detail: (
                <DetailTable value={[["none", "全ての背景フィルターを解除"]]} />
            ),
        },
    ],
    [
        "backdrop-filter: blur()",
        {
            entry: "背景ぼかし",
            description: "背後の要素に対する、ぼかしの強度を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["（xs–3xl）", "プリセット値を使用"],
                        ["none", "フィルターを解除"],
                    ]}
                />
            ),
        },
    ],
    [
        "backdrop-filter: brightness()",
        {
            entry: "背景の明るさ",
            description:
                "背後の要素に対する、明るさの強度をパーセンテージで指定する",
            detail: null,
        },
    ],
    [
        "backdrop-filter: contrast()",
        {
            entry: "背景コントラスト",
            description:
                "背後の要素に対する、明暗差の強度をパーセンテージで指定する",
            detail: null,
        },
    ],
    [
        "backdrop-filter: grayscale()",
        {
            entry: "背景グレースケール",
            description: "背後の要素に対し、グレーの濃淡で描画する",
            detail: (
                <DetailTable
                    value={[
                        ["backdrop-grayscale", "フィルター強度100%"],
                        [
                            "backdrop-grayscale-（数値）",
                            "フィルター強度をパーセンテージで指定",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "backdrop-filter: hue-rotate()",
        {
            entry: "背景の色相",
            description:
                "背後の要素に対し、指定した角度で色相を回転し色味を変える",
            detail: null,
        },
    ],
    [
        "backdrop-filter: invert()",
        {
            entry: "背景の反転",
            description: "背後の要素に対し、色を反転する",
            detail: (
                <DetailTable
                    value={[
                        ["backdrop-invert", "フィルター強度100%"],
                        [
                            "backdrop-invert-（数値）",
                            "フィルター強度をパーセンテージで指定",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "backdrop-filter: opacity()",
        {
            entry: "背景の不透明度",
            description:
                "backdrop系フィルターの不透明度をパーセンテージで指定する",
            detail: null,
        },
    ],
    [
        "backdrop-filter: saturate()",
        {
            entry: "背景の彩度",
            description:
                "背後の要素に対する、鮮やかさの強度をパーセンテージで指定する",
            detail: null,
        },
    ],
    [
        "backdrop-filter: sepia()",
        {
            entry: "背景セピア",
            description: "背後の要素に対し、黒茶色の濃淡で描画する",
            detail: (
                <DetailTable
                    value={[
                        ["backdrop-sepia", "フィルター強度100%"],
                        [
                            "backdrop-sepia-（数値）",
                            "フィルター強度をパーセンテージで指定",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default filtersJA;
