import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const bordersJA = new Map<string, Translation>([
    [
        CategoryEnum.Borders,
        {
            entry: "境界",
            description: "",
            detail: null,
        },
    ],
    [
        "border-radius",
        {
            entry: "境界の半径",
            description: "角の丸みを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["（xs–4xl）", "プリセット値を使用"],
                        ["none", "角丸なし"],
                        ["full", "円、またはカプセル型"],
                        ["s-*", "テキストの開始側を丸める"],
                        ["e-*", "テキストの終端側を丸める"],
                        ["t-*", "上側を丸める"],
                        ["r-*", "右側を丸める"],
                        ["b-*", "下側を丸める"],
                        ["l-*", "左側を丸める"],
                        ["ss-*", "左上を丸める（左横書きの場合）"],
                        ["se-*", "右上を丸める（左横書きの場合）"],
                        ["ee-*", "右下を丸める（左横書きの場合）"],
                        ["es-*", "右下を丸める（左横書きの場合）"],
                        ["tl-*", "左上を丸める"],
                        ["tr-*", "右上を丸める"],
                        ["br-*", "右下を丸める"],
                        ["bl-*", "左下を丸める"],
                    ]}
                />
            ),
        },
    ],
    [
        "border-width",
        {
            entry: "境界の太さ",
            description: "境界線の太さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["border", "1pxの太さの枠で囲む"],
                        ["border-（数値）", "任意の太さの枠で囲む"],
                        ["border-x", "左右の側面に1pxの太さの線を引く"],
                        [
                            "border-x-（数値）",
                            "左右の側面に任意の太さの線を引く",
                        ],
                        ["border-y", "上下の側面に1pxの太さの線を引く"],
                        [
                            "border-y-（数値）",
                            "上下の側面に任意の太さの線を引く",
                        ],
                        ["border-s", "テキストの開始側に1pxの太さの線を引く"],
                        [
                            "border-s-（数値）",
                            "テキストの開始側に任意の太さの線を引く",
                        ],
                        ["border-e", "テキストの終端側に1pxの太さの線を引く"],
                        [
                            "border-e-（数値）",
                            "テキストの終端側に任意の太さの線を引く",
                        ],
                        ["border-t", "上側面に1pxの太さの線を引く"],
                        ["border-t-（数値）", "上側面に任意の太さの線を引く"],
                        ["border-r", "右側面に1pxの太さの線を引く"],
                        ["border-r-（数値）", "右側面に任意の太さの線を引く"],
                        ["border-b", "下側面に1pxの太さの線を引く"],
                        ["border-b-（数値）", "下側面に任意の太さの線を引く"],
                        ["border-l", "左側面に1pxの太さの線を引く"],
                        ["border-l-（数値）", "左側面に任意の太さの線を引く"],
                        [
                            "divide-x",
                            "要素が水平方向に並ぶ場合に、1pxの分割線を引く",
                        ],
                        [
                            "divide-x-（数値）",
                            "要素が水平方向に並ぶ場合に、任意の太さの分割線を引く",
                        ],
                        [
                            "divide-y",
                            "要素が垂直方向に並ぶ場合に、1pxの分割線を引く",
                        ],
                        [
                            "divide-y-（数値）",
                            "要素が垂直方向に並ぶ場合に、任意の太さの分割線を引く",
                        ],
                        [
                            "divide-x-reverse",
                            "要素が右から左へと並ぶ場合に、追加で指定する",
                        ],
                        [
                            "divide-y-reverse",
                            "要素が下から上へと並ぶ場合に、追加で指定する",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "border-color",
        {
            entry: "境界の色",
            description: "境界線の色を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "border-inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        [
                            "border-current",
                            "テキスト色",
                            <td className="w-10"></td>,
                        ],
                        [
                            "border-transparent",
                            "透明",
                            <td className="w-10"></td>,
                        ],
                        [
                            "border-black",
                            "黒",
                            <td className="w-10 border border-black"></td>,
                        ],
                        [
                            "border-white",
                            "白",
                            <td className="w-10 border border-white"></td>,
                        ],
                        [
                            "border-red-500",
                            "赤",
                            <td className="w-10 border border-red-500"></td>,
                        ],
                        [
                            "border-orange-500",
                            "オレンジ",
                            <td className="w-10 border border-orange-500"></td>,
                        ],
                        [
                            "border-amber-500",
                            "琥珀",
                            <td className="w-10 border border-amber-500"></td>,
                        ],
                        [
                            "border-yellow-500",
                            "黄色",
                            <td className="w-10 border border-yellow-500"></td>,
                        ],
                        [
                            "border-lime-500",
                            "ライム",
                            <td className="w-10 border border-lime-500"></td>,
                        ],
                        [
                            "border-green-500",
                            "緑",
                            <td className="w-10 border border-green-500"></td>,
                        ],
                        [
                            "border-emerald-500",
                            "エメラルド",
                            <td className="w-10 border border-emerald-500"></td>,
                        ],
                        [
                            "border-teal-500",
                            "コガモ",
                            <td className="w-10 border border-teal-500"></td>,
                        ],
                        [
                            "border-cyan-500",
                            "シアン",
                            <td className="w-10 border border-cyan-500"></td>,
                        ],
                        [
                            "border-sky-500",
                            "スカイ",
                            <td className="w-10 border border-sky-500"></td>,
                        ],
                        [
                            "border-blue-500",
                            "青",
                            <td className="w-10 border border-blue-500"></td>,
                        ],
                        [
                            "border-indigo-500",
                            "藍色",
                            <td className="w-10 border border-indigo-500"></td>,
                        ],
                        [
                            "border-violet-500",
                            "スミレ",
                            <td className="w-10 border border-violet-500"></td>,
                        ],
                        [
                            "border-purple-500",
                            "紫",
                            <td className="w-10 border border-purple-500"></td>,
                        ],
                        [
                            "border-fuchsia-500",
                            "フクシア",
                            <td className="w-10 border border-fuchsia-500"></td>,
                        ],
                        [
                            "border-pink-500",
                            "ピンク",
                            <td className="w-10 border border-pink-500"></td>,
                        ],
                        [
                            "border-rose-500",
                            "バラ",
                            <td className="w-10 border border-rose-500"></td>,
                        ],
                        [
                            "border-slate-500",
                            "粘板岩",
                            <td className="w-10 border border-slate-500"></td>,
                        ],
                        [
                            "border-gray-500",
                            "グレー",
                            <td className="w-10 border border-gray-500"></td>,
                        ],
                        [
                            "border-zinc-500",
                            "亜鉛",
                            <td className="w-10 border border-zinc-500"></td>,
                        ],
                        [
                            "border-neutral-500",
                            "ニュートラル",
                            <td className="w-10 border border-neutral-500"></td>,
                        ],
                        [
                            "border-stone-500",
                            "石",
                            <td className="w-10 border border-stone-500"></td>,
                        ],
                        [
                            "border-red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10 border border-red-500/25"></td>,
                        ],
                        [
                            "border-x-（色）",
                            "左右の線の色",
                            <td className="w-10 border border-transparent border-x-black dark:border-x-white"></td>,
                        ],
                        [
                            "border-y-（色）",
                            "上下の線の色",
                            <td className="w-10 border border-transparent border-y-black dark:border-y-white"></td>,
                        ],
                        [
                            "border-s-（色）",
                            "テキストの開始側に引かれる色",
                            <td className="w-10 border border-transparent border-s-black dark:border-s-white"></td>,
                        ],
                        [
                            "border-e-（色）",
                            "テキストの終端側に引かれる色",
                            <td className="w-10 border border-transparent border-e-black dark:border-e-white"></td>,
                        ],
                        [
                            "border-t-（色）",
                            "上側面の線の色",
                            <td className="w-10 border border-transparent border-t-black dark:border-t-white"></td>,
                        ],
                        [
                            "border-r-（色）",
                            "右側面の線の色",
                            <td className="w-10 border border-transparent border-r-black dark:border-r-white"></td>,
                        ],
                        [
                            "border-b-（色）",
                            "下側面の線の色",
                            <td className="w-10 border border-transparent border-b-black dark:border-b-white"></td>,
                        ],
                        [
                            "border-l-（色）",
                            "左側面の線の色",
                            <td className="w-10 border border-transparent border-l-black dark:border-l-white"></td>,
                        ],
                        [
                            "divide-inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        [
                            "divide-current",
                            "テキスト色",
                            <td className="w-10"></td>,
                        ],
                        [
                            "divide-transparent",
                            "透明",
                            <td className="w-10"></td>,
                        ],
                        [
                            "divide-black",
                            "黒",
                            <td className="w-10 divide-x divide-black">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-white",
                            "白",
                            <td className="w-10 divide-x divide-white">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-red-500",
                            "赤",
                            <td className="w-10 divide-x divide-red-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-orange-500",
                            "オレンジ",
                            <td className="w-10 divide-x divide-orange-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-amber-500",
                            "琥珀",
                            <td className="w-10 divide-x divide-amber-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-yellow-500",
                            "黄色",
                            <td className="w-10 divide-x divide-yellow-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-lime-500",
                            "ライム",
                            <td className="w-10 divide-x divide-lime-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-green-500",
                            "緑",
                            <td className="w-10 divide-x divide-green-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-emerald-500",
                            "エメラルド",
                            <td className="w-10 divide-x divide-emerald-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-teal-500",
                            "コガモ",
                            <td className="w-10 divide-x divide-teal-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-cyan-500",
                            "シアン",
                            <td className="w-10 divide-x divide-cyan-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-sky-500",
                            "スカイ",
                            <td className="w-10 divide-x divide-sky-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-blue-500",
                            "青",
                            <td className="w-10 divide-x divide-blue-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-indigo-500",
                            "藍色",
                            <td className="w-10 divide-x divide-indigo-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-violet-500",
                            "スミレ",
                            <td className="w-10 divide-x divide-violet-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-purple-500",
                            "紫",
                            <td className="w-10 divide-x divide-purple-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-fuchsia-500",
                            "フクシア",
                            <td className="w-10 divide-x divide-fuchsia-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-pink-500",
                            "ピンク",
                            <td className="w-10 divide-x divide-pink-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-rose-500",
                            "バラ",
                            <td className="w-10 divide-x divide-rose-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-slate-500",
                            "粘板岩",
                            <td className="w-10 divide-x divide-slate-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-gray-500",
                            "グレー",
                            <td className="w-10 divide-x divide-gray-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-zinc-500",
                            "亜鉛",
                            <td className="w-10 divide-x divide-zinc-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-neutral-500",
                            "ニュートラル",
                            <td className="w-10 divide-x divide-neutral-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-stone-500",
                            "石",
                            <td className="w-10 divide-x divide-stone-500">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                        [
                            "divide-red-500/25",
                            "不透明度25%で指定する例",
                            <td className="w-10 divide-x divide-red-500/25">
                                <p className="inline">01</p>
                                <p className="inline">02</p>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "border-style",
        {
            entry: "境界のスタイル",
            description: "境界線のスタイルを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["border-solid", "一本のつながった境界線"],
                        ["border-dashed", "破線"],
                        ["border-dotted", "点線"],
                        ["border-double", "二重線"],
                        ["border-hidden", "境界線を表示しない（優先度・高）"],
                        ["border-none", "境界線を表示しない（優先度・低）"],
                        ["divide-solid", "一本のつながった分割線"],
                        ["divide-dashed", "破線"],
                        ["divide-dotted", "点線"],
                        ["divide-double", "二重線"],
                        ["divide-hidden", "分割線を表示しない（優先度・高）"],
                        ["divide-none", "分割線を表示しない（優先度・低）"],
                    ]}
                />
            ),
        },
    ],

    [
        "outline-width",
        {
            entry: "輪郭線の太さ",
            description:
                "輪郭線の太さを指定する。輪郭線はborderよりも外側に引かれる",
            detail: (
                <DetailTable
                    value={[
                        ["outline", "1pxの太さの輪郭線を描く"],
                        ["outline-（数値）", "任意の太さの輪郭線を描く"],
                    ]}
                />
            ),
        },
    ],
    [
        "outline-color",
        {
            entry: "輪郭線の色",
            description: "輪郭線の色を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        ["current", "テキスト色", <td className="w-10"></td>],
                        ["transparent", "透明", <td className="w-10"></td>],
                        [
                            "black",
                            "黒",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-black"></div>
                            </td>,
                        ],
                        [
                            "white",
                            "白",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-white"></div>
                            </td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-red-500"></div>
                            </td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-orange-500"></div>
                            </td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-amber-500"></div>
                            </td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-yellow-500"></div>
                            </td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-lime-500"></div>
                            </td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-green-500"></div>
                            </td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-emerald-500"></div>
                            </td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-teal-500"></div>
                            </td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-cyan-500"></div>
                            </td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-sky-500"></div>
                            </td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-blue-500"></div>
                            </td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-indigo-500"></div>
                            </td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-violet-500"></div>
                            </td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-purple-500"></div>
                            </td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-fuchsia-500"></div>
                            </td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-pink-500"></div>
                            </td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-rose-500"></div>
                            </td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-slate-500"></div>
                            </td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-gray-500"></div>
                            </td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-zinc-500"></div>
                            </td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-neutral-500"></div>
                            </td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-stone-500"></div>
                            </td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25%で指定する例",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-red-500/25"></div>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "outline-style",
        {
            entry: "輪郭線のスタイル",
            description: "輪郭線のスタイルを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["outline-solid", "一本のつながった輪郭線"],
                        ["outline-dashed", "破線"],
                        ["outline-dotted", "点線"],
                        ["outline-double", "二重線"],
                        ["outline-none", "輪郭線を表示しない"],
                        [
                            "outline-hidden",
                            "フォーカスされた要素に描かれるデフォルトの輪郭線を非表示にする",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "outline-offset",
        {
            entry: "輪郭線のオフセット",
            description: "指定した距離だけ輪郭線を外側に広げる",
            detail: null,
        },
    ],
]);

export default bordersJA;
