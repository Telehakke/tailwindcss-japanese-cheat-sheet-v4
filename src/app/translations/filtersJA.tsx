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
                            "xs",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-xs">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "sm",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-sm">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "md",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "lg",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-lg">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "xl",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-xl">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "2xl",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-2xl">
                                    Aa
                                </p>
                            </td>,
                        ],
                        ["none", "影を描画しない", <td></td>],
                        ["inherit", "親要素からスタイルを引き継ぐ", <td></td>],
                        ["current", "テキスト色", <td></td>],
                        ["transparent", "透明", <td></td>],
                        [
                            "black",
                            "黒",
                            <td className="bg-white">
                                <p className="drop-shadow-black text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "white",
                            "白",
                            <td className="bg-black">
                                <p className="drop-shadow-white text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="bg-white">
                                <p className="drop-shadow-red-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="bg-white">
                                <p className="drop-shadow-orange-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="bg-white">
                                <p className="drop-shadow-amber-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="bg-white">
                                <p className="drop-shadow-yellow-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="bg-white">
                                <p className="drop-shadow-lime-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="bg-white">
                                <p className="drop-shadow-green-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="bg-white">
                                <p className="drop-shadow-emerald-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="bg-white">
                                <p className="drop-shadow-teal-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="bg-white">
                                <p className="drop-shadow-cyan-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="bg-white">
                                <p className="drop-shadow-sky-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="bg-white">
                                <p className="drop-shadow-blue-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="bg-white">
                                <p className="drop-shadow-indigo-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="bg-white">
                                <p className="drop-shadow-violet-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="bg-white">
                                <p className="drop-shadow-purple-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="bg-white">
                                <p className="drop-shadow-fuchsia-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="bg-white">
                                <p className="drop-shadow-pink-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="bg-white">
                                <p className="drop-shadow-rose-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="bg-white">
                                <p className="drop-shadow-slate-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="bg-white">
                                <p className="drop-shadow-gray-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="bg-white">
                                <p className="drop-shadow-zinc-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="bg-white">
                                <p className="drop-shadow-neutral-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="bg-white">
                                <p className="drop-shadow-stone-500 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="bg-white">
                                <p className="drop-shadow-red-500/25 text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
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
