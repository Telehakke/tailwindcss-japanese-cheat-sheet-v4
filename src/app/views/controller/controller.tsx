import { Bg } from "../common/classNames";
import ExpandAndCollapseAndMenuButtons from "./sub/buttons";
import SearchTextBox from "./sub/searchTextBox";

const Controller = () => {
    const sticky = "sticky top-0 z-10";
    const flex = "flex flex-col sm:flex-row gap-4 justify-center";

    return (
        <div
            class={`-mx-4 py-4 shadow-md ${sticky} ${flex} ${Bg.slate100_dark900}`}
        >
            <SearchTextBox />
            <ExpandAndCollapseAndMenuButtons />
        </div>
    );
};

export default Controller;
