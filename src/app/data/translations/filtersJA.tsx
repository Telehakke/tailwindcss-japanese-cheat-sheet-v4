import { CategoryEnum } from "../../models/category";
import type { Translation } from "../../models/types";

const filtersJA = new Map<string, Translation>([
    [
        CategoryEnum.Filters,
        {
            entry: "フィルター",
            description: "",
            details: [],
        },
    ],
    [
        "filter",
        {
            entry: "フィルター",
            description: "フィルターを操作する",
            details: [["none", "全てのフィルターを解除"]],
        },
    ],
    [
        "filter: blur()",
        {
            entry: "ぼかし",
            description: "ぼかしの強度を指定する",
            details: [
                ["（xs–3xl）", "プリセット値を使用"],
                ["none", "フィルターを解除"],
            ],
        },
    ],
    [
        "filter: brightness()",
        {
            entry: "明るさ",
            description: "明るさの強度をパーセンテージで指定する",
            details: [],
        },
    ],
    [
        "filter: contrast()",
        {
            entry: "コントラスト",
            description: "明暗差の強度をパーセンテージで指定する",
            details: [],
        },
    ],
    [
        "filter: drop-shadow()",
        {
            entry: "ドロップシャドー",
            description: "コンテンツに対する影を描画する",
            details: [
                [
                    "xs",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-xs">Aa</p>
                    </td>,
                ],
                [
                    "sm",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-sm">Aa</p>
                    </td>,
                ],
                [
                    "md",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md">Aa</p>
                    </td>,
                ],
                [
                    "lg",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-lg">Aa</p>
                    </td>,
                ],
                [
                    "xl",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-xl">Aa</p>
                    </td>,
                ],
                [
                    "2xl",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-2xl">Aa</p>
                    </td>,
                ],
                ["none", "影を描画しない", <td />],
                ["inherit", "親要素からスタイルを引き継ぐ", <td />],
                ["current", "テキスト色", <td />],
                ["transparent", "透明", <td />],
                [
                    "black",
                    "黒",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-black">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "white",
                    "白",
                    <td class="bg-black">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-white">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "red-500",
                    "赤",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-red-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "orange-500",
                    "オレンジ",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-orange-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "amber-500",
                    "琥珀",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-amber-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "yellow-500",
                    "黄色",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-yellow-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "lime-500",
                    "ライム",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-lime-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "green-500",
                    "緑",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-green-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "emerald-500",
                    "エメラルド",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-emerald-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "teal-500",
                    "コガモ",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-teal-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "cyan-500",
                    "シアン",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-cyan-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "sky-500",
                    "スカイ",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-sky-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "blue-500",
                    "青",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-blue-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "indigo-500",
                    "藍色",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-indigo-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "violet-500",
                    "スミレ",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-violet-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "purple-500",
                    "紫",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-purple-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "fuchsia-500",
                    "フクシア",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-fuchsia-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "pink-500",
                    "ピンク",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-pink-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "rose-500",
                    "バラ",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-rose-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "slate-500",
                    "粘板岩",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-slate-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "gray-500",
                    "グレー",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-gray-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "zinc-500",
                    "亜鉛",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-zinc-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "neutral-500",
                    "ニュートラル",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-neutral-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "stone-500",
                    "石",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-stone-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "red-500/25",
                    "不透明度25％で指定する例",
                    <td class="bg-white">
                        <p class="text-2xl text-white drop-shadow-md drop-shadow-red-500/25">
                            Aa
                        </p>
                    </td>,
                ],
            ],
        },
    ],
    [
        "filter: grayscale()",
        {
            entry: "グレースケール",
            description: "グレーの濃淡で描画する",
            details: [
                ["grayscale", "フィルター強度100%"],
                ["grayscale-（数値）", "フィルター強度をパーセンテージで指定"],
            ],
        },
    ],
    [
        "filter: hue-rotate()",
        {
            entry: "色相",
            description: "指定した角度で色相を回転し色味を変える",
            details: [],
        },
    ],
    [
        "filter: invert()",
        {
            entry: "反転",
            description: "色を反転する",
            details: [
                ["invert", "フィルター強度100%"],
                ["invert-（数値）", "フィルター強度をパーセンテージで指定"],
            ],
        },
    ],
    [
        "filter: saturate()",
        {
            entry: "彩度",
            description: "鮮やかさの強度をパーセンテージで指定する",
            details: [],
        },
    ],
    [
        "filter: sepia()",
        {
            entry: "セピア",
            description: "黒茶色の濃淡で描画する",
            details: [
                ["sepia", "フィルター強度100%"],
                ["sepia-（数値）", "フィルター強度をパーセンテージで指定"],
            ],
        },
    ],
    [
        "backdrop-filter",
        {
            entry: "背景フィルター",
            description: "背後の要素に対して作用するフィルターを操作する",
            details: [["none", "全ての背景フィルターを解除"]],
        },
    ],
    [
        "backdrop-filter: blur()",
        {
            entry: "背景ぼかし",
            description: "背後の要素に対する、ぼかしの強度を指定する",
            details: [
                ["（xs–3xl）", "プリセット値を使用"],
                ["none", "フィルターを解除"],
            ],
        },
    ],
    [
        "backdrop-filter: brightness()",
        {
            entry: "背景の明るさ",
            description:
                "背後の要素に対する、明るさの強度をパーセンテージで指定する",
            details: [],
        },
    ],
    [
        "backdrop-filter: contrast()",
        {
            entry: "背景コントラスト",
            description:
                "背後の要素に対する、明暗差の強度をパーセンテージで指定する",
            details: [],
        },
    ],
    [
        "backdrop-filter: grayscale()",
        {
            entry: "背景グレースケール",
            description: "背後の要素に対し、グレーの濃淡で描画する",
            details: [
                ["backdrop-grayscale", "フィルター強度100%"],
                [
                    "backdrop-grayscale-（数値）",
                    "フィルター強度をパーセンテージで指定",
                ],
            ],
        },
    ],
    [
        "backdrop-filter: hue-rotate()",
        {
            entry: "背景の色相",
            description:
                "背後の要素に対し、指定した角度で色相を回転し色味を変える",
            details: [],
        },
    ],
    [
        "backdrop-filter: invert()",
        {
            entry: "背景の反転",
            description: "背後の要素に対し、色を反転する",
            details: [
                ["backdrop-invert", "フィルター強度100%"],
                [
                    "backdrop-invert-（数値）",
                    "フィルター強度をパーセンテージで指定",
                ],
            ],
        },
    ],
    [
        "backdrop-filter: opacity()",
        {
            entry: "背景の不透明度",
            description:
                "backdrop系フィルターの不透明度をパーセンテージで指定する",
            details: [],
        },
    ],
    [
        "backdrop-filter: saturate()",
        {
            entry: "背景の彩度",
            description:
                "背後の要素に対する、鮮やかさの強度をパーセンテージで指定する",
            details: [],
        },
    ],
    [
        "backdrop-filter: sepia()",
        {
            entry: "背景セピア",
            description: "背後の要素に対し、黒茶色の濃淡で描画する",
            details: [
                ["backdrop-sepia", "フィルター強度100%"],
                [
                    "backdrop-sepia-（数値）",
                    "フィルター強度をパーセンテージで指定",
                ],
            ],
        },
    ],
]);

export default filtersJA;
