import { CheatSheetData } from "../../../../models/types";
import { FontSize, TextColor } from "../../../common/classNames";

/**
 * 中央揃えでカテゴリー名を表示する
 */
const CategoryBar = ({
    cheatSheetData,
}: {
    cheatSheetData: CheatSheetData;
}) => {
    return (
        <h2
            className={`scroll-mt-[126px] p-2 pb-2 text-center font-bold break-keep whitespace-pre-line sm:scroll-mt-[80px] ${FontSize.textXl} ${TextColor.orange500}`}
            id={cheatSheetData.categoryEN}
        >
            {cheatSheetData.category}
        </h2>
    );
};

export default CategoryBar;
