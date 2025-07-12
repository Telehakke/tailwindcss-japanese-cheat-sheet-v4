import { useAtomValue, useSetAtom } from "jotai";
import {
    isOpenSidebarAtom,
    shouldExpandAllAtom,
    UILabelAtom,
} from "../../../appStates";
import { Bg, Border, Fill } from "../../common/classNames";
import { Menu, UnfoldLess, UnfoldMore } from "../../common/icons";
import RoundedButton from "../../common/roundedButton";

const ExpandAndCollapseAndMenuButtons = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <ExpandAllButton />
            <CollapseAllButton />
            <MenuButton />
        </div>
    );
};

export default ExpandAndCollapseAndMenuButtons;

/* -------------------------------------------------------------------------- */

const ExpandAllButton = () => {
    const UILabel = useAtomValue(UILabelAtom);
    const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

    return (
        <RoundedButton
            className={`border-2 px-2 ${Border.neutral400_dark700} ${Bg.hoverNeutral200_dark800}`}
            Icon={<UnfoldMore className={Fill.neutral500} />}
            text={UILabel.expandAll}
            onClick={() => setShouldExpandAll(true)}
        />
    );
};

const CollapseAllButton = () => {
    const UILabel = useAtomValue(UILabelAtom);
    const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

    return (
        <RoundedButton
            className={`border-2 px-2 ${Border.neutral400_dark700} ${Bg.hoverNeutral200_dark800}`}
            Icon={<UnfoldLess className={Fill.neutral500} />}
            text={UILabel.collapseAll}
            onClick={() => setShouldExpandAll(false)}
        />
    );
};

const MenuButton = () => {
    const setIsOpenSidebar = useSetAtom(isOpenSidebarAtom);

    return (
        <RoundedButton
            className={`px-2 ${Bg.hoverNeutral200_dark800}`}
            Icon={<Menu className={Fill.neutral500} />}
            onClick={() => setIsOpenSidebar((v) => !v)}
        />
    );
};
