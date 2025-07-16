import { CategoryEnum } from "../../models/category";
import type { Translation } from "../../models/types";

const interactivityJA = new Map<string, Translation>([
    [
        CategoryEnum.Interactivity,
        {
            entry: "双方向性",
            description: "",
            details: [],
        },
    ],
    [
        "accent-color",
        {
            entry: "アクセントカラー",
            description: "ブラウザーが用意するデフォルトカラーを変更する",
            details: [
                [
                    "inherit",
                    "親要素からスタイルを引き継ぐ",
                    <td class="w-10 bg-transparent" />,
                ],
                ["current", "テキスト色", <td class="w-10 bg-transparent" />],
                ["transparent", "透明", <td class="w-10 bg-transparent" />],
                ["black", "黒", <td class="w-10 bg-black" />],
                ["white", "白", <td class="w-10 bg-white" />],
                ["red-500", "赤", <td class="w-10 bg-red-500" />],
                ["orange-500", "オレンジ", <td class="w-10 bg-orange-500" />],
                ["amber-500", "琥珀", <td class="w-10 bg-amber-500" />],
                ["yellow-500", "黄色", <td class="w-10 bg-yellow-500" />],
                ["lime-500", "ライム", <td class="w-10 bg-lime-500" />],
                ["green-500", "緑", <td class="w-10 bg-green-500" />],
                [
                    "emerald-500",
                    "エメラルド",
                    <td class="w-10 bg-emerald-500" />,
                ],
                ["teal-500", "コガモ", <td class="w-10 bg-teal-500" />],
                ["cyan-500", "シアン", <td class="w-10 bg-cyan-500" />],
                ["sky-500", "スカイ", <td class="w-10 bg-sky-500" />],
                ["blue-500", "青", <td class="w-10 bg-blue-500" />],
                ["indigo-500", "藍色", <td class="w-10 bg-indigo-500" />],
                ["violet-500", "スミレ", <td class="w-10 bg-violet-500" />],
                ["purple-500", "紫", <td class="w-10 bg-purple-500" />],
                ["fuchsia-500", "フクシア", <td class="w-10 bg-fuchsia-500" />],
                ["pink-500", "ピンク", <td class="w-10 bg-pink-500" />],
                ["rose-500", "バラ", <td class="w-10 bg-rose-500" />],
                ["slate-500", "粘板岩", <td class="w-10 bg-slate-500" />],
                ["gray-500", "グレー", <td class="w-10 bg-gray-500" />],
                ["zinc-500", "亜鉛", <td class="w-10 bg-zinc-500" />],
                [
                    "neutral-500",
                    "ニュートラル",
                    <td class="w-10 bg-neutral-500" />,
                ],
                ["stone-500", "石", <td class="w-10 bg-stone-500" />],
            ],
        },
    ],
    [
        "appearance",
        {
            entry: "外観",
            description:
                "ブラウザーが用意するデフォルトスタイルを使用するかどうかを指定する",
            details: [
                ["none", "使用しない"],
                ["auto", "使用する"],
            ],
        },
    ],

    [
        "caret-color",
        {
            entry: "キャレットの色",
            description: "テキストボックス入力時のカーソルの色を指定する",
            details: [
                [
                    "inherit",
                    "親要素からスタイルを引き継ぐ",
                    <td class="w-10 bg-transparent" />,
                ],
                ["current", "テキスト色", <td class="w-10 bg-transparent" />],
                ["transparent", "透明", <td class="w-10 bg-transparent" />],
                ["black", "黒", <td class="w-10 bg-black" />],
                ["white", "白", <td class="w-10 bg-white" />],
                ["red-500", "赤", <td class="w-10 bg-red-500" />],
                ["orange-500", "オレンジ", <td class="w-10 bg-orange-500" />],
                ["amber-500", "琥珀", <td class="w-10 bg-amber-500" />],
                ["yellow-500", "黄色", <td class="w-10 bg-yellow-500" />],
                ["lime-500", "ライム", <td class="w-10 bg-lime-500" />],
                ["green-500", "緑", <td class="w-10 bg-green-500" />],
                [
                    "emerald-500",
                    "エメラルド",
                    <td class="w-10 bg-emerald-500" />,
                ],
                ["teal-500", "コガモ", <td class="w-10 bg-teal-500" />],
                ["cyan-500", "シアン", <td class="w-10 bg-cyan-500" />],
                ["sky-500", "スカイ", <td class="w-10 bg-sky-500" />],
                ["blue-500", "青", <td class="w-10 bg-blue-500" />],
                ["indigo-500", "藍色", <td class="w-10 bg-indigo-500" />],
                ["violet-500", "スミレ", <td class="w-10 bg-violet-500" />],
                ["purple-500", "紫", <td class="w-10 bg-purple-500" />],
                ["fuchsia-500", "フクシア", <td class="w-10 bg-fuchsia-500" />],
                ["pink-500", "ピンク", <td class="w-10 bg-pink-500" />],
                ["rose-500", "バラ", <td class="w-10 bg-rose-500" />],
                ["slate-500", "粘板岩", <td class="w-10 bg-slate-500" />],
                ["gray-500", "グレー", <td class="w-10 bg-gray-500" />],
                ["zinc-500", "亜鉛", <td class="w-10 bg-zinc-500" />],
                [
                    "neutral-500",
                    "ニュートラル",
                    <td class="w-10 bg-neutral-500" />,
                ],
                ["stone-500", "石", <td class="w-10 bg-stone-500" />],
                [
                    "red-500/25",
                    "不透明度25％で指定",
                    <td class="w-10 bg-red-500/25" />,
                ],
            ],
        },
    ],
    [
        "color-scheme",
        {
            entry: "配色",
            description:
                "ブラウザがデフォルトで用意するライト配色／ダーク配色の使用を制御する",
            details: [
                ["normal", "ブラウザにまかせる"],
                ["dark", "デフォルトのダーク配色を使用する"],
                ["light", "デフォルトのライト配色を使用する"],
                ["light-dark", "OSのモードに連動する"],
                ["only-dark", "デフォルトのダーク配色を上書きさせない"],
                ["only-light", "デフォルトのライト配色を上書きさせない"],
            ],
        },
    ],
    [
        "cursor",
        {
            entry: "カーソル",
            description:
                "要素の上にマウスカーソルを重ねたときの、カーソル形状を指定する\n↓このエリアにカーソルを重ねることでプレビュー可能",
            details: [
                [
                    "auto",
                    "自動",
                    <td class="w-10 cursor-auto border border-black" />,
                ],
                [
                    "default",
                    "デフォルト",
                    <td class="w-10 cursor-default border border-black" />,
                ],
                [
                    "pointer",
                    "ポインター",
                    <td class="w-10 cursor-pointer border border-black" />,
                ],
                [
                    "wait",
                    "ビジー状態",
                    <td class="w-10 cursor-wait border border-black" />,
                ],
                [
                    "text",
                    "テキスト選択",
                    <td class="w-10 cursor-text border border-black" />,
                ],
                [
                    "move",
                    "移動",
                    <td class="w-10 cursor-move border border-black" />,
                ],
                [
                    "help",
                    "ヘルプ",
                    <td class="w-10 cursor-help border border-black" />,
                ],
                [
                    "not-allowed",
                    "禁止",
                    <td class="w-10 cursor-not-allowed border border-black" />,
                ],
                [
                    "none",
                    "非表示",
                    <td class="w-10 cursor-none border border-black" />,
                ],
                [
                    "context-menu",
                    "コンテキストメニュー",
                    <td class="w-10 cursor-context-menu border border-black" />,
                ],
                [
                    "progress",
                    "バックグラウンドでビジー状態",
                    <td class="w-10 cursor-progress border border-black" />,
                ],
                [
                    "cell",
                    "セルの選択",
                    <td class="w-10 cursor-cell border border-black" />,
                ],
                [
                    "crosshair",
                    "十字カーソル",
                    <td class="w-10 cursor-crosshair border border-black" />,
                ],
                [
                    "vertical-text",
                    "縦書きのテキスト選択",
                    <td class="w-10 cursor-vertical-text border border-black" />,
                ],
                [
                    "alias",
                    "ショートカットの作成",
                    <td class="w-10 cursor-alias border border-black" />,
                ],
                [
                    "copy",
                    "コピー",
                    <td class="w-10 cursor-copy border border-black" />,
                ],
                [
                    "no-drop",
                    "ドロップ不可",
                    <td class="w-10 cursor-no-drop border border-black" />,
                ],
                [
                    "grab",
                    "グラブ（ドラッグ）可能",
                    <td class="w-10 cursor-grab border border-black" />,
                ],
                [
                    "grabbing",
                    "グラブ中",
                    <td class="w-10 cursor-grabbing border border-black" />,
                ],
                [
                    "all-scroll",
                    "全方向にスクロール",
                    <td class="w-10 cursor-all-scroll border border-black" />,
                ],
                [
                    "col-resize",
                    "列の幅をリサイズ",
                    <td class="w-10 cursor-col-resize border border-black" />,
                ],
                [
                    "row-resize",
                    "行の高さをリサイズ",
                    <td class="w-10 cursor-row-resize border border-black" />,
                ],
                [
                    "n-resize",
                    "上方向にリサイズ",
                    <td class="w-10 cursor-n-resize border border-black" />,
                ],
                [
                    "e-resize",
                    "右方向にリサイズ",
                    <td class="w-10 cursor-e-resize border border-black" />,
                ],
                [
                    "s-resize",
                    "下方向にリサイズ",
                    <td class="w-10 cursor-s-resize border border-black" />,
                ],
                [
                    "w-resize",
                    "左方向にリサイズ",
                    <td class="w-10 cursor-w-resize border border-black" />,
                ],
                [
                    "ne-resize",
                    "右上方向にリサイズ",
                    <td class="w-10 cursor-ne-resize border border-black" />,
                ],
                [
                    "nw-resize",
                    "左上方向にリサイズ",
                    <td class="w-10 cursor-nw-resize border border-black" />,
                ],
                [
                    "se-resize",
                    "右下方向にリサイズ",
                    <td class="w-10 cursor-se-resize border border-black" />,
                ],
                [
                    "sw-resize",
                    "左下方向にリサイズ",
                    <td class="w-10 cursor-sw-resize border border-black" />,
                ],
                [
                    "ew-resize",
                    "水平方向にリサイズ",
                    <td class="w-10 cursor-ew-resize border border-black" />,
                ],
                [
                    "ns-resize",
                    "垂直方向にリサイズ",
                    <td class="w-10 cursor-ns-resize border border-black" />,
                ],
                [
                    "nesw-resize",
                    "右上と左下方向にリサイズ",
                    <td class="w-10 cursor-nesw-resize border border-black" />,
                ],
                [
                    "nwse-resize",
                    "左上と右下方向にリサイズ",
                    <td class="w-10 cursor-nwse-resize border border-black" />,
                ],
                [
                    "zoom-in",
                    "拡大",
                    <td class="w-10 cursor-zoom-in border border-black" />,
                ],
                [
                    "zoom-out",
                    "縮小",
                    <td class="w-10 cursor-zoom-out border border-black" />,
                ],
            ],
        },
    ],
    [
        "field-sizing",
        {
            entry: "フィールド寸法",
            description:
                "テキスト入力を受け付ける要素（<input>や<textarea>）のサイズを制御する",
            details: [
                ["fixed", "サイズを固定"],
                ["content", "コンテンツに合わせてサイズを可変"],
            ],
        },
    ],
    [
        "pointer-events",
        {
            entry: "ポインターイベント",
            description:
                "クリックなどのマウスイベントをキャッチするかどうかを指定する",
            details: [
                ["none", "キャッチせずに、背後の要素へと渡す"],
                ["auto", "キャッチする"],
            ],
        },
    ],
    [
        "resize",
        {
            entry: "リサイズ",
            description:
                "<textarea>要素や、overflow-scrollを付与した要素のサイズ変更を可能にするかどうかを指定する",
            details: [
                ["resize-none", "サイズ変更不可"],
                ["resize", "全方向に変更可能"],
                ["resize-y", "垂直方向にのみ変更可能"],
                ["resize-x", "水平方向にのみ変更可能"],
            ],
        },
    ],
    [
        "scroll-behavior",
        {
            entry: "スクロール動作",
            description: "<a>要素を用いたページ内リンクの動作を指定する",
            details: [
                ["auto", "瞬時にスクロールする"],
                ["smooth", "なめらかにスクロールする"],
            ],
        },
    ],
    [
        "scroll-margin",
        {
            entry: "スクロールマージン",
            description:
                "スクロールスナップで止まる位置を、余白を与えることで調整する\n余白を子要素側に設定したい場合に使用する",
            details: [
                ["m-（数値）", "全方向に余白を与える"],
                ["mx-（数値）", "水平方向に余白を与える"],
                ["my-（数値）", "垂直方向に余白を与える"],
                ["ms-（数値）", "テキストの開始側に余白を与える"],
                ["me-（数値）", "テキストの終端側に余白を与える"],
                ["mt-（数値）", "上側に余白を与える"],
                ["mr-（数値）", "右側に余白を与える"],
                ["mb-（数値）", "下側に余白を与える"],
                ["ml-（数値）", "左側に余白を与える"],
            ],
        },
    ],
    [
        "scroll-padding",
        {
            entry: "スクロールパディング",
            description:
                "スクロールスナップで止まる位置を、余白を与えることで調整する\n余白を親要素側に設定したい場合に使用する",
            details: [
                ["p-（数値）", "全方向に余白を与える"],
                ["px-（数値）", "水平方向に余白を与える"],
                ["py-（数値）", "垂直方向に余白を与える"],
                ["ps-（数値）", "テキストの開始側に余白を与える"],
                ["pe-（数値）", "テキストの終端側に余白を与える"],
                ["pt-（数値）", "上側に余白を与える"],
                ["pr-（数値）", "右側に余白を与える"],
                ["pb-（数値）", "下側に余白を与える"],
                ["pl-（数値）", "左側に余白を与える"],
            ],
        },
    ],
    [
        "scroll-snap-align",
        {
            entry: "スクロールスナップの整列",
            description:
                "親要素と自身との、どの位置を基準にスクロールの動きを止めるのかを指定する",
            details: [
                ["start", "上、または左側が互いに揃うように止める"],
                ["end", "下、または右側が互いに揃うように止める"],
                ["center", "中央が互いに揃うように止める"],
                ["align-none", "スクロールスナップしない"],
            ],
        },
    ],
    [
        "scroll-snap-stop",
        {
            entry: "スクロールスナップの停止",
            description:
                "すばやくスクロールした際の、ブレーキのかけ方を指定する",
            details: [
                ["normal", "要素をスキップ可能にする"],
                [
                    "always",
                    "次の要素で強制的に止める（親要素にsnap-mandatoryの付与が必要）",
                ],
            ],
        },
    ],
    [
        "scroll-snap-type",
        {
            entry: "スクロールスナップタイプ",
            description:
                "スクロールスナップを有効にする方向や、スナップの強制度合いを指定する",
            details: [
                ["none", "スクロールスナップしない"],
                ["x", "水平方向にスクロールスナップ"],
                ["y", "垂直方向にスクロールスナップ"],
                ["both", "上下左右にスクロールスナップ"],
                ["mandatory", "強制的に位置を揃える"],
                ["proximity", "強制の度合いは緩く、中間位置ではスナップしない"],
            ],
        },
    ],
    [
        "touch-action",
        {
            entry: "タッチアクション",
            description: "要素が受け入れるタッチ操作のジェスチャーを指定する",
            details: [
                ["auto", "全てのジェスチャーを有効"],
                ["none", "全てのジェスチャーを無効"],
                ["pan-x", "水平方向のスクロールのみを許可"],
                ["pan-left", "左方向へのスクロールのみを許可"],
                ["pan-right", "右方向へのスクロールのみを許可"],
                ["pan-y", "垂直方向のスクロールのみを許可"],
                ["pan-up", "上方向へのスクロールのみを許可"],
                ["pan-down", "下方向へのスクロールのみを許可"],
                ["pinch-zoom", "ピンチ操作でのズームのみを許可"],
                ["manipulation", "ダブルタップでのズームのみを許可"],
            ],
        },
    ],
    [
        "user-select",
        {
            entry: "ユーザー選択",
            description: "テキスト選択の動作を指定する",
            details: [
                ["none", "テキスト選択不可"],
                ["text", "テキスト選択を許可する"],
                ["all", "テキスト全体をワンクリックで選択状態にする"],
                ["auto", "自動"],
            ],
        },
    ],
    [
        "will-change",
        {
            entry: "未来の変更",
            description:
                "ページに何かしらの変化が発生する可能性を事前にブラウザーへ伝えることで、アニメーションなどの最適化を図る\n使用法を間違えると逆にパフォーマンス悪化につながるので、基本的にはブラウザーに任せたほうが良い",
            details: [
                ["auto", "ブラウザーに最適化を任せる"],
                ["scroll", "スクロール位置が変化する可能性を伝える"],
                ["contents", "コンテンツが変化する可能性を伝える"],
                ["transform", "変形操作が行われる可能性を伝える"],
            ],
        },
    ],
]);

export default interactivityJA;
