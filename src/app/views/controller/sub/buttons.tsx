import {
    DocumentDetailsState,
    SidebarState,
    UILabelState,
} from "../../../appStates";
import { Bg, Border, Fill } from "../../common/classNames";
import { Menu, UnfoldLess, UnfoldMore } from "../../common/icons";
import RoundedButton from "../../common/roundedButton";

const ExpandAndCollapseAndMenuButtons = () => {
    return (
        <div class="flex items-center justify-center gap-4">
            <ExpandAllButton />
            <CollapseAllButton />
            <MenuButton />
        </div>
    );
};

export default ExpandAndCollapseAndMenuButtons;

/* -------------------------------------------------------------------------- */

const ExpandAllButton = () => {
    const uiLabel = UILabelState.uiLabel();

    return (
        <RoundedButton
            class={`border-2 px-2 ${Border.neutral400_dark700} ${Bg.hoverNeutral200_dark800}`}
            Icon={<UnfoldMore class={Fill.neutral500} />}
            text={uiLabel().expandAll}
            onClick={() => DocumentDetailsState.expandAll()}
        />
    );
};

const CollapseAllButton = () => {
    const uiLabel = UILabelState.uiLabel();

    return (
        <RoundedButton
            class={`border-2 px-2 ${Border.neutral400_dark700} ${Bg.hoverNeutral200_dark800}`}
            Icon={<UnfoldLess class={Fill.neutral500} />}
            text={uiLabel().collapseAll}
            onClick={() => DocumentDetailsState.collapseAll()}
        />
    );
};

const MenuButton = () => {
    return (
        <RoundedButton
            class={`px-2 ${Bg.hoverNeutral200_dark800}`}
            id="sidebar-open"
            Icon={<Menu class={Fill.neutral500} />}
            onClick={() => SidebarState.toggle("sidebar-close")}
        />
    );
};
