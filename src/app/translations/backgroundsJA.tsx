import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const backgroundsJA = new Map<string, Translation>([
    [
        CategoryEnum.Backgrounds,
        {
            entry: "背景",
            description: "",
            detail: null,
        },
    ],
    [
        "background-attachment",
        {
            entry: "背景の取り付け",
            description:
                "スクロールした際の、Background Imageに指定した背景画像の動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "fixed",
                            "ディスプレイに貼り付けたように背景画像を固定する",
                        ],
                        [
                            "local",
                            "ページのスクロールに背景画像を連動する。背景画像を指定した要素がスクロール可能な場合、その要素のスクロールにも連動する",
                        ],
                        ["scroll", "ページのスクロールに背景画像を連動する"],
                    ]}
                />
            ),
        },
    ],
    [
        "background-clip",
        {
            entry: "背景の切り抜き",
            description:
                "Background Image、またはBackground Colorに指定した背景の切り取り方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["border", "境界領域から外側を切り取る"],
                        ["padding", "余白領域から外側を切り取る"],
                        ["content", "コンテンツ領域から外側を切り取る"],
                        [
                            "text",
                            "テキストの形に沿って背景を切り取る（text-transparentと組み合わせて使う）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "background-color",
        {
            entry: "背景色",
            description: "要素の背景色を指定する",
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
        "background-image",
        {
            entry: "背景画像",
            description: "背景画像やグラデーションを指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "bg-[url(***.jpg)]",
                            "特定の画像を背景画像に指定する例",
                            <td></td>,
                        ],
                        ["bg-none", "背景画像なし", <td></td>],
                        [
                            "bg-linear-to-t",
                            "上方向への線形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-linear-to-tr",
                            "右上方向への線形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-linear-to-r",
                            "右方向への線形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-linear-to-br",
                            "右下方向への線形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-linear-to-b",
                            "下方向への線形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-linear-to-bl",
                            "左下方向への線形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-linear-to-l",
                            "左方向への線形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-linear-to-tl",
                            "左上方向への線形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-linear-（数値）",
                            "任意の角度で回転した線形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-linear-to-r\nfrom-white\nto-blue-500",
                            "線形グラデーションの例",
                            <td className="w-10 bg-linear-to-r from-white to-blue-500"></td>,
                        ],
                        ["bg-radial", "円形グラデーション", <td></td>],
                        [
                            "bg-radial-\n[at_（数値）%_（数値）%]",
                            "任意の中心点を指定した円形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-radial\nfrom-white\nto-blue-500",
                            "円形グラデーションの例",
                            <td className="w-10 bg-radial from-white to-blue-500"></td>,
                        ],
                        ["bg-conic", "扇形グラデーション", <td></td>],
                        [
                            "bg-conic-（数値）",
                            "任意の角度で回転した扇形グラデーション",
                            <td></td>,
                        ],
                        [
                            "bg-conic\nfrom-white\nto-blue-500",
                            "扇形グラデーションの例",
                            <td className="w-10 bg-conic from-white to-blue-500"></td>,
                        ],
                        ["from-（色）", "開始色", <td></td>],
                        ["from-（数値）%", "開始位置", <td></td>],
                        ["via-（色）", "中間色", <td></td>],
                        ["via-（数値）%", "中間位置", <td></td>],
                        ["to-（色）", "終了色", <td></td>],
                        ["to-（数値）%", "終了位置", <td></td>],
                    ]}
                />
            ),
        },
    ],
    [
        "background-origin",
        {
            entry: "背景の原点",
            description:
                "Background Imageに指定した背景画像を貼り付ける原点を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["border", "境界領域の側面を原点に貼り付ける"],
                        ["padding", "余白領域の側面を原点に貼り付ける"],
                        ["content", "コンテンツ領域の側面を原点に貼り付ける"],
                    ]}
                />
            ),
        },
    ],
    [
        "background-position",
        {
            entry: "背景の位置",
            description:
                "Background Imageに指定した背景画像が要素からはみ出す場合に、メインに見せたい位置を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["bottom", "下"],
                        ["center", "中央"],
                        ["left", "左"],
                        ["left-bottom", "左下"],
                        ["left-top", "左上"],
                        ["right", "右"],
                        ["right-bottom", "右下"],
                        ["right-top", "右上"],
                        ["top", "上"],
                    ]}
                />
            ),
        },
    ],
    [
        "background-repeat",
        {
            entry: "背景の繰り返し",
            description: "Background Imageに指定した背景画像の並べ方を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["repeat", "全方向に繰り返す"],
                        ["repeat-x", "水平方向に繰り返す"],
                        ["repeat-y", "垂直方向に繰り返す"],
                        [
                            "repeat-space",
                            "要素からはみ出すことなく繰り返す。隙間が生じやすい",
                        ],
                        [
                            "repeat-round",
                            "要素からはみ出すことなく繰り返す。背景画像が歪みやすい",
                        ],
                        ["no-repeat", "繰り返さない"],
                    ]}
                />
            ),
        },
    ],
    [
        "background-size",
        {
            entry: "背景サイズ",
            description: "Background Imageに指定した背景画像のサイズを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "等倍で表示"],
                        ["cover", "要素全体を覆うように拡大縮小"],
                        ["contain", "背景画像全体が収まるように拡大縮小"],
                    ]}
                />
            ),
        },
    ],
]);

export default backgroundsJA;
