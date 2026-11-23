import type { Translation } from "../../application/translation";
import { CategoryEnum } from "../../domain/models/category";
import { FiltersEnum } from "../../domain/models/entry";

export const filtersJA = new Map<string, Translation>([
  [
    CategoryEnum.Filters,
    {
      entry: "フィルター",
      description: "",
      details: [],
    },
  ],
  [
    FiltersEnum.filter,
    {
      entry: "フィルター",
      description: "フィルターを操作する",
      details: [["none", "全てのフィルターを解除"]],
    },
  ],
  [
    FiltersEnum.filterBlur,
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
    FiltersEnum.filterBrightness,
    {
      entry: "明るさ",
      description: "明るさの強度をパーセンテージで指定する",
      details: [],
    },
  ],
  [
    FiltersEnum.filterContrast,
    {
      entry: "コントラスト",
      description: "明暗差の強度をパーセンテージで指定する",
      details: [],
    },
  ],
  [
    FiltersEnum.filterDropShadow,
    {
      entry: "ドロップシャドー",
      description: "コンテンツに対する影を描画する",
      details: [
        ["xs", ""],
        ["sm", ""],
        ["md", ""],
        ["lg", ""],
        ["xl", ""],
        ["2xl", ""],
        ["none", "影を描画しない"],
        ["inherit", "親要素からスタイルを引き継ぐ"],
        ["current", "テキスト色"],
        ["transparent", "透明"],
        ["black", "黒"],
        ["white", "白"],
        ["red-500", "赤"],
        ["orange-500", "オレンジ"],
        ["amber-500", "琥珀"],
        ["yellow-500", "黄色"],
        ["lime-500", "ライム"],
        ["green-500", "緑"],
        ["emerald-500", "エメラルド"],
        ["teal-500", "コガモ"],
        ["cyan-500", "シアン"],
        ["sky-500", "スカイ"],
        ["blue-500", "青"],
        ["indigo-500", "藍色"],
        ["violet-500", "スミレ"],
        ["purple-500", "紫"],
        ["fuchsia-500", "フクシア"],
        ["pink-500", "ピンク"],
        ["rose-500", "バラ"],
        ["slate-500", "粘板岩"],
        ["gray-500", "グレー"],
        ["zinc-500", "亜鉛"],
        ["neutral-500", "ニュートラル"],
        ["stone-500", "石"],
        ["mauve-500", "モーブ"],
        ["olive-500", "オリーブ"],
        ["mist-500", "ミスト"],
        ["taupe-500", "灰褐色"],
        ["red-500/25", "不透明度25％で指定する例"],
      ],
    },
  ],
  [
    FiltersEnum.filterGrayscale,
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
    FiltersEnum.filterHueRotate,
    {
      entry: "色相",
      description: "指定した角度で色相を回転し色味を変える",
      details: [],
    },
  ],
  [
    FiltersEnum.filterInvert,
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
    FiltersEnum.filterSaturate,
    {
      entry: "彩度",
      description: "鮮やかさの強度をパーセンテージで指定する",
      details: [],
    },
  ],
  [
    FiltersEnum.filterSepia,
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
    FiltersEnum.backdropFilter,
    {
      entry: "背景フィルター",
      description: "背後の要素に対して作用するフィルターを操作する",
      details: [["none", "全ての背景フィルターを解除"]],
    },
  ],
  [
    FiltersEnum.backdropFilterBlur,
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
    FiltersEnum.backdropFilterBrightness,
    {
      entry: "背景の明るさ",
      description: "背後の要素に対する、明るさの強度をパーセンテージで指定する",
      details: [],
    },
  ],
  [
    FiltersEnum.backdropFilterContrast,
    {
      entry: "背景コントラスト",
      description: "背後の要素に対する、明暗差の強度をパーセンテージで指定する",
      details: [],
    },
  ],
  [
    FiltersEnum.backdropFilterGrayscale,
    {
      entry: "背景グレースケール",
      description: "背後の要素に対し、グレーの濃淡で描画する",
      details: [
        ["backdrop-grayscale", "フィルター強度100%"],
        ["backdrop-grayscale-（数値）", "フィルター強度をパーセンテージで指定"],
      ],
    },
  ],
  [
    FiltersEnum.backdropFilterHueRotate,
    {
      entry: "背景の色相",
      description: "背後の要素に対し、指定した角度で色相を回転し色味を変える",
      details: [],
    },
  ],
  [
    FiltersEnum.backdropFilterInvert,
    {
      entry: "背景の反転",
      description: "背後の要素に対し、色を反転する",
      details: [
        ["backdrop-invert", "フィルター強度100%"],
        ["backdrop-invert-（数値）", "フィルター強度をパーセンテージで指定"],
      ],
    },
  ],
  [
    FiltersEnum.backdropFilterOpacity,
    {
      entry: "背景の不透明度",
      description: "backdrop系フィルターの不透明度をパーセンテージで指定する",
      details: [],
    },
  ],
  [
    FiltersEnum.backdropFilterSaturate,
    {
      entry: "背景の彩度",
      description: "背後の要素に対する、鮮やかさの強度をパーセンテージで指定する",
      details: [],
    },
  ],
  [
    FiltersEnum.backdropFilterSepia,
    {
      entry: "背景セピア",
      description: "背後の要素に対し、黒茶色の濃淡で描画する",
      details: [
        ["backdrop-sepia", "フィルター強度100%"],
        ["backdrop-sepia-（数値）", "フィルター強度をパーセンテージで指定"],
      ],
    },
  ],
]);
