import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const layoutJA = new Map<string, Translation>([
    [
        CategoryEnum.Layout,
        {
            entry: "レイアウト",
            description: "",
            detail: null,
        },
    ],
    [
        "aspect-ratio",
        {
            entry: "アスペクト比",
            description: "要素のアスペクト比を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "（分数）",
                            "任意の比率で固定（4:3で固定する例: aspect-4/3）",
                        ],
                        ["square", "1:1で固定"],
                        ["video", "16:9で固定"],
                        ["auto", "自動"],
                    ]}
                />
            ),
        },
    ],
    [
        "columns",
        {
            entry: "列",
            description: "要素のコンテンツ領域を縦に分割する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "任意の分割数を指定"],
                        ["（3xs–7xl）", "プリセット値を使用"],
                        ["auto", "自動"],
                    ]}
                />
            ),
        },
    ],
    [
        "break-after",
        {
            entry: "後の区切り",
            description:
                "要素の後における、印刷時の改ページや段区切りの動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["avoid", "改ページや段区切りを禁止する"],
                        ["all", "強制的に改ページする"],
                        ["avoid-page", "改ページを禁止する"],
                        ["page", "改ページする"],
                        ["left", "次のページが左側に来るよう改ページする"],
                        ["right", "次のページが右側に来るよう改ページする"],
                        ["column", "段区切りする"],
                    ]}
                />
            ),
        },
    ],
    [
        "break-before",
        {
            entry: "前の区切り",
            description:
                "要素の前における、印刷時の改ページや段区切りの動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["avoid", "改ページや段区切りを禁止する"],
                        ["all", "強制的に改ページする"],
                        ["avoid-page", "改ページを禁止する"],
                        ["page", "改ページする"],
                        ["left", "次のページが左側に来るよう改ページする"],
                        ["right", "次のページが右側に来るよう改ページする"],
                        ["column", "段区切りする"],
                    ]}
                />
            ),
        },
    ],
    [
        "break-inside",
        {
            entry: "中の区切り",
            description:
                "要素の中における、印刷時の改ページや段区切りの動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["avoid", "改ページや段区切りを禁止する"],
                        ["avoid-page", "改ページを禁止する"],
                        ["avoid-column", "段区切りを禁止する"],
                    ]}
                />
            ),
        },
    ],
    [
        "box-decoration-break",
        {
            entry: "区切られたボックスの装飾",
            description:
                "要素が複数の行、段、ページに区切られる場合の装飾方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["clone", "それぞれの断片ごとに装飾する"],
                        [
                            "slice",
                            "断片化していない状態で装飾。それから行、段、ページに区切られる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "box-sizing",
        {
            entry: "ボックス寸法",
            description: "要素の幅と高さを求めるための領域を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["border", "境界や余白を含めて要素の寸法とする"],
                        ["content", "コンテンツ領域を要素の寸法とする"],
                    ]}
                />
            ),
        },
    ],
    [
        "display",
        {
            entry: "ディスプレイ",
            description: "要素の表示方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inline",
                            "前後に改行を生成しない。垂直方向の境界や余白を無視する",
                        ],
                        ["block", "前後に改行を生成し、要素を縦に並べる"],
                        ["inline-block", "前後に改行を生成しない"],
                        [
                            "flow-root",
                            "子要素がFloatsのクラス名を使用している場合に、その回り込みを解除する",
                        ],
                        [
                            "flex",
                            "Flexboxカテゴリーのクラス名と併用することで、複雑なレイアウトを実現する",
                        ],
                        ["inline-flex", "inline + flexの効果"],
                        ["grid", "子要素をタイル状に配置する"],
                        ["inline-grid", "inline + gridの効果"],
                        [
                            "contents",
                            "ボックスを生成せずに、コンテンツ領域だけを表示する",
                        ],
                        ["table", "<table>要素と同じく動作する"],
                        ["inline-table", "inline + tableの効果"],
                        ["table-caption", "<caption>要素と同じく動作する"],
                        ["table-cell", "<td>要素と同じく動作する"],
                        ["table-column", "<col>要素と同じく動作する"],
                        [
                            "table-column-group",
                            "<colgroup>要素と同じく動作する",
                        ],
                        ["table-footer-group", "<tfoot>要素と同じく動作する"],
                        ["table-header-group", "<thead>要素と同じく動作する"],
                        ["table-row-group", "<tbody>要素と同じく動作する"],
                        ["table-row", "<tr>要素と同じく動作する"],
                        ["list-item", "<li>要素と同じく動作する"],
                        ["hidden", "要素を非表示にする"],
                        [
                            "sr-only",
                            "視覚的には非表示だが、スクリーンリーダー（画面読み上げ機能）からは認識できる状態にする",
                        ],
                        ["not-sr-only", "視覚的にも認識できる状態にする"],
                    ]}
                />
            ),
        },
    ],
    [
        "float",
        {
            entry: "フロート",
            description:
                "要素を左右どちらかに配置し、その横に余白があれば続く要素を回り込ませる",
            detail: (
                <DetailTable
                    value={[
                        ["right", "右端に配置"],
                        ["left", "左端に配置"],
                        ["start", "テキストの開始側に配置"],
                        ["end", "テキストの終端側に配置"],
                        ["none", "フロートしない"],
                    ]}
                />
            ),
        },
    ],
    [
        "clear",
        {
            entry: "クリアー",
            description:
                "floatの効果を打ち消し、自身の要素が回り込もうとするのを防ぐ",
            detail: (
                <DetailTable
                    value={[
                        ["left", "左端にある要素のfloatを打ち消す"],
                        ["right", "右端にある要素のfloatを打ち消す"],
                        ["both", "左右どちらでもfloatを打ち消す"],
                        [
                            "start",
                            "テキストの開始側にある要素のfloatを打ち消す",
                        ],
                        ["end", "テキストの終端側にある要素のfloatを打ち消す"],
                        ["none", "floatを受け入れる"],
                    ]}
                />
            ),
        },
    ],
    [
        "isolation",
        {
            entry: "隔離",
            description:
                "子要素の存在を内に留め、外部の要素と相互に作用させない",
            detail: (
                <DetailTable
                    value={[
                        ["isolate", "子要素を隔離する"],
                        ["isolation-auto", "自動"],
                    ]}
                />
            ),
        },
    ],
    [
        "object-fit",
        {
            entry: "オブジェクトフィット",
            description: "コンテンツの表示方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "contain",
                            "コンテンツ全体が要素に収まるように拡大縮小する",
                        ],
                        ["cover", "要素全体を覆うように拡大縮小する"],
                        [
                            "fill",
                            "元のアスペクト比を無視して、要素全体を覆うように拡大縮小する",
                        ],
                        ["none", "等倍で表示する"],
                        [
                            "scale-down",
                            "等倍で表示する。ただし、要素からはみ出す場合は縮小する",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "object-position",
        {
            entry: "オブジェクト位置",
            description:
                "コンテンツが要素からはみ出す場合に、メインで見せたい位置を指定する",
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
        "overflow",
        {
            entry: "オーバーフロー",
            description: "コンテンツが要素からはみ出す場合の動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        [
                            "hidden",
                            "切り取る。ユーザーからのスクロール操作は受け付けないが、プログラムからは許可する",
                        ],
                        ["clip", "切り取る。全てのスクロール操作を禁止する"],
                        ["visible", "切り取らない"],
                        ["scroll", "スクロール可能にする"],
                        ["x-*", "水平方向のみを対象"],
                        ["y-*", "垂直方向のみを対象"],
                    ]}
                />
            ),
        },
    ],
    [
        "overscroll-behavior",
        {
            entry: "オーバースクロール動作",
            description: "スクロール領域の限界に達したときの動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "auto",
                            "バウンスする。限界に達した状態でさらにスクロールすると、親要素へ伝播する",
                        ],
                        [
                            "contain",
                            "バウンスする。スクロールを親要素へ伝播させない",
                        ],
                        [
                            "none",
                            "バウンスしない。スクロールを親要素へ伝播させない",
                        ],
                        ["x-*", "水平方向のみを対象"],
                        ["y-*", "垂直方向のみを対象"],
                    ]}
                />
            ),
        },
    ],
    [
        "position",
        {
            entry: "位置",
            description: "要素の配置方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "static",
                            "デフォルトの動作。オフセット操作（top、right、bottom、left、z-index）を受け付けない",
                        ],
                        [
                            "fixed",
                            "ブラウザの表示領域を基準に、オフセット操作を受け付ける",
                        ],
                        [
                            "absolute",
                            "relativeが指定された親要素を基準に、オフセット操作を受け付ける",
                        ],
                        [
                            "relative",
                            "デフォルトの動作で配置しつつ、オフセット操作を受け付ける",
                        ],
                        [
                            "sticky",
                            "fixedのように振る舞うが、親要素が画面外に押し出されると自身も押し出される",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "top / right / bottom / left",
        {
            entry: "トップ、ライト、ボトム、レフト",
            description: "指定した位置に要素を配置する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "基準点から任意の距離だけ離す"],
                        [
                            "（分数）",
                            "基準点から親要素に対する任意の割合だけ離す",
                        ],
                        ["px", "基準点から1pxだけ離す"],
                        ["full", "基準点から親要素と同じ長さだけ離す"],
                        ["auto", "自動"],
                        [
                            "inset-*",
                            "top、right、bottom、leftに同じ値を指定する",
                        ],
                        ["inset-x-*", "leftとrightに同じ値を指定する"],
                        ["inset-y-*", "topとbottomに同じ値を指定する"],
                        ["start-*", "テキストの開始側を基準とする"],
                        ["end-*", "テキストの終端側を基準とする"],
                        ["top-*", "上端を基準とする"],
                        ["right-*", "右端を基準とする"],
                        ["bottom-*", "下端を基準とする"],
                        ["left-*", "左端を基準とする"],
                    ]}
                />
            ),
        },
    ],
    [
        "visibility",
        {
            entry: "可視性",
            description: "要素の可視状態を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["visible", "表示"],
                        [
                            "invisible",
                            "レイアウトは維持したまま非表示（完全に非表示にしたい場合はhiddenを指定）",
                        ],
                        [
                            "collapse",
                            "テーブル列の幅を維持したまま、一部の行を非表示",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "z-index",
        {
            entry: "Zインデックス",
            description: "要素の重なり順を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["（数値）", "値が大きいほど上に表示される"],
                        ["auto", "自動"],
                    ]}
                />
            ),
        },
    ],
]);

export default layoutJA;
