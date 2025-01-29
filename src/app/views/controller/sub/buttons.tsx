import { useAtomValue, useSetAtom } from "jotai";
import {
    isJapaneseAtom,
    isOpenSidebarAtom,
    shouldExpandAllAtom,
} from "../../../appStates";
import RoundedButton from "../../common/roundedButton";
import { Menu, UnfoldLess, UnfoldMore } from "../../common/icons";
import { Bg, Border, Fill } from "../../common/classNames";

/**
 * 全て展開、全て折りたたむ、メニューボタン
 */
const ExpandAndCollapseAndMenuButtons = () => {
    const isJapanese = useAtomValue(isJapaneseAtom);
    const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);
    const setIsOpenSidebar = useSetAtom(isOpenSidebarAtom);

    return (
        <div className="flex items-center justify-center gap-4">
            <RoundedButton
                className={`border-2 px-2 ${Border.neutral400_dark700} ${Bg.hoverNeutral200_dark800}`}
                Icon={<UnfoldMore className={Fill.neutral500} />}
                text={isJapanese ? "全て展開" : "Expand All"}
                onClick={() => setShouldExpandAll(true)}
            />
            <RoundedButton
                className={`border-2 px-2 ${Border.neutral400_dark700} ${Bg.hoverNeutral200_dark800}`}
                Icon={<UnfoldLess className={Fill.neutral500} />}
                text={isJapanese ? "全て折りたたむ" : "Collapse All"}
                onClick={() => setShouldExpandAll(false)}
            />
            <RoundedButton
                className={`px-2 ${Bg.hoverNeutral200_dark800}`}
                Icon={<Menu className={Fill.neutral500} />}
                text=""
                onClick={() => setIsOpenSidebar((v) => !v)}
            />
        </div>
    );
};

export default ExpandAndCollapseAndMenuButtons;
