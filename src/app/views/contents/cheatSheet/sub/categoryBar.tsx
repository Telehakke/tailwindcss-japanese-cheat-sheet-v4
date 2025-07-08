import { CheatSheetData } from "../../../../models/types";
import { FontSize, TextColor } from "../../../common/classNames";

const CategoryBar = ({
    cheatSheetData,
}: {
    cheatSheetData: CheatSheetData;
}) => {
    const textStyle = `text-center font-bold break-keep  ${FontSize.xl} ${TextColor.orange500}`;
    const scrollMargin = "scroll-mt-[126px] sm:scroll-mt-[80px]";

    return (
        <h2
            className={`py-2 ${textStyle} ${scrollMargin}`}
            id={cheatSheetData.categoryEN}
        >
            {cheatSheetData.category}
        </h2>
    );
};

export default CategoryBar;
