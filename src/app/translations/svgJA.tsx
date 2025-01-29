import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const svgJA = new Map<string, Translation>([
    [
        CategoryEnum.SVG,
        {
            entry: "ベクター画像",
            description: "",
            detail: null,
        },
    ],
    [
        "fill",
        {
            entry: "塗りつぶし",
            description: "<svg>要素の塗りつぶし色を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["none", "なし", <td className="w-10"></td>],
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        ["current", "テキスト色", <td className="w-10"></td>],
                        ["transparent", "透明", <td className="w-10"></td>],
                        ["black", "黒", <td className="w-10 bg-black"></td>],
                        ["white", "白", <td className="w-10 bg-white"></td>],
                        [
                            "red-500",
                            "赤",
                            <td className="w-10 bg-red-500"></td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="w-10 bg-orange-500"></td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="w-10 bg-amber-500"></td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="w-10 bg-yellow-500"></td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="w-10 bg-lime-500"></td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="w-10 bg-green-500"></td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="w-10 bg-emerald-500"></td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="w-10 bg-teal-500"></td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="w-10 bg-cyan-500"></td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="w-10 bg-sky-500"></td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="w-10 bg-blue-500"></td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="w-10 bg-indigo-500"></td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="w-10 bg-violet-500"></td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="w-10 bg-purple-500"></td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="w-10 bg-fuchsia-500"></td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="w-10 bg-pink-500"></td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="w-10 bg-rose-500"></td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="w-10 bg-slate-500"></td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="w-10 bg-gray-500"></td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="w-10 bg-zinc-500"></td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="w-10 bg-neutral-500"></td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="w-10 bg-stone-500"></td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10 bg-red-500/25"></td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "stroke",
        {
            entry: "線",
            description: "<svg>要素の線の色を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["none", "なし", <td className="w-10"></td>],
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        ["current", "テキスト色", <td className="w-10"></td>],
                        ["transparent", "透明", <td className="w-10"></td>],
                        ["black", "黒", <td className="w-10 bg-black"></td>],
                        ["white", "白", <td className="w-10 bg-white"></td>],
                        [
                            "red-500",
                            "赤",
                            <td className="w-10 bg-red-500"></td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="w-10 bg-orange-500"></td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="w-10 bg-amber-500"></td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="w-10 bg-yellow-500"></td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="w-10 bg-lime-500"></td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="w-10 bg-green-500"></td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="w-10 bg-emerald-500"></td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="w-10 bg-teal-500"></td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="w-10 bg-cyan-500"></td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="w-10 bg-sky-500"></td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="w-10 bg-blue-500"></td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="w-10 bg-indigo-500"></td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="w-10 bg-violet-500"></td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="w-10 bg-purple-500"></td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="w-10 bg-fuchsia-500"></td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="w-10 bg-pink-500"></td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="w-10 bg-rose-500"></td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="w-10 bg-slate-500"></td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="w-10 bg-gray-500"></td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="w-10 bg-zinc-500"></td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="w-10 bg-neutral-500"></td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="w-10 bg-stone-500"></td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10 bg-red-500/25"></td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "stroke-width",
        {
            entry: "線の太さ",
            description: "<svg>要素の線の太さを指定する",
            detail: null,
        },
    ],
]);

export default svgJA;
