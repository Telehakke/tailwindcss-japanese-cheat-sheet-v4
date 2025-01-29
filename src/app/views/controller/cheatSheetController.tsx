import { Bg } from "../common/classNames";
import ExpandAndCollapseAndMenuButtons from "./sub/buttons";
import SearchTextBox from "./sub/searchTextBox";

const CheatSheetController = () => {
    return (
        <div
            className={`sticky top-0 -mx-4 flex flex-col justify-center gap-4 py-4 shadow-md sm:flex-row ${Bg.slate100_dark900}`}
        >
            <SearchTextBox />
            <ExpandAndCollapseAndMenuButtons />
        </div>
    );
};

export default CheatSheetController;
