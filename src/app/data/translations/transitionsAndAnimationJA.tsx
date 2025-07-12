import { CategoryEnum } from "../../models/category";
import { Translation } from "../../models/types";
import DetailTable from "../../views/common/detailTable";

const transitionsAndAnimationJA = new Map<string, Translation>([
    [
        CategoryEnum.TransitionsAndAnimation,
        {
            entry: "遷移＆アニメーション",
            description: "",
            detail: null,
        },
    ],
    [
        "transition-property",
        {
            entry: "遷移プロパティー",
            description:
                "値が変化する際にアニメーションさせたいプロパティーを指定する",
            detail: (
                <DetailTable
                    list={[
                        [
                            "transition",
                            "いくつかのプロパティーを組み合わせた、おすすめの設定",
                        ],
                        ["transition-all", "すべてのプロパティーを対象にする"],
                        ["transition-colors", "色の変化のみを対象にする"],
                        [
                            "transition-opacity",
                            "不透明度の変化のみを対象にする",
                        ],
                        ["transition-shadow", "影の変化のみを対象にする"],
                        ["transition-transform", "変形の変化のみを対象にする"],
                        ["transition-none", "瞬時に遷移する"],
                    ]}
                />
            ),
        },
    ],
    [
        "transition-behavior",
        {
            entry: "遷移の振る舞い",
            description:
                "従来、transition-durationの効果を受け付けなかった離散プロパティ（displayやvisibilityなど）に対し、効果を受け付けさせる新しいCSSプロパティ",
            detail: (
                <DetailTable
                    list={[
                        ["normal", "瞬時に遷移する"],
                        [
                            "discrete",
                            "transition-durationの期間待機してから遷移する",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "transition-duration",
        {
            entry: "遷移の期間",
            description: "遷移が完了するまでの時間を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["（数値）", "任意の時間（ミリ秒）を指定"],
                        ["initial", "初期値（150ms）を使用"],
                    ]}
                />
            ),
        },
    ],
    [
        "transition-timing-function",
        {
            entry: "遷移タイミング関数",
            description: "値が変化する速度を指定する",
            detail: (
                <DetailTable
                    list={[
                        ["linear", "一定の速度"],
                        ["in", "徐々に加速"],
                        ["out", "徐々に減速"],
                        ["in-out", "前半は徐々に加速し、後半は徐々に減速"],
                        ["initial", "初期値（in-out）を使用"],
                    ]}
                />
            ),
        },
    ],
    [
        "transition-delay",
        {
            entry: "遷移の遅延",
            description:
                "値が変化してから実際に遷移が開始されるまでの時間（ミリ秒）を指定する",
            detail: null,
        },
    ],
    [
        "animation",
        {
            entry: "アニメーション",
            description: "要素に動きを与える",
            detail: (
                <DetailTable
                    list={[
                        [
                            "spin",
                            "時計回りに回転",
                            <td className="w-10">
                                <p className="animate-spin text-center">Aa</p>
                            </td>,
                        ],
                        [
                            "ping",
                            "波紋のように広がるアニメーション",
                            <td className="w-10">
                                <p className="animate-ping text-center">Aa</p>
                            </td>,
                        ],
                        [
                            "pulse",
                            "フェードイン／アウトを繰り返す",
                            <td className="w-10">
                                <p className="animate-pulse text-center">Aa</p>
                            </td>,
                        ],
                        [
                            "bounce",
                            "上下に弾む",
                            <td className="w-10">
                                <p className="animate-bounce text-center">Aa</p>
                            </td>,
                        ],
                        [
                            "none",
                            "アニメーションしない",
                            <td className="w-10">
                                <p className="animate-none text-center">Aa</p>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default transitionsAndAnimationJA;
