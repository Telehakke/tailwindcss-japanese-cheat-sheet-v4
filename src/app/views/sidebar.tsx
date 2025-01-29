import { useAtom, useAtomValue } from "jotai";
import { cheatSheetDataAtom, isOpenSidebarAtom } from "../appStates";
import { Bg, Border, Fill, FontSize, TextColor } from "./common/classNames";
import RoundedButton from "./common/roundedButton";
import { Close } from "./common/icons";

/**
 * ページ内リンクをまとめたメニュー
 */
const Sidebar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useAtom(isOpenSidebarAtom);
    const cheatSheetData = useAtomValue(cheatSheetDataAtom);

    return (
        <div
            className={`fixed left-0 top-0 h-screen w-64 space-y-2 overflow-scroll p-4 backdrop-blur transition ${Bg.neutral100_70_dark900_70} ${isOpenSidebar ? "" : "-translate-x-64"}`}
        >
            <RoundedButton
                Icon={
                    <Close
                        className={`transition ${Fill.neutral500_hover400}`}
                    />
                }
                text=""
                onClick={() => setIsOpenSidebar(false)}
            />
            <hr className={`border ${Border.neutral400_dark700}`} />
            {cheatSheetData.map((v) => {
                return (
                    <a
                        key={v.categoryEN}
                        className={`block ${FontSize.textXl} ${TextColor.hoverSky500}`}
                        href={`#${v.categoryEN}`}
                        onClick={() => setIsOpenSidebar(false)}
                    >
                        {v.categoryEN}
                    </a>
                );
            })}
        </div>
    );
};

export default Sidebar;
