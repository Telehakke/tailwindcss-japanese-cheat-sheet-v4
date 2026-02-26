import { CategoryEnum } from "../../models/category";
import type { Translation } from "../../models/cheatSheetData";
import { TypographyEnum } from "../../models/entry";

export const typographyJA = new Map<string, Translation>([
    [
        CategoryEnum.Typography,
        {
            entry: "タイポグラフィー",
            description: "",
            details: [],
        },
    ],
    [
        TypographyEnum.fontFamily,
        {
            entry: "フォントファミリー",
            description: "フォントファミリーを指定する",
            details: [
                ["sans", "ゴシック体"],
                ["serif", "明朝体"],
                ["mono", "等幅フォント"],
            ],
        },
    ],
    [
        TypographyEnum.fontSize,
        {
            entry: "フォントサイズ",
            description: "フォントサイズを指定する",
            details: [],
        },
    ],
    [
        TypographyEnum.fontSmoothing,
        {
            entry: "フォントのなめらかさ",
            description: "アンチエイリアスの方式を指定する（macOSで有効）",
            details: [
                ["antialiased", "グレースケール方式（線がわずかに細く見える）"],
                [
                    "subpixel-antialiased",
                    "サブピクセル方式（線がわずかに太く見える）。デフォルト",
                ],
            ],
        },
    ],
    [
        TypographyEnum.fontStyle,
        {
            entry: "フォントスタイル",
            description: "斜体で表示するかどうかを指定する",
            details: [],
        },
    ],
    [
        TypographyEnum.fontWeight,
        {
            entry: "フォントウェイト",
            description: "フォントの太さを指定する",
            details: [],
        },
    ],
    [
        TypographyEnum.fontStretch,
        {
            entry: "フォントの引き延ばし",
            description:
                "フォントの幅を指定する。幅の変更に対応するフォントでのみ有効",
            details: [
                ["（...condensed–...expanded）", "プリセット値を使用"],
                ["（数値）%", "任意のパーセンテージを指定"],
            ],
        },
    ],
    [
        TypographyEnum.fontVariantNumeric,
        {
            entry: "数字の異形",
            description:
                "数字の表記形式を指定する。フォント側がそれぞれの形式に対応する場合のみ有効",
            details: [
                ["normal-nums", "標準"],
                ["ordinal", "「1st」などの序数詞を数字の右肩に小さく表記する"],
                ["slashed-zero", "斜線付き「0」を使用する"],
                ["lining-nums", "高さが揃った数字"],
                ["oldstyle-nums", "高さが不揃いな数字"],
                [
                    "proportional-nums",
                    "プロポーショナルフォント（幅が不揃い）を使用する",
                ],
                ["tabular-nums", "等幅フォントを使用する"],
                [
                    "diagonal-fractions",
                    "「1/2」などの分数をコンパクトに表記する",
                ],
                [
                    "stacked-fractions",
                    "分数の分母と分子を積み上げる形で表記する",
                ],
            ],
        },
    ],
    [
        TypographyEnum.fontFeatureSettings,
        {
            entry: "フォント機能設定",
            description: "フォントが持つOpenType機能を制御する",
            details: [],
        },
    ],
    [
        TypographyEnum.letterSpacing,
        {
            entry: "文字間隔",
            description: "文字間隔を指定する",
            details: [],
        },
    ],
    [
        TypographyEnum.lineClamp,
        {
            entry: "行の固定",
            description: "固定する行数を指定する",
            details: [
                ["（数値）", "固定する行数"],
                ["none", "固定しない"],
            ],
        },
    ],
    [
        TypographyEnum.lineHeight,
        {
            entry: "行の高さ",
            description: "行の高さを指定する",
            details: [
                [
                    "text-（xs–9lx）/（数値）",
                    "任意のフォントサイズと行の高さを指定する",
                ],
                ["leading-none", "フォントサイズと同じ高さで指定する"],
                ["leading-（数値）", "任意の高さで指定する"],
            ],
        },
    ],
    [
        TypographyEnum.listStyleImage,
        {
            entry: "リストスタイルの画像",
            description: "リスト項目のマーカーとして使用する画像を指定する",
            details: [
                [
                    "list-image-[url(***.png)]",
                    "特定の画像をマーカーとして使用する例",
                ],
                ["list-image-none", "マーカーを指定しない"],
            ],
        },
    ],
    [
        TypographyEnum.listStylePosition,
        {
            entry: "リストスタイルの位置",
            description: "リスト項目のマーカー位置を指定する",
            details: [
                ["inside", "マーカーを要素の内側に収める"],
                ["outside", "マーカーを要素の外側に置く"],
            ],
        },
    ],
    [
        TypographyEnum.listStyleType,
        {
            entry: "リストスタイルの種類",
            description: "リスト項目のマーカー種類を指定する",
            details: [
                ["disc", "箇条書き（「・」で表す）"],
                ["decimal", "数値リスト（「1.」「2.」のように表す）"],
                ["none", "マーカーなし"],
            ],
        },
    ],
    [
        TypographyEnum.textAlign,
        {
            entry: "テキストの整列",
            description: "テキストの水平方向の揃えを指定する",
            details: [
                ["left", "左揃え"],
                ["center", "中央揃え"],
                ["right", "右揃え"],
                ["justify", "両端揃え"],
                ["start", "テキストの開始側に揃える"],
                ["end", "テキストの終端側に揃える"],
            ],
        },
    ],
    [
        TypographyEnum.color,
        {
            entry: "色",
            description: "テキストの色を指定する",
            details: [
                [
                    "inherit",
                    "親要素からスタイルを引き継ぐ",
                    <td className="bg-transparent" />,
                ],
                ["current", "テキスト色", <td className="bg-transparent" />],
                ["transparent", "透明", <td className="bg-transparent" />],
                [
                    "black",
                    "黒",
                    <td>
                        <p className="text-black">Aa</p>
                    </td>,
                ],
                [
                    "white",
                    "白",
                    <td>
                        <p className="text-white">Aa</p>
                    </td>,
                ],
                [
                    "red-500",
                    "赤",
                    <td>
                        <p className="text-red-500">Aa</p>
                    </td>,
                ],
                [
                    "orange-500",
                    "オレンジ",
                    <td>
                        <p className="text-orange-500">Aa</p>
                    </td>,
                ],
                [
                    "amber-500",
                    "琥珀",
                    <td>
                        <p className="text-amber-500">Aa</p>
                    </td>,
                ],
                [
                    "yellow-500",
                    "黄色",
                    <td>
                        <p className="text-yellow-500">Aa</p>
                    </td>,
                ],
                [
                    "lime-500",
                    "ライム",
                    <td>
                        <p className="text-lime-500">Aa</p>
                    </td>,
                ],
                [
                    "green-500",
                    "緑",
                    <td>
                        <p className="text-green-500">Aa</p>
                    </td>,
                ],
                [
                    "emerald-500",
                    "エメラルド",
                    <td>
                        <p className="text-emerald-500">Aa</p>
                    </td>,
                ],
                [
                    "teal-500",
                    "コガモ",
                    <td>
                        <p className="text-teal-500">Aa</p>
                    </td>,
                ],
                [
                    "cyan-500",
                    "シアン",
                    <td>
                        <p className="text-cyan-500">Aa</p>
                    </td>,
                ],
                [
                    "sky-500",
                    "スカイ",
                    <td>
                        <p className="text-sky-500">Aa</p>
                    </td>,
                ],
                [
                    "blue-500",
                    "青",
                    <td>
                        <p className="text-blue-500">Aa</p>
                    </td>,
                ],
                [
                    "indigo-500",
                    "藍色",
                    <td>
                        <p className="text-indigo-500">Aa</p>
                    </td>,
                ],
                [
                    "violet-500",
                    "スミレ",
                    <td>
                        <p className="text-violet-500">Aa</p>
                    </td>,
                ],
                [
                    "purple-500",
                    "紫",
                    <td>
                        <p className="text-purple-500">Aa</p>
                    </td>,
                ],
                [
                    "fuchsia-500",
                    "フクシア",
                    <td>
                        <p className="text-fuchsia-500">Aa</p>
                    </td>,
                ],
                [
                    "pink-500",
                    "ピンク",
                    <td>
                        <p className="text-pink-500">Aa</p>
                    </td>,
                ],
                [
                    "rose-500",
                    "バラ",
                    <td>
                        <p className="text-rose-500">Aa</p>
                    </td>,
                ],
                [
                    "slate-500",
                    "粘板岩",
                    <td>
                        <p className="text-slate-500">Aa</p>
                    </td>,
                ],
                [
                    "gray-500",
                    "グレー",
                    <td>
                        <p className="text-gray-500">Aa</p>
                    </td>,
                ],
                [
                    "zinc-500",
                    "亜鉛",
                    <td>
                        <p className="text-zinc-500">Aa</p>
                    </td>,
                ],
                [
                    "neutral-500",
                    "ニュートラル",
                    <td>
                        <p className="text-neutral-500">Aa</p>
                    </td>,
                ],
                [
                    "stone-500",
                    "石",
                    <td>
                        <p className="text-stone-500">Aa</p>
                    </td>,
                ],
                [
                    "mauve-500",
                    "モーブ",
                    <td>
                        <p className="text-mauve-500">Aa</p>
                    </td>,
                ],
                [
                    "olive-500",
                    "オリーブ",
                    <td>
                        <p className="text-olive-500">Aa</p>
                    </td>,
                ],
                [
                    "mist-500",
                    "ミスト",
                    <td>
                        <p className="text-mist-500">Aa</p>
                    </td>,
                ],
                [
                    "taupe-500",
                    "灰褐色",
                    <td>
                        <p className="text-taupe-500">Aa</p>
                    </td>,
                ],
                [
                    "red-500/25",
                    "不透明度25％で指定する例",
                    <td>
                        <p className="text-red-500/25">Aa</p>
                    </td>,
                ],
            ],
        },
    ],
    [
        TypographyEnum.textDecorationLine,
        {
            entry: "テキスト装飾線",
            description: "テキストの装飾を指定する",
            details: [
                [
                    "underline",
                    "下線を引く",
                    <td>
                        <p className="underline">Aa</p>
                    </td>,
                ],
                [
                    "overline",
                    "上線を引く",
                    <td>
                        <p className="overline">Aa</p>
                    </td>,
                ],
                [
                    "line-through",
                    "取り消し線を引く",
                    <td>
                        <p className="line-through">Aa</p>
                    </td>,
                ],
                [
                    "no-underline",
                    "装飾しない",
                    <td>
                        <p className="no-underline">Aa</p>
                    </td>,
                ],
            ],
        },
    ],
    [
        TypographyEnum.textDecorationColor,
        {
            entry: "テキスト装飾の色",
            description: "テキスト装飾の色を指定する",
            details: [
                ["inherit", "親要素からスタイルを引き継ぐ", <td />],
                ["current", "テキスト色", <td />],
                ["transparent", "透明", <td />],
                [
                    "black",
                    "黒",
                    <td>
                        <p className="underline decoration-black">Aa</p>
                    </td>,
                ],
                [
                    "white",
                    "白",
                    <td>
                        <p className="underline decoration-white">Aa</p>
                    </td>,
                ],
                [
                    "red-500",
                    "赤",
                    <td>
                        <p className="underline decoration-red-500">Aa</p>
                    </td>,
                ],
                [
                    "orange-500",
                    "オレンジ",
                    <td>
                        <p className="underline decoration-orange-500">Aa</p>
                    </td>,
                ],
                [
                    "amber-500",
                    "琥珀",
                    <td>
                        <p className="underline decoration-amber-500">Aa</p>
                    </td>,
                ],
                [
                    "yellow-500",
                    "黄色",
                    <td>
                        <p className="underline decoration-yellow-500">Aa</p>
                    </td>,
                ],
                [
                    "lime-500",
                    "ライム",
                    <td>
                        <p className="underline decoration-lime-500">Aa</p>
                    </td>,
                ],
                [
                    "green-500",
                    "緑",
                    <td>
                        <p className="underline decoration-green-500">Aa</p>
                    </td>,
                ],
                [
                    "emerald-500",
                    "エメラルド",
                    <td>
                        <p className="underline decoration-emerald-500">Aa</p>
                    </td>,
                ],
                [
                    "teal-500",
                    "コガモ",
                    <td>
                        <p className="underline decoration-teal-500">Aa</p>
                    </td>,
                ],
                [
                    "cyan-500",
                    "シアン",
                    <td>
                        <p className="underline decoration-cyan-500">Aa</p>
                    </td>,
                ],
                [
                    "sky-500",
                    "スカイ",
                    <td>
                        <p className="underline decoration-sky-500">Aa</p>
                    </td>,
                ],
                [
                    "blue-500",
                    "青",
                    <td>
                        <p className="underline decoration-blue-500">Aa</p>
                    </td>,
                ],
                [
                    "indigo-500",
                    "藍色",
                    <td>
                        <p className="underline decoration-indigo-500">Aa</p>
                    </td>,
                ],
                [
                    "violet-500",
                    "スミレ",
                    <td>
                        <p className="underline decoration-violet-500">Aa</p>
                    </td>,
                ],
                [
                    "purple-500",
                    "紫",
                    <td>
                        <p className="underline decoration-purple-500">Aa</p>
                    </td>,
                ],
                [
                    "fuchsia-500",
                    "フクシア",
                    <td>
                        <p className="underline decoration-fuchsia-500">Aa</p>
                    </td>,
                ],
                [
                    "pink-500",
                    "ピンク",
                    <td>
                        <p className="underline decoration-pink-500">Aa</p>
                    </td>,
                ],
                [
                    "rose-500",
                    "バラ",
                    <td>
                        <p className="underline decoration-rose-500">Aa</p>
                    </td>,
                ],
                [
                    "slate-500",
                    "粘板岩",
                    <td>
                        <p className="underline decoration-slate-500">Aa</p>
                    </td>,
                ],
                [
                    "gray-500",
                    "グレー",
                    <td>
                        <p className="underline decoration-gray-500">Aa</p>
                    </td>,
                ],
                [
                    "zinc-500",
                    "亜鉛",
                    <td>
                        <p className="underline decoration-zinc-500">Aa</p>
                    </td>,
                ],
                [
                    "neutral-500",
                    "ニュートラル",
                    <td>
                        <p className="underline decoration-neutral-500">Aa</p>
                    </td>,
                ],
                [
                    "stone-500",
                    "石",
                    <td>
                        <p className="underline decoration-stone-500">Aa</p>
                    </td>,
                ],
                [
                    "mauve-500",
                    "モーブ",
                    <td>
                        <p className="underline decoration-mauve-500">Aa</p>
                    </td>,
                ],
                [
                    "olive-500",
                    "オリーブ",
                    <td>
                        <p className="underline decoration-olive-500">Aa</p>
                    </td>,
                ],
                [
                    "mist-500",
                    "ミスト",
                    <td>
                        <p className="underline decoration-mist-500">Aa</p>
                    </td>,
                ],
                [
                    "taupe-500",
                    "灰褐色",
                    <td>
                        <p className="underline decoration-taupe-500">Aa</p>
                    </td>,
                ],
                [
                    "red-500/25",
                    "不透明度25％で指定する例",
                    <td>
                        <p className="underline decoration-red-500/25">Aa</p>
                    </td>,
                ],
            ],
        },
    ],
    [
        TypographyEnum.textDecorationStyle,
        {
            entry: "テキスト装飾のスタイル",
            description: "テキスト装飾のスタイルを指定する",
            details: [
                [
                    "solid",
                    "一本のつながった線",
                    <td>
                        <p className="underline decoration-solid">Aa</p>
                    </td>,
                ],
                [
                    "double",
                    "二重線",
                    <td>
                        <p className="underline decoration-double">Aa</p>
                    </td>,
                ],
                [
                    "dotted",
                    "点線",
                    <td>
                        <p className="underline decoration-dotted">Aa</p>
                    </td>,
                ],
                [
                    "dashed",
                    "破線",
                    <td>
                        <p className="underline decoration-dashed">Aa</p>
                    </td>,
                ],
                [
                    "wavy",
                    "波線",
                    <td>
                        <p className="underline decoration-wavy">Aa</p>
                    </td>,
                ],
            ],
        },
    ],
    [
        TypographyEnum.textDecorationThickness,
        {
            entry: "テキスト装飾の太さ",
            description: "テキスト装飾の太さを指定する",
            details: [
                ["（数値）", "ピクセル値で指定"],
                [
                    "from-font",
                    "推奨される太さがフォントに埋め込まれていれば、その値を使用",
                ],
                ["auto", "自動"],
            ],
        },
    ],
    [
        TypographyEnum.textUnderlineOffset,
        {
            entry: "テキストアンダーラインのオフセット",
            description: "指定した距離だけアンダーラインを下にずらす",
            details: [
                ["（数値）", "ピクセル値で指定"],
                ["auto", "自動"],
            ],
        },
    ],
    [
        TypographyEnum.textTransform,
        {
            entry: "テキストの変換",
            description: "アルファベットを変換するルールを指定する",
            details: [
                ["uppercase", "大文字に変換"],
                ["lowercase", "小文字に変換"],
                [
                    "capitalize",
                    "小文字に変換するが、単語の先頭のみ大文字にする",
                ],
                ["normal-case", "変換しない"],
            ],
        },
    ],
    [
        TypographyEnum.textOverflow,
        {
            entry: "テキストのオーバーフロー",
            description: "テキストが要素からはみ出す場合の動作を指定する",
            details: [
                ["truncate", "折り返さない。あふれた部分は「…」で省略される"],
                [
                    "text-ellipsis",
                    "折り返す。折り返してもあふれる部分は「…」で省略される（overflow-hiddenと組み合わせて使う）",
                ],
                [
                    "text-clip",
                    "折り返す。折り返してもあふれる部分は切り取られる（overflow-hiddenと組み合わせて使う）",
                ],
            ],
        },
    ],
    [
        TypographyEnum.textWrap,
        {
            entry: "テキストの折り返し",
            description: "テキストを折り返す動作を指定する",
            details: [
                ["wrap", "バランス調整せずに折り返す"],
                ["nowrap", "折り返さない"],
                ["balance", "各行にテキストを均等に配分する"],
                ["pretty", "最終行に単語がひとつだけとならないように折り返す"],
            ],
        },
    ],
    [
        TypographyEnum.textIndent,
        {
            entry: "テキストのインデント",
            description: "テキストの先頭に挿入する空白の長さを指定する",
            details: [
                ["（数値）", "任意の長さを指定"],
                ["px", "1pxで指定"],
            ],
        },
    ],
    [
        TypographyEnum.verticalAlign,
        {
            entry: "垂直方向の整列",
            description: "テキストの垂直方向の揃えを指定する",
            details: [
                ["baseline", "親要素のベースラインに揃える"],
                ["top", "行の上端に揃える"],
                [
                    "middle",
                    "親要素のベースラインに、小文字のxの高さを足した位置に揃える",
                ],
                ["bottom", "行の下端に揃える"],
                ["text-top", "親要素のテキストの上端に揃える"],
                ["text-bottom", "親要素のテキストの下端に揃える"],
                ["sub", "親要素の下付き文字の位置に揃える"],
                ["super", "親要素の上付き文字の位置に揃える"],
            ],
        },
    ],
    [
        TypographyEnum.whiteSpace,
        {
            entry: "ホワイトスペース",
            description:
                "ホワイトスペース（タブ、改行、スペースなど）の扱い方を指定する",
            details: [
                [
                    "normal",
                    "連続するホワイトスペースをひとつのスペースにまとめる。折り返す",
                ],
                [
                    "nowrap",
                    "連続するホワイトスペースをひとつのスペースにまとめる。折り返さない",
                ],
                ["pre", "連続するホワイトスペースをそのまま残す。折り返さない"],
                [
                    "pre-line",
                    "改行以外のホワイトスペースをひとつのスペースにまとめる。折り返す",
                ],
                [
                    "pre-wrap",
                    "連続するホワイトスペースをそのまま残す。折り返す",
                ],
                ["break-spaces", "pre-wrapに近しいが、行末での動作が異なる"],
            ],
        },
    ],
    [
        TypographyEnum.wordBreak,
        {
            entry: "単語の区切り",
            description: "単語の折り返す動作を指定する",
            details: [
                ["normal", "単語の途中で折り返さない"],
                ["all", "単語を考慮せずに折り返す"],
                [
                    "keep",
                    "CJK（中国語、日本語、韓国語）において、文章の中では折り返さずに記号などの箇所で折り返す",
                ],
            ],
        },
    ],
    [
        TypographyEnum.overflowWrap,
        {
            entry: "オーバーフローの折り返し",
            description:
                "単語が要素からはみ出す場合に、単語の折り返す動作を指定する",
            details: [
                ["break-word", "必要に応じて単語の途中で折り返す"],
                [
                    "anywhere",
                    "break-wordと同じだが、要素の幅としてw-minが指定されている場合に動作が異なる",
                ],
                ["normal", "折り返さない"],
            ],
        },
    ],
    [
        TypographyEnum.hyphens,
        {
            entry: "ハイフン",
            description: "「&shy;」（ソフトハイフン）の扱い方を指定する",
            details: [
                [
                    "none",
                    "ハイフネーション（単語内にハイフンを挿入して改行すること）をしない",
                ],
                ["manual", "「&shy;」を目印にハイフネーションする"],
                ["auto", "単語を判定して自動的にハイフネーションする"],
            ],
        },
    ],
    [
        TypographyEnum.content,
        {
            entry: "コンテンツ",
            description: "before、またはafter修飾子を用いた疑似要素を指定する",
            details: [
                [
                    `before:content-["✅"]`,
                    "要素の前側に絵文字の疑似要素を挿入する例",
                ],
                [
                    `after:content-["✅"]`,
                    "要素の後ろ側に絵文字の疑似要素を挿入する例",
                ],
                ["before:content-none", "要素の前側に疑似要素を使用しない"],
                ["after:content-none", "要素の後ろ側に疑似要素を使用しない"],
            ],
        },
    ],
]);
