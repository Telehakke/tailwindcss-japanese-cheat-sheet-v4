import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ReactNode } from "react";
import { cheatSheetAtom, isOpenSidebarAtom } from "../appStates";
import { Bg, Border, Fill, FontSize, TextColor } from "./common/classNames";
import { Close } from "./common/icons";
import RoundedButton from "./common/roundedButton";

const Sidebar = () => {
    return (
        <>
            <Backdrop />
            <Bar>
                <SidebarCloseButton />
                <hr className={`border ${Border.neutral400_dark700}`} />
                <AnchorLinks />
            </Bar>
        </>
    );
};

export default Sidebar;

/* -------------------------------------------------------------------------- */

const Backdrop = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useAtom(isOpenSidebarAtom);

    return (
        <div
            className={`fixed inset-0 z-20 h-screen w-screen ${isOpenSidebar ? "" : "hidden"}`}
            onClick={() => setIsOpenSidebar(false)}
        />
    );
};

const Bar = ({ children }: { children: ReactNode }) => {
    const isOpenSidebar = useAtomValue(isOpenSidebarAtom);
    const size = "h-screen w-64";
    const space = "p-4 space-y-2";
    const position = `fixed top-0 left-0 z-20 ${isOpenSidebar ? "" : "-translate-x-64"}`;
    const background = `backdrop-blur ${Bg.neutral100_70_dark900_70}`;

    return (
        <div
            className={`overflow-scroll transition ${size} ${space} ${position} ${background}`}
        >
            {children}
        </div>
    );
};

const SidebarCloseButton = () => {
    const setIsOpenSidebar = useSetAtom(isOpenSidebarAtom);

    return (
        <RoundedButton
            className={`px-2 ${Bg.hoverNeutral200_dark800}`}
            Icon={<Close className={Fill.neutral500} />}
            onClick={() => setIsOpenSidebar(false)}
        />
    );
};

const AnchorLinks = () => {
    const cheatSheet = useAtomValue(cheatSheetAtom);
    const setIsOpenSidebar = useSetAtom(isOpenSidebarAtom);

    return (
        <>
            {cheatSheet.cheatSheetData().map((v) => (
                <a
                    key={v.categoryEN}
                    className={`block transition ${FontSize.xl} ${TextColor.hoverSky500}`}
                    href={`#${v.categoryEN}`}
                    onClick={() => setIsOpenSidebar(false)}
                >
                    {v.categoryEN}
                </a>
            ))}
        </>
    );
};
