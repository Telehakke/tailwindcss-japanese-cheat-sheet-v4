import { Index, Show } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { CheatSheetState, SidebarState } from "../appStates";
import { Bg, Border, Fill, FontSize, TextColor } from "./common/classNames";
import { Close } from "./common/icons";
import RoundedButton from "./common/roundedButton";

const Sidebar = () => {
    const isOpen = SidebarState.isOpen();

    return (
        <>
            <Backdrop />
            <Bar>
                <Show when={isOpen()}>
                    <CloseButton />
                    <hr class={`border ${Border.neutral400_dark700}`} />
                    <AnchorLinks />
                </Show>
            </Bar>
        </>
    );
};

export default Sidebar;

/* -------------------------------------------------------------------------- */

const Backdrop = () => {
    const isOpen = SidebarState.isOpen();

    return (
        <div
            class={`fixed inset-0 z-20 h-screen w-screen ${isOpen() ? "" : "hidden"}`}
            aria-hidden={true}
            onClick={() => SidebarState.toggle("sidebar-open")}
        />
    );
};

const Bar = (props: { children: JSX.Element }) => {
    const isOpen = SidebarState.isOpen();
    const size = "h-screen w-64";
    const space = "p-4 space-y-2";
    const background = `backdrop-blur ${Bg.neutral100_70_dark900_70}`;
    const position = () =>
        `fixed top-0 left-0 z-20 ${isOpen() ? "" : "-translate-x-full"}`;
    const transition = () => ` ${isOpen() ? "transition" : "transition-none"}`;

    return (
        <div
            class={`overflow-scroll ${size} ${space} ${background} ${position()} ${transition()}`}
        >
            {props.children}
        </div>
    );
};

const CloseButton = () => {
    return (
        <RoundedButton
            class={`px-2 ${Bg.hoverNeutral200_dark800}`}
            id="sidebar-close"
            Icon={<Close class={Fill.neutral500} />}
            onClick={() => SidebarState.toggle("sidebar-open")}
        />
    );
};

const AnchorLinks = () => {
    const cheatSheet = CheatSheetState.cheatSheet();

    return (
        <Index each={cheatSheet().cheatSheetDataList()}>
            {(v) => (
                <a
                    class={`block transition ${FontSize.xl} ${TextColor.hoverSky500}`}
                    href={`#${v().categoryEN}`}
                    onClick={() => SidebarState.toggle()}
                >
                    {v().categoryEN}
                </a>
            )}
        </Index>
    );
};
