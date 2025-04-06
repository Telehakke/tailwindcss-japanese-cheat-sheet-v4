import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const flexboxAndGridJA = new Map<string, Translation>([
    [
        CategoryEnum.FlexboxAndGrid,
        {
            entry: "フレックスボックス＆グリッド",
            description: "",
            detail: null,
        },
    ],
    [
        "flex-basis",
        {
            entry: "フレックスベーシス",
            description:
                "親要素にflexが指定されている場合の、自身の初期サイズを指定する\n親要素にflex-rowが指定されている場合はwidth、flex-colが指定されている場合はheightとして動作する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "任意のサイズで指定"],
                        ["（分数）", "親要素に対する任意の割合で指定"],
                        ["full", "親要素と同じサイズで指定"],
                        ["auto", "自動"],
                        ["（3xs–7xl）", "プリセット値を使用"],
                    ]}
                />
            ),
        },
    ],
    [
        "flex-direction",
        {
            entry: "フレックスの方向",
            description: "flexの子要素の並べ方を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["row", "左から右へ並べる"],
                        ["row-reverse", "右から左へ並べる"],
                        ["col", "上から下へ並べる"],
                        ["col-reverse", "下から上へ並べる"],
                    ]}
                />
            ),
        },
    ],
    [
        "flex-wrap",
        {
            entry: "フレックスラップ",
            description:
                "flexで子要素を配置する際に、親要素からはみ出す場合の折り返し動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["nowrap", "折り返さない"],
                        ["wrap", "複数行に折り返す"],
                        [
                            "wrap-reverse",
                            "複数行に折り返す。折り返した行は上に積み上がる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "flex",
        {
            entry: "フレックス",
            description:
                "flex-basis、flex-grow、flex-shrinkを一度に設定し、親要素のサイズに合わせた自身の伸び縮みを指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "1",
                            "自身のwidth、またはheightのサイズを無視して伸び縮みする",
                        ],
                        [
                            "auto",
                            "自身のwidth、またはheightのサイズを考慮して伸び縮みする",
                        ],
                        [
                            "initial",
                            "縮みはするが、親要素の空きを埋めるために伸びはしない",
                        ],
                        ["none", "初期サイズのまま固定する"],
                    ]}
                />
            ),
        },
    ],
    [
        "flex-grow",
        {
            entry: "フレックスの伸び",
            description:
                "flexが指定されている親要素に空間があれば、自身を伸ばすかどうかを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["grow", "伸ばす"],
                        ["grow-0", "伸ばさない"],
                    ]}
                />
            ),
        },
    ],
    [
        "flex-shrink",
        {
            entry: "フレックスの縮み",
            description:
                "flexが指定されている親要素からはみ出す場合に、自身を縮めるかどうかを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["shrink", "縮める"],
                        ["shrink-0", "縮めない"],
                    ]}
                />
            ),
        },
    ],
    [
        "order",
        {
            entry: "オーダー",
            description:
                "flexやgridの子要素の並びに対する自身の順序を指定する。子要素は値の昇順に配置される",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "任意の順序を指定"],
                        ["first", "並びの先頭に配置"],
                        ["last", "並びの最後に配置"],
                        ["none", "0番を指定"],
                    ]}
                />
            ),
        },
    ],
    [
        "grid-template-columns",
        {
            entry: "グリッドテンプレートの列",
            description: "gridの列を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "任意の数だけ等間隔の列を作成する"],
                        ["none", "グリッドレイアウトを解除する"],
                        [
                            "subgrid",
                            "グリッドの中にグリッドを配置する場合に、親グリッドのレイアウトを子グリッドに引き継がせる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "grid-column",
        {
            entry: "グリッド列",
            description: "gridの複数のセルを水平方向に連結する",
            detail: (
                <DetailTable
                    value={[
                        ["span-（数値）", "指定した数だけセルを連結"],
                        ["start-（数値）", "連結の開始位置を指定"],
                        ["end-（数値）", "連結の終端位置を指定"],
                        ["(数値)/（数値）", "startとendをまとめて指定"],
                    ]}
                />
            ),
        },
    ],
    [
        "grid-template-rows",
        {
            entry: "グリッドテンプレートの行",
            description: "gridの行を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "任意の数だけ等間隔の行を作成する"],
                        ["none", "グリッドレイアウトを解除する"],
                        [
                            "subgrid",
                            "グリッドの中にグリッドを配置する場合に、親グリッドのレイアウトを子グリッドに引き継がせる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "grid-row",
        {
            entry: "グリッド行",
            description: "gridの複数のセルを垂直方向に連結する",
            detail: (
                <DetailTable
                    value={[
                        ["span-（数値）", "指定した数だけセルを連結"],
                        ["start-（数値）", "連結の開始位置を指定"],
                        ["end-（数値）", "連結の終端位置を指定"],
                        ["(数値)/（数値）", "startとendをまとめて指定"],
                    ]}
                />
            ),
        },
    ],
    [
        "grid-auto-flow",
        {
            entry: "グリッドオートフロー",
            description: "gridの子要素の並べ方を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["row", "右方向へ子要素を並べ、下に向かって折り返す"],
                        ["col", "下方向へ子要素を並べ、右に向かって折り返す"],
                        ["dense", "可能な限りセルを埋めるように子要素を並べる"],
                        ["row-dense", "row + denseの効果"],
                        ["col-dense", "col + denseの効果"],
                    ]}
                />
            ),
        },
    ],
    [
        "grid-auto-columns",
        {
            entry: "グリッドオート列",
            description:
                "セルの連結具合を元に、gridの列数を自動的に決定。その際の列の幅の計算方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        [
                            "min",
                            "子要素のコンテンツの最小幅を元に、列の幅を決定する（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "max",
                            "子要素のコンテンツの最大幅を元に、列の幅を決定する（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        ["fr", "等間隔の列を作る"],
                    ]}
                />
            ),
        },
    ],
    [
        "grid-auto-rows",
        {
            entry: "グリッドオート行",
            description:
                "セルの連結具合を元に、gridの行数を自動的に決定。その際の行の高さの計算方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        [
                            "min",
                            "子要素のコンテンツの最小高さを元に、行の高さを決定する（縦書きで有効）",
                        ],
                        [
                            "max",
                            "子要素のコンテンツの最大高さを元に、行の高さを決定する（縦書きで有効）",
                        ],
                        ["fr", "等間隔の行を作る"],
                    ]}
                />
            ),
        },
    ],
    [
        "gap",
        {
            entry: "隙間",
            description: "flexやgridの子要素同士の隙間の長さを指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "（数値）",
                            "水平、垂直の両方向に指定した長さの隙間を挟む",
                        ],
                        ["x-（数値）", "水平方向に指定した幅の隙間を挟む"],
                        ["y-（数値）", "垂直方向に指定した高さの隙間を挟む"],
                    ]}
                />
            ),
        },
    ],
    [
        "justify-content",
        {
            entry: "コンテンツの行揃え",
            description: "flexやgridの行揃えを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["start", "水平方向の開始側に子要素を寄せる"],
                        ["end", "水平方向の終端側に子要素を寄せる"],
                        [
                            "end-safe",
                            "endで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        ["center", "中央に子要素を集める"],
                        [
                            "center-safe",
                            "centerで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        [
                            "between",
                            "行の最初と最後の子要素を両端に配置し、残りの子要素を均等に配置する",
                        ],
                        [
                            "around",
                            "各子要素が持つ両脇の空間の幅が等しくなるように配置する",
                        ],
                        [
                            "evenly",
                            "各空間の幅が等しくなるように子要素を配置する",
                        ],
                        [
                            "stretch",
                            "隙間を埋めるように子要素を引き延ばして配置する（gridで有効）",
                        ],
                        ["baseline", "効果なし"],
                        ["normal", "flexではstart、gridではstretchの動作"],
                    ]}
                />
            ),
        },
    ],
    [
        "justify-items",
        {
            entry: "アイテムの行揃え",
            description:
                "flexやgridのレイアウトに対する子要素の配置方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["start", "セルの水平方向の開始側に揃える"],
                        ["end", "セルの水平方向の終端側に揃える"],
                        [
                            "end-safe",
                            "endで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        ["center", "セルの中央に揃える"],
                        [
                            "center-safe",
                            "centerで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        [
                            "stretch",
                            "セルの隙間を埋めるように子要素を引き延ばす",
                        ],
                        ["normal", "flexではstart、gridではstretchの動作"],
                    ]}
                />
            ),
        },
    ],
    [
        "justify-self",
        {
            entry: "自身の行揃え",
            description:
                "justify-itemsの効果を打ち消し、子要素自身に配置方法を決定させる",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "justify-itemsの効果を受け入れる"],
                        ["start", "セルの水平方向の開始側に揃える"],
                        ["center", "セルの中央に揃える"],
                        [
                            "center-safe",
                            "centerで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        ["end", "セルの水平方向の終端側に揃える"],
                        [
                            "end-safe",
                            "endで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        [
                            "stretch",
                            "セルの隙間を埋めるように子要素を引き延ばす",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "align-content",
        {
            entry: "コンテンツの整列",
            description: "flexやgridの垂直方向の揃えを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["normal", "flexではstart、gridではstretchの動作"],
                        ["center", "中央に子要素を集める"],
                        ["start", "垂直方向の開始側に子要素を寄せる"],
                        ["end", "垂直方向の終端側に子要素を寄せる"],
                        [
                            "between",
                            "列の最初と最後の子要素を両端に配置し、残りの子要素を均等に配置する",
                        ],
                        [
                            "around",
                            "各子要素が持つ上下の空間の高さが等しくなるように子要素を配置する",
                        ],
                        [
                            "evenly",
                            "各空間の高さが等しくなるように子要素を配置する",
                        ],
                        ["baseline", "startと同じ動作"],
                        [
                            "stretch",
                            "隙間を埋めるように子要素を引き延ばして配置する（gridで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "align-items",
        {
            entry: "アイテムの整列",
            description:
                "flexやgridのレイアウトに対する子要素の配置方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["start", "セルの垂直方向の開始側に揃える"],
                        ["end", "セルの垂直方向の終端側に揃える"],
                        [
                            "end-safe",
                            "endで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        ["center", "セルの中央に揃える"],
                        [
                            "center-safe",
                            "centerで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        [
                            "baseline",
                            "コンテンツのベースラインが横に揃うように配置する",
                        ],
                        [
                            "baseline-last",
                            "最終行のベースラインに揃えて配置する",
                        ],
                        [
                            "stretch",
                            "セルの隙間を埋めるように子要素を引き延ばす",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "align-self",
        {
            entry: "自身の整列",
            description:
                "align-itemsの効果を打ち消し、子要素自身に配置方法を決定させる",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "align-itemsの効果を受け入れる"],
                        ["start", "セルの垂直方向の開始側に揃える"],
                        ["end", "セルの垂直方向の終端側に揃える"],
                        [
                            "end-safe",
                            "endで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        ["center", "セルの中央に揃える"],
                        [
                            "center-safe",
                            "centerで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        [
                            "stretch",
                            "セルの隙間を埋めるように子要素を引き延ばす",
                        ],
                        ["baseline", "startと同じ動作"],
                        [
                            "baseline-last",
                            "最終行のベースラインに揃えて配置する",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "place-content",
        {
            entry: "コンテンツの場所",
            description: "justify-contentとalign-contentを一度に指定する",
            detail: (
                <DetailTable
                    value={[
                        ["center", "子要素を中央に引き寄せるように配置する"],
                        [
                            "center-safe",
                            "centerで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        [
                            "start",
                            "子要素を開始側の角に引き寄せるように配置する",
                        ],
                        ["end", "子要素を終端側の角に引き寄せるように配置する"],
                        [
                            "end-safe",
                            "endで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        ["between", "子要素を中心から離れるように配置する"],
                        [
                            "around",
                            "子要素が持つ周囲の空間が同じ広さになるように配置する",
                        ],
                        [
                            "evenly",
                            "子要素を縦に通るライン上の空間の高さと、横に通るライン上の空間の幅が、それぞれ同じ長さになるように配置する",
                        ],
                        ["baseline", "startと同じ動作"],
                        [
                            "stretch",
                            "隙間を埋めるように子要素を引き延ばして配置する（gridで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "place-items",
        {
            entry: "アイテムの場所",
            description: "justify-itemsとalign-itemsを一度に指定する",
            detail: (
                <DetailTable
                    value={[
                        ["start", "セルの開始側の角に配置する"],
                        ["end", "セルの終端側の角に配置する"],
                        [
                            "end-safe",
                            "endで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        ["center", "セルの中央に配置する"],
                        [
                            "center-safe",
                            "centerで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        [
                            "baseline",
                            "セルの水平方向の開始側に寄せつつ、コンテンツのベースラインが横に揃うように配置する",
                        ],
                        [
                            "stretch",
                            "セルの隙間を埋めるように子要素を引き延ばす（gridで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "place-self",
        {
            entry: "自身の場所",
            description: "justify-selfとalign-selfを一度に指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "place-itemsの効果を受け入れる"],
                        ["start", "セルの開始側の角に配置する"],
                        ["end", "セルの終端側の角に配置する"],
                        [
                            "end-safe",
                            "endで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        ["center", "セルの中央に配置する"],
                        [
                            "center-safe",
                            "centerで配置する。子要素があふれる場合、startとして振る舞う",
                        ],
                        [
                            "stretch",
                            "セルの隙間を埋めるように子要素を引き延ばす（gridで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default flexboxAndGridJA;
