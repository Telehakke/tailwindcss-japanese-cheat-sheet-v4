import { CategoryEnum } from "../../models/category";
import { Translation } from "../../models/types";
import DetailTable from "../../views/common/detailTable";

const typographyJA = new Map<string, Translation>([
    [
        CategoryEnum.Typography,
        {
            entry: "タイポグラフィー",
            description: "",
            detail: null,
        },
    ],
    [
        "font-family",
        {
            entry: "フォントファミリー",
            description: "フォントファミリーを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["sans", "ゴシック体"],
                        ["serif", "明朝体"],
                        ["mono", "等幅フォント"],
                    ]}
                />
            ),
        },
    ],
    [
        "font-size",
        {
            entry: "フォントサイズ",
            description: "フォントサイズを指定する",
            detail: null,
        },
    ],
    [
        "font-smoothing",
        {
            entry: "フォントのなめらかさ",
            description: "アンチエイリアスの方式を指定する（macOSで有効）",
            detail: (
                <DetailTable
                    list={[
                        [
                            "antialiased",
                            "グレースケール方式（線がわずかに細く見える）",
                        ],
                        [
                            "subpixel-antialiased",
                            "サブピクセル方式（線がわずかに太く見える）。デフォルト",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "font-style",
        {
            entry: "フォントスタイル",
            description: "斜体で表示するかどうかを指定する",
            detail: null,
        },
    ],
    [
        "font-weight",
        {
            entry: "フォントウェイト",
            description: "フォントの太さを指定する",
            detail: null,
        },
    ],
    [
        "font-stretch",
        {
            entry: "フォントの引き延ばし",
            description:
                "フォントの幅を指定する。幅の変更に対応するフォントでのみ有効",
            detail: (
                <DetailTable
                    list={[
                        ["（...condensed–...expanded）", "プリセット値を使用"],
                        ["（数値）%", "任意のパーセンテージを指定"],
                    ]}
                />
            ),
        },
    ],
    [
        "font-variant-numeric",
        {
            entry: "数字の異形",
            description:
                "数字の表記形式を指定する。フォント側がそれぞれの形式に対応する場合のみ有効",
            detail: (
                <DetailTable
                    list={[
                        ["normal-nums", "標準"],
                        [
                            "ordinal",
                            "「1st」などの序数詞を数字の右肩に小さく表記する",
                        ],
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
                    ]}
                />
            ),
        },
    ],
    [
        "letter-spacing",
        {
            entry: "文字間隔",
            description: "文字間隔を指定する",
            detail: null,
        },
    ],
    [
        "line-clamp",
        {
            entry: "行の固定",
            description: "固定する行数を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["（数値）", "固定する行数"],
                        ["none", "固定しない"],
                    ]}
                />
            ),
        },
    ],
    [
        "line-height",
        {
            entry: "行の高さ",
            description: "行の高さを指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            "text-（xs–9lx）/（数値）",
                            "任意のフォントサイズと行の高さを指定する",
                        ],
                        ["leading-none", "フォントサイズと同じ高さで指定する"],
                        ["leading-（数値）", "任意の高さで指定する"],
                    ]}
                />
            ),
        },
    ],
    [
        "list-style-image",
        {
            entry: "リストスタイルの画像",
            description: "リスト項目のマーカーとして使用する画像を指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            "list-image-[url(***.png)]",
                            "特定の画像をマーカーとして使用する例",
                        ],
                        ["list-image-none", "マーカーを指定しない"],
                    ]}
                />
            ),
        },
    ],
    [
        "list-style-position",
        {
            entry: "リストスタイルの位置",
            description: "リスト項目のマーカー位置を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["inside", "マーカーを要素の内側に収める"],
                        ["outside", "マーカーを要素の外側に置く"],
                    ]}
                />
            ),
        },
    ],
    [
        "list-style-type",
        {
            entry: "リストスタイルの種類",
            description: "リスト項目のマーカー種類を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["disc", "箇条書き（「・」で表す）"],
                        ["decimal", "数値リスト（「1.」「2.」のように表す）"],
                        ["none", "マーカーなし"],
                    ]}
                />
            ),
        },
    ],
    [
        "text-align",
        {
            entry: "テキストの整列",
            description: "テキストの行揃えを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["left", "左揃え"],
                        ["center", "中央揃え"],
                        ["right", "右揃え"],
                        ["justify", "両端揃え"],
                        ["start", "テキストの開始側に揃える"],
                        ["end", "テキストの終端側に揃える"],
                    ]}
                />
            ),
        },
    ],
    [
        "color",
        {
            entry: "色",
            description: "テキストの色を指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10 bg-transparent"></td>,
                        ],
                        [
                            "current",
                            "テキスト色",
                            <td className="w-10 bg-transparent"></td>,
                        ],
                        [
                            "transparent",
                            "透明",
                            <td className="w-10 bg-transparent"></td>,
                        ],
                        [
                            "black",
                            "黒",
                            <td className="w-10 text-black">
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "white",
                            "白",
                            <td className="w-10 text-white">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="w-10 text-red-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="w-10 text-orange-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="w-10 text-amber-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="w-10 text-yellow-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="w-10 text-lime-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="w-10 text-green-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="w-10 text-emerald-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="w-10 text-teal-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="w-10 text-cyan-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="w-10 text-sky-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="w-10 text-blue-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="w-10 text-indigo-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="w-10 text-violet-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="w-10 text-purple-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="w-10 text-fuchsia-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="w-10 text-pink-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="w-10 text-rose-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="w-10 text-slate-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="w-10 text-gray-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="w-10 text-zinc-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="w-10 text-neutral-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="w-10 text-stone-500">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10 text-red-500/25">
                                {" "}
                                <p>Aa</p>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "text-decoration-line",
        {
            entry: "テキスト装飾線",
            description: "テキストの装飾を指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            "underline",
                            "下線を引く",
                            <td>
                                <p className="pr-1 underline">Aa</p>
                            </td>,
                        ],
                        [
                            "overline",
                            "上線を引く",
                            <td>
                                <p className="pr-1 overline">Aa</p>
                            </td>,
                        ],
                        [
                            "line-through",
                            "取り消し線を引く",
                            <td>
                                <p className="pr-1 line-through">Aa</p>
                            </td>,
                        ],
                        [
                            "no-underline",
                            "装飾しない",
                            <td>
                                <p className="pr-1 no-underline">Aa</p>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "text-decoration-color",
        {
            entry: "テキスト装飾の色",
            description: "テキスト装飾の色を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["inherit", "親要素からスタイルを引き継ぐ", <td></td>],
                        ["current", "テキスト色", <td></td>],
                        ["transparent", "透明", <td></td>],
                        [
                            "black",
                            "黒",
                            <td>
                                <p className="pr-1 underline decoration-black">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "white",
                            "白",
                            <td>
                                <p className="pr-1 underline decoration-white">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td>
                                <p className="pr-1 underline decoration-red-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td>
                                <p className="pr-1 underline decoration-orange-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td>
                                <p className="pr-1 underline decoration-amber-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td>
                                <p className="pr-1 underline decoration-yellow-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td>
                                <p className="pr-1 underline decoration-lime-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td>
                                <p className="pr-1 underline decoration-green-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td>
                                <p className="pr-1 underline decoration-emerald-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td>
                                <p className="pr-1 underline decoration-teal-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td>
                                <p className="pr-1 underline decoration-cyan-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td>
                                <p className="pr-1 underline decoration-sky-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td>
                                <p className="pr-1 underline decoration-blue-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td>
                                <p className="pr-1 underline decoration-indigo-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td>
                                <p className="pr-1 underline decoration-violet-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td>
                                <p className="pr-1 underline decoration-purple-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td>
                                <p className="pr-1 underline decoration-fuchsia-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td>
                                <p className="pr-1 underline decoration-pink-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td>
                                <p className="pr-1 underline decoration-rose-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td>
                                <p className="pr-1 underline decoration-slate-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td>
                                <p className="pr-1 underline decoration-gray-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td>
                                <p className="pr-1 underline decoration-zinc-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td>
                                <p className="pr-1 underline decoration-neutral-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td>
                                <p className="pr-1 underline decoration-stone-500">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td>
                                <p className="pr-1 underline decoration-red-500/25">
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
        "text-decoration-style",
        {
            entry: "テキスト装飾のスタイル",
            description: "テキスト装飾のスタイルを指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            "solid",
                            "一本のつながった線",
                            <td>
                                <p className="pr-1 text-center underline decoration-solid">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "double",
                            "二重線",
                            <td>
                                <p className="pr-1 text-center underline decoration-double">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "dotted",
                            "点線",
                            <td>
                                <p className="pr-1 text-center underline decoration-dotted">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "dashed",
                            "破線",
                            <td>
                                <p className="pr-1 text-center underline decoration-dashed">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "wavy",
                            "波線",
                            <td>
                                <p className="pr-1 text-center underline decoration-wavy">
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
        "text-decoration-thickness",
        {
            entry: "テキスト装飾の太さ",
            description: "テキスト装飾の太さを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["（数値）", "ピクセル値で指定"],
                        [
                            "from-font",
                            "推奨される太さがフォントに埋め込まれていれば、その値を使用",
                        ],
                        ["auto", "自動"],
                    ]}
                />
            ),
        },
    ],
    [
        "text-underline-offset",
        {
            entry: "テキストアンダーラインのオフセット",
            description: "指定した距離だけアンダーラインを下にずらす",
            detail: (
                <DetailTable
                    list={[
                        ["（数値）", "ピクセル値で指定"],
                        ["auto", "自動"],
                    ]}
                />
            ),
        },
    ],
    [
        "text-transform",
        {
            entry: "テキストの変換",
            description: "アルファベットを変換するルールを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["uppercase", "大文字に変換"],
                        ["lowercase", "小文字に変換"],
                        [
                            "capitalize",
                            "小文字に変換するが、単語の先頭のみ大文字にする",
                        ],
                        ["normal-case", "変換しない"],
                    ]}
                />
            ),
        },
    ],
    [
        "text-overflow",
        {
            entry: "テキストのオーバーフロー",
            description: "テキストが要素からはみ出す場合の動作を指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            "truncate",
                            "折り返さない。あふれた部分は「…」で省略される",
                        ],
                        [
                            "text-ellipsis",
                            "折り返す。折り返してもあふれる部分は「…」で省略される（overflow-hiddenと組み合わせて使う）",
                        ],
                        [
                            "text-clip",
                            "折り返す。折り返してもあふれる部分は切り取られる（overflow-hiddenと組み合わせて使う）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "text-wrap",
        {
            entry: "テキストの折り返し",
            description: "テキストを折り返す動作を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["wrap", "バランス調整せずに折り返す"],
                        ["nowrap", "折り返さない"],
                        ["balance", "各行にテキストを均等に配分する"],
                        [
                            "pretty",
                            "最終行に単語がひとつだけとならないように折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "text-indent",
        {
            entry: "テキストのインデント",
            description: "テキストの先頭に挿入する空白の長さを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["（数値）", "任意の長さを指定"],
                        ["px", "1pxで指定"],
                    ]}
                />
            ),
        },
    ],
    [
        "vertical-align",
        {
            entry: "垂直方向の整列",
            description: "垂直方向にテキストを揃える際の基準を指定する",
            detail: (
                <DetailTable
                    list={[
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
                    ]}
                />
            ),
        },
    ],
    [
        "white-space",
        {
            entry: "ホワイトスペース",
            description:
                "ホワイトスペース（タブ、改行、スペースなど）の扱い方を指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            "normal",
                            "連続するホワイトスペースをひとつのスペースにまとめる。折り返す",
                        ],
                        [
                            "nowrap",
                            "連続するホワイトスペースをひとつのスペースにまとめる。折り返さない",
                        ],
                        [
                            "pre",
                            "連続するホワイトスペースをそのまま残す。折り返さない",
                        ],
                        [
                            "pre-line",
                            "改行以外のホワイトスペースをひとつのスペースにまとめる。折り返す",
                        ],
                        [
                            "pre-wrap",
                            "連続するホワイトスペースをそのまま残す。折り返す",
                        ],
                        [
                            "break-spaces",
                            "pre-wrapに近しいが、行末での動作が異なる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "word-break",
        {
            entry: "単語の区切り",
            description: "単語の折り返す動作を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["normal", "単語の途中で折り返さない"],
                        ["all", "単語を考慮せずに折り返す"],
                        [
                            "keep",
                            "CJK（中国語、日本語、韓国語）において、文章の中では折り返さずに記号などの箇所で折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "overflow-wrap",
        {
            entry: "オーバーフローの折り返し",
            description:
                "単語が要素からはみ出す場合に、単語の折り返す動作を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["break-word", "必要に応じて単語の途中で折り返す"],
                        [
                            "anywhere",
                            "break-wordと同じだが、要素の幅としてw-minが指定されている場合に動作が異なる",
                        ],
                        ["normal", "折り返さない"],
                    ]}
                />
            ),
        },
    ],
    [
        "hyphens",
        {
            entry: "ハイフン",
            description: "「&shy;」（ソフトハイフン）の扱い方を指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            "none",
                            "ハイフネーション（単語内にハイフンを挿入して改行すること）をしない",
                        ],
                        ["manual", "「&shy;」を目印にハイフネーションする"],
                        ["auto", "単語を判定して自動的にハイフネーションする"],
                    ]}
                />
            ),
        },
    ],
    [
        "content",
        {
            entry: "コンテンツ",
            description: "before、またはafter修飾子を用いた疑似要素を指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            `before:content-["✅"]`,
                            "要素の前側に絵文字の疑似要素を挿入する例",
                        ],
                        [
                            `after:content-["✅"]`,
                            "要素の後ろ側に絵文字の疑似要素を挿入する例",
                        ],
                        [
                            "before:content-none",
                            "要素の前側に疑似要素を使用しない",
                        ],
                        [
                            "after:content-none",
                            "要素の後ろ側に疑似要素を使用しない",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default typographyJA;
