import { CategoryEnum } from "../../models/category";
import type { Translation } from "../../models/types";

const spacingJA = new Map<string, Translation>([
    [
        CategoryEnum.Spacing,
        {
            entry: "空間",
            description: "",
            details: [],
        },
    ],
    [
        "padding",
        {
            entry: "パディング",
            description: "要素の内側に指定した長さの余白を与える",
            details: [
                ["p-（数値）", "上下左右に任意の余白を与える"],
                ["p-px", "上下左右に1pxの余白を与える"],
                ["px-*", "水平方向に余白を与える"],
                ["py-*", "垂直方向に余白を与える"],
                ["ps-*", "日本語・横書き = pl、縦書き = pt"],
                ["pe-*", "日本語・横書き = pr、縦書き = pb"],
                ["pbs-*", "日本語・横書き = pt、縦書き = pr"],
                ["pbe-*", "日本語・横書き = pb、縦書き = pl"],
                ["pt-*", "上側に余白を与える"],
                ["pr-*", "右側に余白を与える"],
                ["pb-*", "下側に余白を与える"],
                ["pl-*", "左側に余白を与える"],
            ],
        },
    ],
    [
        "margin",
        {
            entry: "マージン",
            description: "要素の外側に指定した長さの余白を与える",
            details: [
                ["m-（数値）", "上下左右に任意の余白を与える"],
                ["m-auto", "上下左右に自動的に余白を与える"],
                ["m-px", "上下左右に1pxの余白を与える"],
                ["mx-*", "水平方向に余白を与える"],
                ["my-*", "垂直方向に余白を与える"],
                ["ms-*", "日本語・横書き = ml、縦書き = mt"],
                ["me-*", "日本語・横書き = mr、縦書き = mb"],
                ["mbs-*", "日本語・横書き = mt、縦書き = mr"],
                ["mbe-*", "日本語・横書き = mb、縦書き = ml"],
                ["mt-*", "上側に余白を与える"],
                ["mr-*", "右側に余白を与える"],
                ["mb-*", "下側に余白を与える"],
                ["ml-*", "左側に余白を与える"],
                [
                    "space-x-（数値）",
                    "要素が水平方向に並ぶ場合に、任意の隙間を挟む",
                ],
                ["space-x-px", "要素が水平方向に並ぶ場合に、1pxの隙間を挟む"],
                [
                    "space-y-（数値）",
                    "要素が垂直方向に並ぶ場合に、任意の隙間を挟む",
                ],
                ["space-y-px", "要素が垂直方向に並ぶ場合に、1pxの隙間を挟む"],
                [
                    "space-x-reverse",
                    "要素が右から左へと並ぶ場合に、追加で指定する",
                ],
                [
                    "space-y-reverse",
                    "要素が下から上へと並ぶ場合に、追加で指定する",
                ],
            ],
        },
    ],
]);

export default spacingJA;
