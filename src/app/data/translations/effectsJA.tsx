import { CategoryEnum } from "../../models/category";
import type { Translation } from "../../models/types";

const effectsJA = new Map<string, Translation>([
    [
        CategoryEnum.Effects,
        {
            entry: "効果",
            description: "",
            details: [],
        },
    ],
    [
        "box-shadow",
        {
            entry: "ボックスシャドー",
            description: "要素の影、または輪郭線を描画する",
            details: [
                [
                    "shadow-2xs",
                    "要素の背後に影を描画する",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-2xs" />
                    </td>,
                ],
                [
                    "shadow-xs",
                    "",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-xs" />
                    </td>,
                ],
                [
                    "shadow-sm",
                    "",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm" />
                    </td>,
                ],
                [
                    "shadow-md",
                    "",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-md" />
                    </td>,
                ],
                [
                    "shadow-lg",
                    "",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-lg" />
                    </td>,
                ],
                [
                    "shadow-xl",
                    "",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-xl" />
                    </td>,
                ],
                [
                    "shadow-2xl",
                    "",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-2xl" />
                    </td>,
                ],
                ["shadow-none", "影を描画しない", <td class="w-10" />],
                [
                    "inherit",
                    "親要素からスタイルを引き継ぐ",
                    <td class="w-10" />,
                ],
                ["shadow-current", "テキスト色", <td class="w-10" />],
                ["shadow-transparent", "透明", <td class="w-10" />],
                [
                    "shadow-black",
                    "黒",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-black" />
                    </td>,
                ],
                [
                    "shadow-white",
                    "白",
                    <td class="h-8 w-10 bg-black">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-white" />
                    </td>,
                ],
                [
                    "shadow-red-500",
                    "赤",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-red-500" />
                    </td>,
                ],
                [
                    "shadow-orange-500",
                    "オレンジ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-orange-500" />
                    </td>,
                ],
                [
                    "shadow-amber-500",
                    "琥珀",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-amber-500" />
                    </td>,
                ],
                [
                    "shadow-yellow-500",
                    "黄色",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-yellow-500" />
                    </td>,
                ],
                [
                    "shadow-lime-500",
                    "ライム",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-lime-500" />
                    </td>,
                ],
                [
                    "shadow-green-500",
                    "緑",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-green-500" />
                    </td>,
                ],
                [
                    "shadow-emerald-500",
                    "エメラルド",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-emerald-500" />
                    </td>,
                ],
                [
                    "shadow-teal-500",
                    "コガモ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-teal-500" />
                    </td>,
                ],
                [
                    "shadow-cyan-500",
                    "シアン",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-cyan-500" />
                    </td>,
                ],
                [
                    "shadow-sky-500",
                    "スカイ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-sky-500" />
                    </td>,
                ],
                [
                    "shadow-blue-500",
                    "青",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-blue-500" />
                    </td>,
                ],
                [
                    "shadow-indigo-500",
                    "藍色",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-indigo-500" />
                    </td>,
                ],
                [
                    "shadow-violet-500",
                    "スミレ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-violet-500" />
                    </td>,
                ],
                [
                    "shadow-purple-500",
                    "紫",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-purple-500" />
                    </td>,
                ],
                [
                    "shadow-fuchsia-500",
                    "フクシア",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-fuchsia-500" />
                    </td>,
                ],
                [
                    "shadow-pink-500",
                    "ピンク",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-pink-500" />
                    </td>,
                ],
                [
                    "shadow-rose-500",
                    "バラ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-rose-500" />
                    </td>,
                ],
                [
                    "shadow-slate-500",
                    "粘板岩",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-slate-500" />
                    </td>,
                ],
                [
                    "shadow-gray-500",
                    "グレー",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-gray-500" />
                    </td>,
                ],
                [
                    "shadow-zinc-500",
                    "亜鉛",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-zinc-500" />
                    </td>,
                ],
                [
                    "shadow-neutral-500",
                    "ニュートラル",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-neutral-500" />
                    </td>,
                ],
                [
                    "shadow-stone-500",
                    "石",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-stone-500" />
                    </td>,
                ],
                [
                    "shadow-red-500/25",
                    "不透明度25％で指定する例",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 shadow-sm shadow-red-500/25" />
                    </td>,
                ],
                [
                    "inset-shadow-2xs",
                    "要素の内側に影を描画する",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-2xs" />
                    </td>,
                ],
                [
                    "inset-shadow-xs",
                    "",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-xs" />
                    </td>,
                ],
                [
                    "inset-shadow-sm",
                    "",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm" />
                    </td>,
                ],
                [
                    "inset-shadow-none",
                    "内側に影を描画しない",
                    <td class="w-10" />,
                ],
                [
                    "inset-shadow-inherit",
                    "親要素からスタイルを引き継ぐ",
                    <td class="w-10" />,
                ],
                ["inset-shadow-current", "テキスト色", <td class="w-10" />],
                ["inset-shadow-transparent", "透明", <td class="w-10" />],
                [
                    "inset-shadow-black",
                    "黒",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-black" />
                    </td>,
                ],
                [
                    "inset-shadow-white",
                    "白",
                    <td class="h-8 w-10 bg-black">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-white" />
                    </td>,
                ],
                [
                    "inset-shadow-red-500",
                    "赤",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-red-500" />
                    </td>,
                ],
                [
                    "inset-shadow-orange-500",
                    "オレンジ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-orange-500" />
                    </td>,
                ],
                [
                    "inset-shadow-amber-500",
                    "琥珀",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-amber-500" />
                    </td>,
                ],
                [
                    "inset-shadow-yellow-500",
                    "黄色",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-yellow-500" />
                    </td>,
                ],
                [
                    "inset-shadow-lime-500",
                    "ライム",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-lime-500" />
                    </td>,
                ],
                [
                    "inset-shadow-green-500",
                    "緑",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-green-500" />
                    </td>,
                ],
                [
                    "inset-shadow-emerald-500",
                    "エメラルド",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-emerald-500" />
                    </td>,
                ],
                [
                    "inset-shadow-teal-500",
                    "コガモ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-teal-500" />
                    </td>,
                ],
                [
                    "inset-shadow-cyan-500",
                    "シアン",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-cyan-500" />
                    </td>,
                ],
                [
                    "inset-shadow-sky-500",
                    "スカイ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-sky-500" />
                    </td>,
                ],
                [
                    "inset-shadow-blue-500",
                    "青",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-blue-500" />
                    </td>,
                ],
                [
                    "inset-shadow-indigo-500",
                    "藍色",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-indigo-500" />
                    </td>,
                ],
                [
                    "inset-shadow-violet-500",
                    "スミレ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-violet-500" />
                    </td>,
                ],
                [
                    "inset-shadow-purple-500",
                    "紫",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-purple-500" />
                    </td>,
                ],
                [
                    "inset-shadow-fuchsia-500",
                    "フクシア",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-fuchsia-500" />
                    </td>,
                ],
                [
                    "inset-shadow-pink-500",
                    "ピンク",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-pink-500" />
                    </td>,
                ],
                [
                    "inset-shadow-rose-500",
                    "バラ",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-rose-500" />
                    </td>,
                ],
                [
                    "inset-shadow-slate-500",
                    "粘板岩",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-slate-500" />
                    </td>,
                ],
                [
                    "inset-shadow-gray-500",
                    "グレー",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-gray-500" />
                    </td>,
                ],
                [
                    "inset-shadow-zinc-500",
                    "亜鉛",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-zinc-500" />
                    </td>,
                ],
                [
                    "inset-shadow-neutral-500",
                    "ニュートラル",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-neutral-500" />
                    </td>,
                ],
                [
                    "inset-shadow-stone-500",
                    "石",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-stone-500" />
                    </td>,
                ],
                [
                    "inset-shadow-red-500/25",
                    "不透明度25％で指定する例",
                    <td class="h-8 w-10 bg-white">
                        <div class="mx-auto h-4 w-6 inset-shadow-sm inset-shadow-red-500/25" />
                    </td>,
                ],
                ["ring", "1pxの太さの輪郭線を描く", <td class="w-10" />],
                [
                    "ring-（数値）",
                    "任意の太さの輪郭線を描く",
                    <td class="w-10" />,
                ],
                [
                    "ring-inherit",
                    "親要素からスタイルを引き継ぐ",
                    <td class="w-10" />,
                ],
                ["ring-current", "テキスト色", <td class="w-10" />],
                ["ring-transparent", "透明", <td class="w-10" />],
                [
                    "ring-black",
                    "黒",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-black" />
                    </td>,
                ],
                [
                    "ring-white",
                    "白",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-white" />
                    </td>,
                ],
                [
                    "ring-red-500",
                    "赤",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-red-500" />
                    </td>,
                ],
                [
                    "ring-orange-500",
                    "オレンジ",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-orange-500" />
                    </td>,
                ],
                [
                    "ring-amber-500",
                    "琥珀",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-amber-500" />
                    </td>,
                ],
                [
                    "ring-yellow-500",
                    "黄色",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-yellow-500" />
                    </td>,
                ],
                [
                    "ring-lime-500",
                    "ライム",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-lime-500" />
                    </td>,
                ],
                [
                    "ring-green-500",
                    "緑",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-green-500" />
                    </td>,
                ],
                [
                    "ring-emerald-500",
                    "エメラルド",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-emerald-500" />
                    </td>,
                ],
                [
                    "ring-teal-500",
                    "コガモ",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-teal-500" />
                    </td>,
                ],
                [
                    "ring-cyan-500",
                    "シアン",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-cyan-500" />
                    </td>,
                ],
                [
                    "ring-sky-500",
                    "スカイ",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-sky-500" />
                    </td>,
                ],
                [
                    "ring-blue-500",
                    "青",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-blue-500" />
                    </td>,
                ],
                [
                    "ring-indigo-500",
                    "藍色",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-indigo-500" />
                    </td>,
                ],
                [
                    "ring-violet-500",
                    "スミレ",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-violet-500" />
                    </td>,
                ],
                [
                    "ring-purple-500",
                    "紫",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-purple-500" />
                    </td>,
                ],
                [
                    "ring-fuchsia-500",
                    "フクシア",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-fuchsia-500" />
                    </td>,
                ],
                [
                    "ring-pink-500",
                    "ピンク",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-pink-500" />
                    </td>,
                ],
                [
                    "ring-rose-500",
                    "バラ",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-rose-500" />
                    </td>,
                ],
                [
                    "ring-slate-500",
                    "粘板岩",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-slate-500" />
                    </td>,
                ],
                [
                    "ring-gray-500",
                    "グレー",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-gray-500" />
                    </td>,
                ],
                [
                    "ring-zinc-500",
                    "亜鉛",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-zinc-500" />
                    </td>,
                ],
                [
                    "ring-neutral-500",
                    "ニュートラル",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-neutral-500" />
                    </td>,
                ],
                [
                    "ring-stone-500",
                    "石",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-stone-500" />
                    </td>,
                ],
                [
                    "ring-red-500/25",
                    "不透明度25％で指定する例",
                    <td class="w-10">
                        <div class="h-4 w-9 ring-1 ring-red-500/25" />
                    </td>,
                ],
                [
                    "inset-ring",
                    "1pxの太さの輪郭線を要素の内側に描く",
                    <td class="w-10" />,
                ],
                [
                    "inset-ring-（数値）",
                    "任意の太さの輪郭線を要素の内側に描く",
                    <td class="w-10" />,
                ],
                [
                    "inset-ring-inherit",
                    "親要素からスタイルを引き継ぐ",
                    <td class="w-10" />,
                ],
                ["inset-ring-current", "テキスト色", <td class="w-10" />],
                ["inset-ring-transparent", "透明", <td class="w-10" />],
                [
                    "inset-ring-black",
                    "黒",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-black" />
                    </td>,
                ],
                [
                    "inset-ring-white",
                    "白",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-white" />
                    </td>,
                ],
                [
                    "inset-ring-red-500",
                    "赤",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-red-500" />
                    </td>,
                ],
                [
                    "inset-ring-orange-500",
                    "オレンジ",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-orange-500" />
                    </td>,
                ],
                [
                    "inset-ring-amber-500",
                    "琥珀",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-amber-500" />
                    </td>,
                ],
                [
                    "inset-ring-yellow-500",
                    "黄色",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-yellow-500" />
                    </td>,
                ],
                [
                    "inset-ring-lime-500",
                    "ライム",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-lime-500" />
                    </td>,
                ],
                [
                    "inset-ring-green-500",
                    "緑",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-green-500" />
                    </td>,
                ],
                [
                    "inset-ring-emerald-500",
                    "エメラルド",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-emerald-500" />
                    </td>,
                ],
                [
                    "inset-ring-teal-500",
                    "コガモ",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-teal-500" />
                    </td>,
                ],
                [
                    "inset-ring-cyan-500",
                    "シアン",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-cyan-500" />
                    </td>,
                ],
                [
                    "inset-ring-sky-500",
                    "スカイ",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-sky-500" />
                    </td>,
                ],
                [
                    "inset-ring-blue-500",
                    "青",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-blue-500" />
                    </td>,
                ],
                [
                    "inset-ring-indigo-500",
                    "藍色",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-indigo-500" />
                    </td>,
                ],
                [
                    "inset-ring-violet-500",
                    "スミレ",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-violet-500" />
                    </td>,
                ],
                [
                    "inset-ring-purple-500",
                    "紫",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-purple-500" />
                    </td>,
                ],
                [
                    "inset-ring-fuchsia-500",
                    "フクシア",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-fuchsia-500" />
                    </td>,
                ],
                [
                    "inset-ring-pink-500",
                    "ピンク",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-pink-500" />
                    </td>,
                ],
                [
                    "inset-ring-rose-500",
                    "バラ",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-rose-500" />
                    </td>,
                ],
                [
                    "inset-ring-slate-500",
                    "粘板岩",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-slate-500" />
                    </td>,
                ],
                [
                    "inset-ring-gray-500",
                    "グレー",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-gray-500" />
                    </td>,
                ],
                [
                    "inset-ring-zinc-500",
                    "亜鉛",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-zinc-500" />
                    </td>,
                ],
                [
                    "inset-ring-neutral-500",
                    "ニュートラル",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-neutral-500" />
                    </td>,
                ],
                [
                    "inset-ring-stone-500",
                    "石",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-stone-500" />
                    </td>,
                ],
                [
                    "inset-ring-red-500/25",
                    "不透明度25％で指定する例",
                    <td class="w-10">
                        <div class="h-4 w-9 inset-ring inset-ring-red-500/25" />
                    </td>,
                ],
            ],
        },
    ],
    [
        "text-shadow",
        {
            entry: "テキストの影",
            description: "テキストに対して影を描画する",
            details: [
                [
                    "2xs",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-2xs">Aa</p>
                    </td>,
                ],
                [
                    "xs",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-xs">Aa</p>
                    </td>,
                ],
                [
                    "sm",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-sm">Aa</p>
                    </td>,
                ],
                [
                    "md",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md">Aa</p>
                    </td>,
                ],
                [
                    "lg",
                    "",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-lg">Aa</p>
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
                        <p class="text-2xl text-white text-shadow-black text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "white",
                    "白",
                    <td class="bg-black">
                        <p class="text-2xl text-white text-shadow-md text-shadow-white">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "red-500",
                    "赤",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-red-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "orange-500",
                    "オレンジ",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-orange-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "amber-500",
                    "琥珀",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-amber-500 text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "yellow-500",
                    "黄色",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-yellow-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "lime-500",
                    "ライム",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-lime-500 text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "green-500",
                    "緑",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-green-500 text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "emerald-500",
                    "エメラルド",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-emerald-500 text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "teal-500",
                    "コガモ",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-teal-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "cyan-500",
                    "シアン",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-cyan-500 text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "sky-500",
                    "スカイ",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-sky-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "blue-500",
                    "青",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-blue-500 text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "indigo-500",
                    "藍色",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-indigo-500 text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "violet-500",
                    "スミレ",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-violet-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "purple-500",
                    "紫",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-purple-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "fuchsia-500",
                    "フクシア",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-fuchsia-500 text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "pink-500",
                    "ピンク",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-pink-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "rose-500",
                    "バラ",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-rose-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "slate-500",
                    "粘板岩",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-slate-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "gray-500",
                    "グレー",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-gray-500 text-shadow-md">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "zinc-500",
                    "亜鉛",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-zinc-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "neutral-500",
                    "ニュートラル",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-neutral-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "stone-500",
                    "石",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-stone-500">
                            Aa
                        </p>
                    </td>,
                ],
                [
                    "red-500/25",
                    "不透明度25％で指定する例",
                    <td class="bg-white">
                        <p class="text-2xl text-white text-shadow-md text-shadow-red-500/25">
                            Aa
                        </p>
                    </td>,
                ],
            ],
        },
    ],
    [
        "opacity",
        {
            entry: "不透明度",
            description: "不透明度をパーセンテージで指定する",
            details: [],
        },
    ],
    [
        "mix-blend-mode",
        {
            entry: "合成モード",
            description: "自身の要素と背後にある要素との合成方法を指定する",
            details: [
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
            ],
        },
    ],
    [
        "background-blend-mode",
        {
            entry: "背景合成モード",
            description:
                "background-imageとbackground-colorとの合成方法を指定する",
            details: [
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
            ],
        },
    ],
    [
        "mask-clip",
        {
            entry: "マスクの切り抜き",
            description: "マスクが影響する領域を指定する",
            details: [
                ["clip-border", "境界領域まで影響する"],
                ["clip-padding", "余白領域まで影響する"],
                ["clip-content", "コンテンツ領域まで影響する"],
                ["clip-fill", "SVGの塗りつぶし領域まで影響する"],
                ["clip-stroke", "SVGの輪郭線領域まで影響する"],
                ["clip-view", "SVGのビューボックス領域まで影響する"],
                ["no-clip", "マスクを無効にする"],
            ],
        },
    ],
    [
        "mask-composite",
        {
            entry: "マスク合成",
            description: "複数のマスクの合成方法を指定する",
            details: [
                ["add", "それぞれのマスク領域を足し合わせる"],
                ["subtract", "1つ目のマスク領域から2つ目のマスク領域を引く"],
                [
                    "intersect",
                    "それぞれのマスク領域の重なり部分を、マスク領域とする",
                ],
                [
                    "exclude",
                    "それぞれのマスク領域の重なり以外を、マスク領域とする",
                ],
            ],
        },
    ],
    [
        "mask-image",
        {
            entry: "マスク画像",
            description: "マスクとして使用する画像を指定する",
            details: [
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
                ["radial-at-top-left", "円形グラデーションマスクを左上に配置"],
                ["radial-at-top", "円形グラデーションマスクを上に配置"],
                ["radial-at-top-right", "円形グラデーションマスクを右上に配置"],
                ["radial-at-left", "円形グラデーションマスクを左に配置"],
                ["radial-at-center", "円形グラデーションマスクを中心に配置"],
                ["radial-at-right", "円形グラデーションマスクを右に配置"],
                [
                    "radial-at-bottom-left",
                    "円形グラデーションマスクを左下に配置",
                ],
                ["radial-at-bottom", "円形グラデーションマスクを下に配置"],
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
            ],
        },
    ],
    [
        "mask-mode",
        {
            entry: "マスクモード",
            description: "mask-imageのマスクモードを指定する",
            details: [
                ["alpha", "マスク画像の不透明度をマスクの値として使用する"],
                ["luminance", "マスク画像の輝度をマスクの値として使用する"],
                [
                    "match",
                    "マスク画像を<mask-source>型で指定した場合は輝度を、<image>型で指定した場合は不透明度をマスクの値として使用する",
                ],
            ],
        },
    ],
    [
        "mask-origin",
        {
            entry: "マスクの原点",
            description: "mask-imageを貼り付ける原点を指定する",
            details: [
                ["border", "境界領域の側面を原点に貼り付ける"],
                ["padding", "余白領域の側面を原点に貼り付ける"],
                ["content", "コンテンツ領域の側面を原点に貼り付ける"],
                ["fill", "SVGの塗りつぶし領域の側面を原点に貼り付ける"],
                ["stroke", "SVGの輪郭線領域の側面を原点に貼り付ける"],
                ["view", "SVGのビューボックス領域の側面を原点に貼り付ける"],
            ],
        },
    ],
    [
        "mask-position",
        {
            entry: "マスク位置",
            description: "mask-imageの貼り付け位置を指定する",
            details: [
                ["top-left", "左上"],
                ["top", "上"],
                ["top-right", "右上"],
                ["left", "左"],
                ["center", "中央"],
                ["right", "右"],
                ["bottom-left", "左下"],
                ["bottom", "下"],
                ["bottom-right", "右下"],
            ],
        },
    ],
    [
        "mask-repeat",
        {
            entry: "マスクの繰り返し",
            description: "mask-imageの並べ方を指定する",
            details: [
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
            ],
        },
    ],
    [
        "mask-size",
        {
            entry: "マスクサイズ",
            description: "mask-imageを表示するサイズを指定する",
            details: [
                ["auto", "等倍で表示"],
                ["cover", "要素全体を覆うように拡大縮小"],
                ["contain", "マスク画像全体が収まるように拡大縮小"],
            ],
        },
    ],
    [
        "mask-type",
        {
            entry: "マスクタイプ",
            description: "SVGの<mask>要素のマスクモードを指定する",
            details: [
                ["alpha", "マスク画像の不透明度をマスクの値として使用する"],
                ["luminance", "マスク画像の輝度をマスクの値として使用する"],
            ],
        },
    ],
]);

export default effectsJA;
