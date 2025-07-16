import { Index } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { Bg, FontSize, TextColor } from "./classNames";

/**
 * クラス名の詳細な説明を表示するのに使用するテーブルビュー\
 * パラメータの3番目はtd要素のみを受け付ける
 */
const DetailTable = (props: { list: [string, string, JSX.Element?][] }) => {
    return (
        <table
            class={`border-separate border-spacing-y-1 leading-4 ${FontSize.sm} ${TextColor.neutral600_dark300}`}
        >
            <tbody>
                <Index each={props.list}>
                    {(item) => (
                        <tr>
                            {item()[2] instanceof HTMLTableCellElement
                                ? item()[2]
                                : null}
                            <td
                                class={`whitespace-pre ${Bg.neutral200_dark700}`}
                            >
                                {item()[0]}
                            </td>
                            <td class="px-1">{item()[1]}</td>
                        </tr>
                    )}
                </Index>
            </tbody>
        </table>
    );
};

export default DetailTable;
