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
]);

export default effectsJA;
