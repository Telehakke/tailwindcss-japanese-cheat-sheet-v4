import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const transformsJA = new Map<string, Translation>([
    [
        CategoryEnum.Transforms,
        {
            entry: "変形",
            description: "",
            detail: null,
        },
    ],
    [
        "backface-visibility",
        {
            entry: "背面の可視性",
            description:
                "三次元で座標変換した際に、背面を透過するかどうかを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["hidden", "透過しない"],
                        ["visible", "透過する"],
                    ]}
                />
            ),
        },
    ],
    [
        "perspective",
        {
            entry: "遠近法",
            description: "三次元で座標変換した際の、パースの強弱を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["dramatic", "強"],
                        ["near", "↑"],
                        ["normal", "普通"],
                        ["midrange", "↓"],
                        ["distant", "弱"],
                        ["none", "なし"],
                    ]}
                />
            ),
        },
    ],
    [
        "perspective-origin",
        {
            entry: "遠近法の原点",
            description: "遠近法の消失点の位置を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["center", "中央"],
                        ["top", "上"],
                        ["top-right", "右上"],
                        ["right", "右"],
                        ["bottom-right", "右下"],
                        ["bottom", "下"],
                        ["bottom-left", "左下"],
                        ["left", "左"],
                        ["top-left", "左上"],
                    ]}
                />
            ),
        },
    ],
    [
        "rotate",
        {
            entry: "回転",
            description: "指定した角度で回転する",
            detail: (
                <DetailTable
                    value={[
                        ["rotate-none", "回転しない"],
                        ["rotate-（数値）", "時計回りで回転"],
                        ["rotate-x-（数値）", "x軸で回転"],
                        ["rotate-y-（数値）", "y軸で回転"],
                        ["rotate-z-（数値）", "z軸で回転"],
                    ]}
                />
            ),
        },
    ],
    [
        "scale",
        {
            entry: "拡大縮小",
            description: "指定したパーセンテージで拡大縮小する",
            detail: (
                <DetailTable
                    value={[
                        ["scale-none", "拡大縮小しない"],
                        ["scale-（数値）", "拡大縮小"],
                        ["scale-x-（数値）", "水平方向に拡大縮小"],
                        ["scale-y-（数値）", "垂直方向に拡大縮小"],
                        ["scale-z-（数値）", "奥行方向に拡大縮小"],
                        ["scale-3d", "全方向で等倍"],
                    ]}
                />
            ),
        },
    ],
    [
        "skew",
        {
            entry: "歪める",
            description: "斜め方向に歪める",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "斜め方向に引き延ばしたように傾斜する"],
                        ["x-（数値）", "水平方向に引き延ばしたように傾斜する"],
                        ["y-（数値）", "垂直方向に引き延ばしたように傾斜する"],
                    ]}
                />
            ),
        },
    ],
    [
        "transform",
        {
            entry: "変形",
            description: "変形の描画方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["none", "変形を解除"],
                        ["gpu", "GPUを使用して描画"],
                        ["cpu", "CPUを使用して描画"],
                    ]}
                />
            ),
        },
    ],
    [
        "transform-origin",
        {
            entry: "変形の原点",
            description: "変形の基準となる原点を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["center", "中央"],
                        ["top", "上"],
                        ["top-right", "右上"],
                        ["right", "右"],
                        ["bottom-right", "右下"],
                        ["bottom", "下"],
                        ["bottom-left", "左下"],
                        ["left", "左"],
                        ["top-left", "左上"],
                    ]}
                />
            ),
        },
    ],
    [
        "transform-style",
        {
            entry: "変形スタイル",
            description: "変形を立体的に描画するかどうかを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["3d", "三次元で描画"],
                        ["flat", "二次元で描画"],
                    ]}
                />
            ),
        },
    ],
    [
        "translate",
        {
            entry: "移動",
            description: "指定した距離だけ移動する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "斜め方向に任意の距離だけ移動"],
                        ["（分数）", "斜め方向に任意の割合だけ移動"],
                        ["full", "斜め方向に自身のサイズ分だけ移動"],
                        ["px", "斜め方向に1pxだけ移動"],
                        ["x-（数値）", "水平方向に任意の距離だけ移動"],
                        ["x-（分数）", "水平方向に任意の割合だけ移動"],
                        ["x-full", "水平方向に自身のサイズ分だけ移動"],
                        ["x-px", "水平方向に1pxだけ移動"],
                        ["y-（数値）", "垂直方向に任意の距離だけ移動"],
                        ["y-（分数）", "垂直方向に任意の割合だけ移動"],
                        ["y-full", "垂直方向に自身のサイズ分だけ移動"],
                        ["y-px", "垂直方向に1pxだけ移動"],
                        ["z-（数値）", "奥行方向に任意の距離だけ移動"],
                        ["z-px", "奥行方向に1pxだけ移動"],
                        ["none", "移動しない"],
                    ]}
                />
            ),
        },
    ],
]);

export default transformsJA;
