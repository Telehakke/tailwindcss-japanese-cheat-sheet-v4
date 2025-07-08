import { CategoryEnum } from "../../models/category";
import { Translation } from "../../models/types";
import DetailTable from "../../views/common/detailTable";

const spacingJA = new Map<string, Translation>([
    [
        CategoryEnum.Spacing,
        {
            entry: "空間",
            description: "",
            detail: null,
        },
    ],
    [
        "padding",
        {
            entry: "パディング",
            description: "要素の内側に指定した長さの余白を与える",
            detail: (
                <DetailTable
                    list={[
                        ["p-（数値）", "上下左右に余白を与える"],
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
        "margin",
        {
            entry: "マージン",
            description: "要素の外側に指定した長さの余白を与える",
            detail: (
                <DetailTable
                    list={[
                        ["m-（数値）", "上下左右に余白を与える"],
                        ["mx-（数値）", "水平方向に余白を与える"],
                        ["my-（数値）", "垂直方向に余白を与える"],
                        ["ms-（数値）", "テキストの開始側に余白を与える"],
                        ["me-（数値）", "テキストの終端側に余白を与える"],
                        ["mt-（数値）", "上側に余白を与える"],
                        ["mr-（数値）", "右側に余白を与える"],
                        ["mb-（数値）", "下側に余白を与える"],
                        ["ml-（数値）", "左側に余白を与える"],
                        [
                            "space-x-（数値）",
                            "要素が水平方向に並ぶ場合に、指定した長さの隙間を挟む",
                        ],
                        [
                            "space-y-（数値）",
                            "要素が垂直方向に並ぶ場合に、指定した長さの隙間を挟む",
                        ],
                        [
                            "space-x-reverse",
                            "要素が右から左へと並ぶ場合に、追加で指定する",
                        ],
                        [
                            "space-y-reverse",
                            "要素が下から上へと並ぶ場合に、追加で指定する",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default spacingJA;
