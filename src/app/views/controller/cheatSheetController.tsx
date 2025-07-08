import { Bg } from "../common/classNames";
import ExpandAndCollapseAndMenuButtons from "./sub/buttons";
import SearchTextBox from "./sub/searchTextBox";

const CheatSheetController = () => {
    const sticky = "sticky top-0";
    const flex = "flex flex-col sm:flex-row gap-4 justify-center";

    return (
        <div
            className={`z-10 -mx-4 py-4 shadow-md ${Bg.slate100_dark900} ${sticky} ${flex}`}
        >
            <SearchTextBox />
            <ExpandAndCollapseAndMenuButtons />
        </div>
    );
};

export default CheatSheetController;
