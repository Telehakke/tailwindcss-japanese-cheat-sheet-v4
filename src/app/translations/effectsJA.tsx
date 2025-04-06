import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const effectsJA = new Map<string, Translation>([
    [
        CategoryEnum.Effects,
        {
            entry: "効果",
            description: "",
            detail: null,
        },
    ],
    [
        "box-shadow",
        {
            entry: "ボックスシャドー",
            description: "要素の影、または輪郭線を描画する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "shadow-2xs",
                            "要素の背後に影を描画する",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-2xs"></div>
                            </td>,
                        ],
                        [
                            "shadow-xs",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-xs"></div>
                            </td>,
                        ],
                        [
                            "shadow-sm",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm"></div>
                            </td>,
                        ],
                        [
                            "shadow-md",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-md"></div>
                            </td>,
                        ],
                        [
                            "shadow-lg",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-lg"></div>
                            </td>,
                        ],
                        [
                            "shadow-xl",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-xl"></div>
                            </td>,
                        ],
                        [
                            "shadow-2xl",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-2xl"></div>
                            </td>,
                        ],
                        [
                            "shadow-none",
                            "影を描画しない",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        [
                            "shadow-current",
                            "テキスト色",
                            <td className="w-10"></td>,
                        ],
                        [
                            "shadow-transparent",
                            "透明",
                            <td className="w-10"></td>,
                        ],
                        [
                            "shadow-black",
                            "黒",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-black"></div>
                            </td>,
                        ],
                        [
                            "shadow-white",
                            "白",
                            <td className="h-8 w-10 bg-black">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-white"></div>
                            </td>,
                        ],
                        [
                            "shadow-red-500",
                            "赤",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-red-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-orange-500",
                            "オレンジ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-orange-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-amber-500",
                            "琥珀",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-amber-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-yellow-500",
                            "黄色",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-yellow-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-lime-500",
                            "ライム",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-lime-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-green-500",
                            "緑",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-green-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-emerald-500",
                            "エメラルド",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-emerald-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-teal-500",
                            "コガモ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-teal-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-cyan-500",
                            "シアン",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-cyan-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-sky-500",
                            "スカイ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-sky-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-blue-500",
                            "青",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-blue-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-indigo-500",
                            "藍色",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-indigo-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-violet-500",
                            "スミレ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-violet-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-purple-500",
                            "紫",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-purple-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-fuchsia-500",
                            "フクシア",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-fuchsia-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-pink-500",
                            "ピンク",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-pink-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-rose-500",
                            "バラ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-rose-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-slate-500",
                            "粘板岩",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-slate-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-gray-500",
                            "グレー",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-gray-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-zinc-500",
                            "亜鉛",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-zinc-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-neutral-500",
                            "ニュートラル",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-neutral-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-stone-500",
                            "石",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-stone-500"></div>
                            </td>,
                        ],
                        [
                            "shadow-red-500/25",
                            "不透明度25％で指定する例",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm shadow-red-500/25"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-2xs",
                            "要素の内側に影を描画する",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-2xs"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-xs",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-xs"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-sm",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-none",
                            "内側に影を描画しない",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inset-shadow-inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inset-shadow-current",
                            "テキスト色",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inset-shadow-transparent",
                            "透明",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inset-shadow-black",
                            "黒",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-black"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-white",
                            "白",
                            <td className="h-8 w-10 bg-black">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-white"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-red-500",
                            "赤",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-red-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-orange-500",
                            "オレンジ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-orange-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-amber-500",
                            "琥珀",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-amber-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-yellow-500",
                            "黄色",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-yellow-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-lime-500",
                            "ライム",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-lime-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-green-500",
                            "緑",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-green-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-emerald-500",
                            "エメラルド",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-emerald-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-teal-500",
                            "コガモ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-teal-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-cyan-500",
                            "シアン",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-cyan-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-sky-500",
                            "スカイ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-sky-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-blue-500",
                            "青",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-blue-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-indigo-500",
                            "藍色",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-indigo-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-violet-500",
                            "スミレ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-violet-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-purple-500",
                            "紫",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-purple-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-fuchsia-500",
                            "フクシア",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-fuchsia-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-pink-500",
                            "ピンク",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-pink-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-rose-500",
                            "バラ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-rose-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-slate-500",
                            "粘板岩",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-slate-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-gray-500",
                            "グレー",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-gray-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-zinc-500",
                            "亜鉛",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-zinc-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-neutral-500",
                            "ニュートラル",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-neutral-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-stone-500",
                            "石",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-stone-500"></div>
                            </td>,
                        ],
                        [
                            "inset-shadow-red-500/25",
                            "不透明度25％で指定する例",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-red-500/25"></div>
                            </td>,
                        ],
                        [
                            "ring",
                            "1pxの太さの輪郭線を描く",
                            <td className="w-10"></td>,
                        ],
                        [
                            "ring-（数値）",
                            "任意の太さの輪郭線を描く",
                            <td className="w-10"></td>,
                        ],
                        [
                            "ring-inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        [
                            "ring-current",
                            "テキスト色",
                            <td className="w-10"></td>,
                        ],
                        [
                            "ring-transparent",
                            "透明",
                            <td className="w-10"></td>,
                        ],
                        [
                            "ring-black",
                            "黒",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-black"></div>
                            </td>,
                        ],
                        [
                            "ring-white",
                            "白",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-white"></div>
                            </td>,
                        ],
                        [
                            "ring-red-500",
                            "赤",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-red-500"></div>
                            </td>,
                        ],
                        [
                            "ring-orange-500",
                            "オレンジ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-orange-500"></div>
                            </td>,
                        ],
                        [
                            "ring-amber-500",
                            "琥珀",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-amber-500"></div>
                            </td>,
                        ],
                        [
                            "ring-yellow-500",
                            "黄色",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-yellow-500"></div>
                            </td>,
                        ],
                        [
                            "ring-lime-500",
                            "ライム",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-lime-500"></div>
                            </td>,
                        ],
                        [
                            "ring-green-500",
                            "緑",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-green-500"></div>
                            </td>,
                        ],
                        [
                            "ring-emerald-500",
                            "エメラルド",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-emerald-500"></div>
                            </td>,
                        ],
                        [
                            "ring-teal-500",
                            "コガモ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-teal-500"></div>
                            </td>,
                        ],
                        [
                            "ring-cyan-500",
                            "シアン",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-cyan-500"></div>
                            </td>,
                        ],
                        [
                            "ring-sky-500",
                            "スカイ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-sky-500"></div>
                            </td>,
                        ],
                        [
                            "ring-blue-500",
                            "青",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-blue-500"></div>
                            </td>,
                        ],
                        [
                            "ring-indigo-500",
                            "藍色",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-indigo-500"></div>
                            </td>,
                        ],
                        [
                            "ring-violet-500",
                            "スミレ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-violet-500"></div>
                            </td>,
                        ],
                        [
                            "ring-purple-500",
                            "紫",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-purple-500"></div>
                            </td>,
                        ],
                        [
                            "ring-fuchsia-500",
                            "フクシア",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-fuchsia-500"></div>
                            </td>,
                        ],
                        [
                            "ring-pink-500",
                            "ピンク",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-pink-500"></div>
                            </td>,
                        ],
                        [
                            "ring-rose-500",
                            "バラ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-rose-500"></div>
                            </td>,
                        ],
                        [
                            "ring-slate-500",
                            "粘板岩",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-slate-500"></div>
                            </td>,
                        ],
                        [
                            "ring-gray-500",
                            "グレー",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-gray-500"></div>
                            </td>,
                        ],
                        [
                            "ring-zinc-500",
                            "亜鉛",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-zinc-500"></div>
                            </td>,
                        ],
                        [
                            "ring-neutral-500",
                            "ニュートラル",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-neutral-500"></div>
                            </td>,
                        ],
                        [
                            "ring-stone-500",
                            "石",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-stone-500"></div>
                            </td>,
                        ],
                        [
                            "ring-red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-red-500/25"></div>
                            </td>,
                        ],
                        [
                            "inset-ring",
                            "1pxの太さの輪郭線を要素の内側に描く",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inset-ring-（数値）",
                            "任意の太さの輪郭線を要素の内側に描く",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inset-ring-inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inset-ring-current",
                            "テキスト色",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inset-ring-transparent",
                            "透明",
                            <td className="w-10"></td>,
                        ],
                        [
                            "inset-ring-black",
                            "黒",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-black"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-white",
                            "白",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-white"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-red-500",
                            "赤",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-red-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-orange-500",
                            "オレンジ",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-orange-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-amber-500",
                            "琥珀",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-amber-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-yellow-500",
                            "黄色",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-yellow-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-lime-500",
                            "ライム",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-lime-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-green-500",
                            "緑",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-green-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-emerald-500",
                            "エメラルド",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-emerald-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-teal-500",
                            "コガモ",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-teal-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-cyan-500",
                            "シアン",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-cyan-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-sky-500",
                            "スカイ",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-sky-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-blue-500",
                            "青",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-blue-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-indigo-500",
                            "藍色",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-indigo-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-violet-500",
                            "スミレ",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-violet-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-purple-500",
                            "紫",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-purple-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-fuchsia-500",
                            "フクシア",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-fuchsia-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-pink-500",
                            "ピンク",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-pink-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-rose-500",
                            "バラ",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-rose-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-slate-500",
                            "粘板岩",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-slate-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-gray-500",
                            "グレー",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-gray-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-zinc-500",
                            "亜鉛",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-zinc-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-neutral-500",
                            "ニュートラル",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-neutral-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-stone-500",
                            "石",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-stone-500"></div>
                            </td>,
                        ],
                        [
                            "inset-ring-red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10">
                                <div className="h-4 w-9 inset-ring inset-ring-red-500/25"></div>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "text-shadow",
        {
            entry: "テキストの影",
            description: "テキストに対して影を描画する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "2xs",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-shadow-2xs text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "xs",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-shadow-xs text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "sm",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-shadow-sm text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "md",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "lg",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-shadow-lg text-white">
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
                                <p className="text-shadow-black text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "white",
                            "白",
                            <td className="bg-black">
                                <p className="text-shadow-white text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="bg-white">
                                <p className="text-shadow-red-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="bg-white">
                                <p className="text-shadow-orange-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="bg-white">
                                <p className="text-shadow-amber-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="bg-white">
                                <p className="text-shadow-yellow-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="bg-white">
                                <p className="text-shadow-lime-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="bg-white">
                                <p className="text-shadow-green-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="bg-white">
                                <p className="text-shadow-emerald-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="bg-white">
                                <p className="text-shadow-teal-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="bg-white">
                                <p className="text-shadow-cyan-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="bg-white">
                                <p className="text-shadow-sky-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="bg-white">
                                <p className="text-shadow-blue-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="bg-white">
                                <p className="text-shadow-indigo-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="bg-white">
                                <p className="text-shadow-violet-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="bg-white">
                                <p className="text-shadow-purple-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="bg-white">
                                <p className="text-shadow-fuchsia-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="bg-white">
                                <p className="text-shadow-pink-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="bg-white">
                                <p className="text-shadow-rose-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="bg-white">
                                <p className="text-shadow-slate-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="bg-white">
                                <p className="text-shadow-gray-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="bg-white">
                                <p className="text-shadow-zinc-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="bg-white">
                                <p className="text-shadow-neutral-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="bg-white">
                                <p className="text-shadow-stone-500 text-2xl text-shadow-md text-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="bg-white">
                                <p className="text-shadow-red-500/25 text-2xl text-shadow-md text-white">
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
        "opacity",
        {
            entry: "不透明度",
            description: "不透明度をパーセンテージで指定する",
            detail: null,
        },
    ],
    [
        "mix-blend-mode",
        {
            entry: "合成モード",
            description: "自身の要素と背後にある要素との合成方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["normal", "通常"],
                        ["multiply", "乗算"],
                        ["screen", "スクリーン"],
                        ["overlay", "オーバーレイ"],
                        ["darken", "比較（暗）"],
                        ["lighten", "比較（明）"],
                        ["color-dodge", "覆い焼きカラー"],
                        ["color-burn", "焼き込みカラー"],
                        ["hard-light", "ハードライト"],
                        ["soft-light", "ソフトライト"],
                        ["difference", "差の絶対値"],
                        ["exclusion", "除外"],
                        ["hue", "色相"],
                        ["saturation", "彩度"],
                        ["color", "カラー"],
                        ["luminosity", "輝度"],
                        ["plus-darker", "クロスフェード専用"],
                        ["plus-lighter", "クロスフェード専用"],
                    ]}
                />
            ),
        },
    ],
    [
        "background-blend-mode",
        {
            entry: "背景合成モード",
            description:
                "background-imageとbackground-colorとの合成方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["normal", "通常"],
                        ["multiply", "乗算"],
                        ["screen", "スクリーン"],
                        ["overlay", "オーバーレイ"],
                        ["darken", "比較（暗）"],
                        ["lighten", "比較（明）"],
                        ["color-dodge", "覆い焼きカラー"],
                        ["color-burn", "焼き込みカラー"],
                        ["hard-light", "ハードライト"],
                        ["soft-light", "ソフトライト"],
                        ["difference", "差の絶対値"],
                        ["exclusion", "除外"],
                        ["hue", "色相"],
                        ["saturation", "彩度"],
                        ["color", "カラー"],
                        ["luminosity", "輝度"],
                    ]}
                />
            ),
        },
    ],
    [
        "mask-clip",
        {
            entry: "マスクの切り抜き",
            description: "マスクが影響する領域を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["clip-border", "境界領域まで影響する"],
                        ["clip-padding", "余白領域まで影響する"],
                        ["clip-content", "コンテンツ領域まで影響する"],
                        ["clip-fill", "SVGの塗りつぶし領域まで影響する"],
                        ["clip-stroke", "SVGの輪郭線領域まで影響する"],
                        ["clip-view", "SVGのビューボックス領域まで影響する"],
                        ["no-clip", "マスクを無効にする"],
                    ]}
                />
            ),
        },
    ],
    [
        "mask-composite",
        {
            entry: "マスク合成",
            description: "複数のマスクの合成方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["add", "それぞれのマスク領域を足し合わせる"],
                        [
                            "subtract",
                            "1つ目のマスク領域から2つ目のマスク領域を引く",
                        ],
                        [
                            "intersect",
                            "それぞれのマスク領域の重なり部分を、マスク領域とする",
                        ],
                        [
                            "exclude",
                            "それぞれのマスク領域の重なり以外を、マスク領域とする",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "mask-image",
        {
            entry: "マスク画像",
            description: "マスクとして使用する画像を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["mask-[url(***.png)]", "マスク画像を指定する例"],
                        ["none", "マスク画像なし"],
                        ["linear-（数値）", "線形グラデーションマスクの角度"],
                        [
                            "linear-from-（数値・\nパーセンテージ・色）",
                            "線形グラデーションマスクの開始値",
                        ],
                        [
                            "linear-to-（数値・\nパーセンテージ・色）",
                            "線形グラデーションマスクの終端値",
                        ],
                        [
                            "t-from-（数値・\nパーセンテージ・色）",
                            "上に向かって透明になるグラデーションの開始値",
                        ],
                        [
                            "t-to-（数値・\nパーセンテージ・色）",
                            "上に向かって透明になるグラデーションの終端値",
                        ],
                        [
                            "r-from-（数値・\nパーセンテージ・色）",
                            "右に向かって透明になるグラデーションの開始値",
                        ],
                        [
                            "r-to-（数値・\nパーセンテージ・色）",
                            "右に向かって透明になるグラデーションの終端値",
                        ],
                        [
                            "b-from-（数値・\nパーセンテージ・色）",
                            "下に向かって透明になるグラデーションの開始値",
                        ],
                        [
                            "b-to-（数値・\nパーセンテージ・色）",
                            "下に向かって透明になるグラデーションの終端値",
                        ],
                        [
                            "l-from-（数値・\nパーセンテージ・色）",
                            "左に向かって透明になるグラデーションの開始値",
                        ],
                        [
                            "l-to-（数値・\nパーセンテージ・色）",
                            "左に向かって透明になるグラデーションの終端値",
                        ],
                        [
                            "y-from-（数値・\nパーセンテージ・色）",
                            "中心から上下に向かって透明になるグラデーションの開始値",
                        ],
                        [
                            "y-to-（数値・\nパーセンテージ・色）",
                            "中心から上下に向かって透明になるグラデーションの終端値",
                        ],
                        [
                            "x-from-（数値・\nパーセンテージ・色）",
                            "中心から左右に向かって透明になるグラデーションの開始値",
                        ],
                        [
                            "x-to-（数値・\nパーセンテージ・色）",
                            "中心から左右に向かって透明になるグラデーションの終端値",
                        ],
                        [
                            "radial-from-（数値・\nパーセンテージ・色）",
                            "円形グラデーションマスクの開始値",
                        ],
                        [
                            "radial-to-（数値・\nパーセンテージ・色）",
                            "円形グラデーションマスクの終端値",
                        ],
                        ["radial-circle", "円の形状"],
                        ["radial-ellipse", "楕円の形状"],
                        [
                            "radial-closest-corner",
                            "近くの角を触れるように円形グラデーションマスクをサイズ調整する",
                        ],
                        [
                            "radial-closest-side",
                            "近くの辺を触れるように円形グラデーションマスクをサイズ調整する",
                        ],
                        [
                            "radial-farthest-corner",
                            "遠くの角を触れるように円形グラデーションマスクをサイズ調整する",
                        ],
                        [
                            "radial-farthest-side",
                            "遠くの辺を触れるように円形グラデーションマスクをサイズ調整する",
                        ],
                        [
                            "radial-at-top-left",
                            "円形グラデーションマスクを左上に配置",
                        ],
                        ["radial-at-top", "円形グラデーションマスクを上に配置"],
                        [
                            "radial-at-top-right",
                            "円形グラデーションマスクを右上に配置",
                        ],
                        [
                            "radial-at-left",
                            "円形グラデーションマスクを左に配置",
                        ],
                        [
                            "radial-at-center",
                            "円形グラデーションマスクを中心に配置",
                        ],
                        [
                            "radial-at-right",
                            "円形グラデーションマスクを右に配置",
                        ],
                        [
                            "radial-at-bottom-left",
                            "円形グラデーションマスクを左下に配置",
                        ],
                        [
                            "radial-at-bottom",
                            "円形グラデーションマスクを下に配置",
                        ],
                        [
                            "radial-at-bottom-right",
                            "円形グラデーションマスクを右下に配置",
                        ],
                        ["conic-（数値）", "扇形グラデーションマスクの角度"],
                        [
                            "conic-from-（数値・\nパーセンテージ・色）",
                            "扇形グラデーションマスクの開始値",
                        ],
                        [
                            "conic-to-（数値・\nパーセンテージ・色）",
                            "扇形グラデーションマスクの終端値",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "mask-mode",
        {
            entry: "マスクモード",
            description: "mask-imageのマスクモードを指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "alpha",
                            "マスク画像の不透明度をマスクの値として使用する",
                        ],
                        [
                            "luminance",
                            "マスク画像の輝度をマスクの値として使用する",
                        ],
                        [
                            "match",
                            "マスク画像を<mask-source>型で指定した場合は輝度を、<image>型で指定した場合は不透明度をマスクの値として使用する",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "mask-origin",
        {
            entry: "マスクの原点",
            description: "mask-imageを貼り付ける原点を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["border", "境界領域の側面を原点に貼り付ける"],
                        ["padding", "余白領域の側面を原点に貼り付ける"],
                        ["content", "コンテンツ領域の側面を原点に貼り付ける"],
                        ["fill", "SVGの塗りつぶし領域の側面を原点に貼り付ける"],
                        ["stroke", "SVGの輪郭線領域の側面を原点に貼り付ける"],
                        [
                            "view",
                            "SVGのビューボックス領域の側面を原点に貼り付ける",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "mask-position",
        {
            entry: "マスク位置",
            description: "mask-imageの貼り付け位置を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["top-left", "左上"],
                        ["top", "上"],
                        ["top-right", "右上"],
                        ["left", "左"],
                        ["center", "中央"],
                        ["right", "右"],
                        ["bottom-left", "左下"],
                        ["bottom", "下"],
                        ["bottom-right", "右下"],
                    ]}
                />
            ),
        },
    ],
    [
        "mask-repeat",
        {
            entry: "マスクの繰り返し",
            description: "mask-imageの並べ方を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["repeat", "全方向に繰り返す"],
                        ["no-repeat", "繰り返さない"],
                        ["repeat-x", "水平方向に繰り返す"],
                        ["repeat-y", "垂直方向に繰り返す"],
                        [
                            "repeat-space",
                            "要素からはみ出すことなく繰り返す。隙間が生じやすい",
                        ],
                        [
                            "repeat-round",
                            "要素からはみ出すことなく繰り返す。マスク画像が歪みやすい",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "mask-size",
        {
            entry: "マスクサイズ",
            description: "mask-imageを表示するサイズを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "等倍で表示"],
                        ["cover", "要素全体を覆うように拡大縮小"],
                        ["contain", "マスク画像全体が収まるように拡大縮小"],
                    ]}
                />
            ),
        },
    ],
    [
        "mask-type",
        {
            entry: "マスクタイプ",
            description: "SVGの<mask>要素のマスクモードを指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "alpha",
                            "マスク画像の不透明度をマスクの値として使用する",
                        ],
                        [
                            "luminance",
                            "マスク画像の輝度をマスクの値として使用する",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default effectsJA;
