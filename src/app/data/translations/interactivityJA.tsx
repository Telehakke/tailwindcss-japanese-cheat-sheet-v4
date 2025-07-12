import { CategoryEnum } from "../../models/category";
import { Translation } from "../../models/types";
import DetailTable from "../../views/common/detailTable";

const interactivityJA = new Map<string, Translation>([
    [
        CategoryEnum.Interactivity,
        {
            entry: "双方向性",
            description: "",
            detail: null,
        },
    ],
    [
        "accent-color",
        {
            entry: "アクセントカラー",
            description: "ブラウザーが用意するデフォルトカラーを変更する",
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
                    ]}
                />
            ),
        },
    ],
    [
        "appearance",
        {
            entry: "外観",
            description:
                "ブラウザーが用意するデフォルトスタイルを使用するかどうかを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["none", "使用しない"],
                        ["auto", "使用する"],
                    ]}
                />
            ),
        },
    ],

    [
        "caret-color",
        {
            entry: "キャレットの色",
            description: "テキストボックス入力時のカーソルの色を指定する",
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
                            "不透明度25％で指定",
                            <td className="w-10 bg-red-500/25"></td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "color-scheme",
        {
            entry: "配色",
            description:
                "ブラウザがデフォルトで用意するライト配色／ダーク配色の使用を制御する",
            detail: (
                <DetailTable
                    list={[
                        ["normal", "ブラウザにまかせる"],
                        ["dark", "デフォルトのダーク配色を使用する"],
                        ["light", "デフォルトのライト配色を使用する"],
                        ["light-dark", "OSのモードに連動する"],
                        ["only-dark", "デフォルトのダーク配色を上書きさせない"],
                        [
                            "only-light",
                            "デフォルトのライト配色を上書きさせない",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "cursor",
        {
            entry: "カーソル",
            description:
                "要素の上にマウスカーソルを重ねたときの、カーソル形状を指定する\n↓このエリアにカーソルを重ねることでプレビュー可能",
            detail: (
                <DetailTable
                    list={[
                        [
                            "auto",
                            "自動",
                            <td className="w-10 cursor-auto border border-black"></td>,
                        ],
                        [
                            "default",
                            "デフォルト",
                            <td className="w-10 cursor-default border border-black"></td>,
                        ],
                        [
                            "pointer",
                            "ポインター",
                            <td className="w-10 cursor-pointer border border-black"></td>,
                        ],
                        [
                            "wait",
                            "ビジー状態",
                            <td className="w-10 cursor-wait border border-black"></td>,
                        ],
                        [
                            "text",
                            "テキスト選択",
                            <td className="w-10 cursor-text border border-black"></td>,
                        ],
                        [
                            "move",
                            "移動",
                            <td className="w-10 cursor-move border border-black"></td>,
                        ],
                        [
                            "help",
                            "ヘルプ",
                            <td className="w-10 cursor-help border border-black"></td>,
                        ],
                        [
                            "not-allowed",
                            "禁止",
                            <td className="w-10 cursor-not-allowed border border-black"></td>,
                        ],
                        [
                            "none",
                            "非表示",
                            <td className="w-10 cursor-none border border-black"></td>,
                        ],
                        [
                            "context-menu",
                            "コンテキストメニュー",
                            <td className="w-10 cursor-context-menu border border-black"></td>,
                        ],
                        [
                            "progress",
                            "バックグラウンドでビジー状態",
                            <td className="w-10 cursor-progress border border-black"></td>,
                        ],
                        [
                            "cell",
                            "セルの選択",
                            <td className="w-10 cursor-cell border border-black"></td>,
                        ],
                        [
                            "crosshair",
                            "十字カーソル",
                            <td className="w-10 cursor-crosshair border border-black"></td>,
                        ],
                        [
                            "vertical-text",
                            "縦書きのテキスト選択",
                            <td className="w-10 cursor-vertical-text border border-black"></td>,
                        ],
                        [
                            "alias",
                            "ショートカットの作成",
                            <td className="w-10 cursor-alias border border-black"></td>,
                        ],
                        [
                            "copy",
                            "コピー",
                            <td className="w-10 cursor-copy border border-black"></td>,
                        ],
                        [
                            "no-drop",
                            "ドロップ不可",
                            <td className="w-10 cursor-no-drop border border-black"></td>,
                        ],
                        [
                            "grab",
                            "グラブ（ドラッグ）可能",
                            <td className="w-10 cursor-grab border border-black"></td>,
                        ],
                        [
                            "grabbing",
                            "グラブ中",
                            <td className="w-10 cursor-grabbing border border-black"></td>,
                        ],
                        [
                            "all-scroll",
                            "全方向にスクロール",
                            <td className="w-10 cursor-all-scroll border border-black"></td>,
                        ],
                        [
                            "col-resize",
                            "列の幅をリサイズ",
                            <td className="w-10 cursor-col-resize border border-black"></td>,
                        ],
                        [
                            "row-resize",
                            "行の高さをリサイズ",
                            <td className="w-10 cursor-row-resize border border-black"></td>,
                        ],
                        [
                            "n-resize",
                            "上方向にリサイズ",
                            <td className="w-10 cursor-n-resize border border-black"></td>,
                        ],
                        [
                            "e-resize",
                            "右方向にリサイズ",
                            <td className="w-10 cursor-e-resize border border-black"></td>,
                        ],
                        [
                            "s-resize",
                            "下方向にリサイズ",
                            <td className="w-10 cursor-s-resize border border-black"></td>,
                        ],
                        [
                            "w-resize",
                            "左方向にリサイズ",
                            <td className="w-10 cursor-w-resize border border-black"></td>,
                        ],
                        [
                            "ne-resize",
                            "右上方向にリサイズ",
                            <td className="w-10 cursor-ne-resize border border-black"></td>,
                        ],
                        [
                            "nw-resize",
                            "左上方向にリサイズ",
                            <td className="w-10 cursor-nw-resize border border-black"></td>,
                        ],
                        [
                            "se-resize",
                            "右下方向にリサイズ",
                            <td className="w-10 cursor-se-resize border border-black"></td>,
                        ],
                        [
                            "sw-resize",
                            "左下方向にリサイズ",
                            <td className="w-10 cursor-sw-resize border border-black"></td>,
                        ],
                        [
                            "ew-resize",
                            "水平方向にリサイズ",
                            <td className="w-10 cursor-ew-resize border border-black"></td>,
                        ],
                        [
                            "ns-resize",
                            "垂直方向にリサイズ",
                            <td className="w-10 cursor-ns-resize border border-black"></td>,
                        ],
                        [
                            "nesw-resize",
                            "右上と左下方向にリサイズ",
                            <td className="w-10 cursor-nesw-resize border border-black"></td>,
                        ],
                        [
                            "nwse-resize",
                            "左上と右下方向にリサイズ",
                            <td className="w-10 cursor-nwse-resize border border-black"></td>,
                        ],
                        [
                            "zoom-in",
                            "拡大",
                            <td className="w-10 cursor-zoom-in border border-black"></td>,
                        ],
                        [
                            "zoom-out",
                            "縮小",
                            <td className="w-10 cursor-zoom-out border border-black"></td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "field-sizing",
        {
            entry: "フィールド寸法",
            description:
                "テキスト入力を受け付ける要素（<input>や<textarea>）のサイズを制御する",
            detail: (
                <DetailTable
                    list={[
                        ["fixed", "サイズを固定"],
                        ["content", "コンテンツに合わせてサイズを可変"],
                    ]}
                />
            ),
        },
    ],
    [
        "pointer-events",
        {
            entry: "ポインターイベント",
            description:
                "クリックなどのマウスイベントをキャッチするかどうかを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["none", "キャッチせずに、背後の要素へと渡す"],
                        ["auto", "キャッチする"],
                    ]}
                />
            ),
        },
    ],
    [
        "resize",
        {
            entry: "リサイズ",
            description:
                "<textarea>要素や、overflow-scrollを付与した要素のサイズ変更を可能にするかどうかを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["resize-none", "サイズ変更不可"],
                        ["resize", "全方向に変更可能"],
                        ["resize-y", "垂直方向にのみ変更可能"],
                        ["resize-x", "水平方向にのみ変更可能"],
                    ]}
                />
            ),
        },
    ],
    [
        "scroll-behavior",
        {
            entry: "スクロール動作",
            description: "<a>要素を用いたページ内リンクの動作を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["auto", "瞬時にスクロールする"],
                        ["smooth", "なめらかにスクロールする"],
                    ]}
                />
            ),
        },
    ],
    [
        "scroll-margin",
        {
            entry: "スクロールマージン",
            description:
                "スクロールスナップで止まる位置を、余白を与えることで調整する\n余白を子要素側に設定したい場合に使用する",
            detail: (
                <DetailTable
                    list={[
                        ["m-（数値）", "全方向に余白を与える"],
                        ["mx-（数値）", "水平方向に余白を与える"],
                        ["my-（数値）", "垂直方向に余白を与える"],
                        ["ms-（数値）", "テキストの開始側に余白を与える"],
                        ["me-（数値）", "テキストの終端側に余白を与える"],
                        ["mt-（数値）", "上側に余白を与える"],
                        ["mr-（数値）", "右側に余白を与える"],
                        ["mb-（数値）", "下側に余白を与える"],
                        ["ml-（数値）", "左側に余白を与える"],
                    ]}
                />
            ),
        },
    ],
    [
        "scroll-padding",
        {
            entry: "スクロールパディング",
            description:
                "スクロールスナップで止まる位置を、余白を与えることで調整する\n余白を親要素側に設定したい場合に使用する",
            detail: (
                <DetailTable
                    list={[
                        ["p-（数値）", "全方向に余白を与える"],
                        ["px-（数値）", "水平方向に余白を与える"],
                        ["py-（数値）", "垂直方向に余白を与える"],
                        ["ps-（数値）", "テキストの開始側に余白を与える"],
                        ["pe-（数値）", "テキストの終端側に余白を与える"],
                        ["pt-（数値）", "上側に余白を与える"],
                        ["pr-（数値）", "右側に余白を与える"],
                        ["pb-（数値）", "下側に余白を与える"],
                        ["pl-（数値）", "左側に余白を与える"],
                    ]}
                />
            ),
        },
    ],
    [
        "scroll-snap-align",
        {
            entry: "スクロールスナップの整列",
            description:
                "親要素と自身との、どの位置を基準にスクロールの動きを止めるのかを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["start", "上、または左側が互いに揃うように止める"],
                        ["end", "下、または右側が互いに揃うように止める"],
                        ["center", "中央が互いに揃うように止める"],
                        ["align-none", "スクロールスナップしない"],
                    ]}
                />
            ),
        },
    ],
    [
        "scroll-snap-stop",
        {
            entry: "スクロールスナップの停止",
            description:
                "すばやくスクロールした際の、ブレーキのかけ方を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["normal", "要素をスキップ可能にする"],
                        [
                            "always",
                            "次の要素で強制的に止める（親要素にsnap-mandatoryの付与が必要）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "scroll-snap-type",
        {
            entry: "スクロールスナップタイプ",
            description:
                "スクロールスナップを有効にする方向や、スナップの強制度合いを指定する",
            detail: (
                <DetailTable
                    list={[
                        ["none", "スクロールスナップしない"],
                        ["x", "水平方向にスクロールスナップ"],
                        ["y", "垂直方向にスクロールスナップ"],
                        ["both", "上下左右にスクロールスナップ"],
                        ["mandatory", "強制的に位置を揃える"],
                        [
                            "proximity",
                            "強制の度合いは緩く、中間位置ではスナップしない",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "touch-action",
        {
            entry: "タッチアクション",
            description: "要素が受け入れるタッチ操作のジェスチャーを指定する",
            detail: (
                <DetailTable
                    list={[
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
                    ]}
                />
            ),
        },
    ],
    [
        "user-select",
        {
            entry: "ユーザー選択",
            description: "テキスト選択の動作を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["none", "テキスト選択不可"],
                        ["text", "テキスト選択を許可する"],
                        ["all", "テキスト全体をワンクリックで選択状態にする"],
                        ["auto", "自動"],
                    ]}
                />
            ),
        },
    ],
    [
        "will-change",
        {
            entry: "未来の変更",
            description:
                "ページに何かしらの変化が発生する可能性を事前にブラウザーへ伝えることで、アニメーションなどの最適化を図る\n使用法を間違えると逆にパフォーマンス悪化につながるので、基本的にはブラウザーに任せたほうが良い",
            detail: (
                <DetailTable
                    list={[
                        ["auto", "ブラウザーに最適化を任せる"],
                        ["scroll", "スクロール位置が変化する可能性を伝える"],
                        ["contents", "コンテンツが変化する可能性を伝える"],
                        ["transform", "変形操作が行われる可能性を伝える"],
                    ]}
                />
            ),
        },
    ],
]);

export default interactivityJA;
