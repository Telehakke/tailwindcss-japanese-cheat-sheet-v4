import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const sizingJA = new Map<string, Translation>([
    [
        CategoryEnum.Sizing,
        {
            entry: "寸法",
            description: "",
            detail: null,
        },
    ],
    [
        "width",
        {
            entry: "幅",
            description: "要素の幅を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["w-（数値）", "任意の幅で指定"],
                        ["w-（分数）", "親要素に対する任意の割合で指定"],
                        ["w-（3xs–7xl）", "プリセット値を使用"],
                        ["w-auto", "自動"],
                        ["w-px", "1pxで指定"],
                        ["w-full", "親要素の幅で指定"],
                        ["w-screen", "ビューポートの幅で指定"],
                        ["w-dvw", "ダイナミックビューポートの幅で指定"],
                        ["w-dvh", "ダイナミックビューポートの高さで指定"],
                        ["w-lvw", "ラージビューポートの幅で指定"],
                        ["w-lvh", "ラージビューポートの高さで指定"],
                        ["w-svw", "スモールビューポートの幅で指定"],
                        ["w-svh", "スモールビューポートの高さで指定"],
                        [
                            "w-min",
                            "コンテンツの最小幅で指定（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "w-max",
                            "コンテンツの最大幅で指定（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        [
                            "w-fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                        ["size-（数値）", "widthとheightに同じ値を指定"],
                        ["size-（分数）", ""],
                        ["size-auto", ""],
                        ["size-px", ""],
                        ["size-full", ""],
                        ["size-dvw", ""],
                        ["size-dvh", ""],
                        ["size-lvw", ""],
                        ["size-lvh", ""],
                        ["size-svw", ""],
                        ["size-svh", ""],
                        ["size-min", ""],
                        ["size-max", ""],
                        ["size-fit", ""],
                    ]}
                />
            ),
        },
    ],
    [
        "min-width",
        {
            entry: "最小幅",
            description: "要素の最小幅を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "任意の幅で指定"],
                        ["（分数）", "親要素に対する任意の割合で指定"],
                        ["（3xs–7xl）", "プリセット値を使用"],
                        ["auto", "自動"],
                        ["px", "1pxで指定"],
                        ["full", "親要素の幅で指定"],
                        ["screen", "ビューポートの幅で指定"],
                        ["dvw", "ダイナミックビューポートの幅で指定"],
                        ["dvh", "ダイナミックビューポートの高さで指定"],
                        ["lvw", "ラージビューポートの幅で指定"],
                        ["lvh", "ラージビューポートの高さで指定"],
                        ["svw", "スモールビューポートの幅で指定"],
                        ["svh", "スモールビューポートの高さで指定"],
                        [
                            "min",
                            "コンテンツの最小幅で指定（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "max",
                            "コンテンツの最大幅で指定（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        [
                            "fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "max-width",
        {
            entry: "最大幅",
            description: "要素の最大幅を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["max-w-（数値）", "任意の幅で指定"],
                        ["max-w-（分数）", "親要素に対する任意の割合で指定"],
                        ["max-w-（3xs–7xl）", "プリセット値を使用"],
                        ["max-w-none", "最大幅を指定しない"],
                        ["max-w-px", "1pxで指定"],
                        ["max-w-full", "親要素の幅で指定"],
                        ["max-w-dvw", "ダイナミックビューポートの幅で指定"],
                        ["max-w-dvw", "ダイナミックビューポートの高さで指定"],
                        ["max-w-lvw", "ラージビューポートの幅で指定"],
                        ["max-w-lvh", "ラージビューポートの高さで指定"],
                        ["max-w-svw", "スモールビューポートの幅で指定"],
                        ["max-w-svh", "スモールビューポートの高さで指定"],
                        ["max-w-screen", "ビューポートの幅で指定"],
                        [
                            "max-w-min",
                            "コンテンツの最小幅で指定（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "max-w-max",
                            "コンテンツの最大幅で指定（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        [
                            "max-w-fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                        [
                            "container",
                            "ビューポートの幅に応じて要素の最大幅を640px未満、640px、768px、1024px、1280px、1536pxと段階的に変化させる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "height",
        {
            entry: "高さ",
            description: "要素の高さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["h-（数値）", "任意の高さで指定"],
                        ["h-（分数）", "親要素に対する任意の割合で指定"],
                        ["h-auto", "自動"],
                        ["h-px", "1pxで指定"],
                        ["h-full", "親要素の高さで指定"],
                        ["h-screen", "ビューポートの高さで指定"],
                        ["h-dvh", "ダイナミックビューポートの高さで指定"],
                        ["h-dvw", "ダイナミックビューポートの幅で指定"],
                        ["h-lvh", "ラージビューポートの高さで指定"],
                        ["h-lvw", "ラージビューポートの幅で指定"],
                        ["h-svh", "スモールビューポートの高さで指定"],
                        ["h-svw", "スモールビューポートの幅で指定"],
                        [
                            "h-min",
                            "コンテンツの最小幅で指定（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "h-max",
                            "コンテンツの最大幅で指定（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        [
                            "h-fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                        ["size-（数値）", "widthとheightに同じ値を指定"],
                        ["size-（分数）", ""],
                        ["size-auto", ""],
                        ["size-px", ""],
                        ["size-full", ""],
                        ["size-dvw", ""],
                        ["size-dvh", ""],
                        ["size-lvw", ""],
                        ["size-lvh", ""],
                        ["size-svw", ""],
                        ["size-svh", ""],
                        ["size-min", ""],
                        ["size-max", ""],
                        ["size-fit", ""],
                    ]}
                />
            ),
        },
    ],
    [
        "min-height",
        {
            entry: "最小高さ",
            description: "要素の最小高さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "任意の高さで指定"],
                        ["（分数）", "親要素に対する任意の割合で指定"],
                        ["px", "1pxで指定"],
                        ["full", "親要素の高さで指定"],
                        ["screen", "ビューポートの高さで指定"],
                        ["dvh", "ダイナミックビューポートの高さで指定"],
                        ["dvw", "ダイナミックビューポートの幅で指定"],
                        ["lvh", "ラージビューポートの高さで指定"],
                        ["lvw", "ラージビューポートの幅で指定"],
                        ["svw", "スモールビューポートの幅で指定"],
                        ["svh", "スモールビューポートの高さで指定"],
                        ["auto", "自動"],
                        [
                            "min",
                            "コンテンツの最小幅で指定（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "max",
                            "コンテンツの最大幅で指定（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        [
                            "fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "max-height",
        {
            entry: "最大高さ",
            description: "要素の最大高さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "任意の高さで指定"],
                        ["（分数）", "親要素に対する任意の割合で指定"],
                        ["none", "最大高さを指定しない"],
                        ["px", "1pxで指定"],
                        ["full", "親要素の高さで指定"],
                        ["screen", "ビューポートの高さで指定"],
                        ["dvh", "ダイナミックビューポートの高さで指定"],
                        ["dvw", "ダイナミックビューポートの幅で指定"],
                        ["lvh", "ラージビューポートの高さで指定"],
                        ["lvw", "ラージビューポートの幅で指定"],
                        ["svh", "スモールビューポートの高さで指定"],
                        ["svw", "スモールビューポートの幅で指定"],
                        [
                            "min",
                            "コンテンツの最小幅で指定（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "max",
                            "コンテンツの最大幅で指定（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        [
                            "fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default sizingJA;
