import type { CheatSheetData } from "../../../models/types";
import { FontSize, TextColor } from "../../common/classNames";

const CategoryBar = (props: { cheatSheetData: CheatSheetData }) => {
    const textStyle = `text-center font-bold break-keep  ${FontSize.xl} ${TextColor.orange500}`;
    const scrollMargin = "scroll-mt-[126px] sm:scroll-mt-[80px]";

    return (
        <h2
            class={`py-2 ${textStyle} ${scrollMargin}`}
            id={props.cheatSheetData.categoryEN}
        >
            {props.cheatSheetData.category}
        </h2>
    );
};

export default CategoryBar;
