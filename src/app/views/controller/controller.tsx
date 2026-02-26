import type { JSX } from "react";
import { Popover } from "../common/Popover";
import { Copyright } from "./sub/Copyright";
import { ExpandAndCollapseButtons } from "./sub/ExpandAndCollapseButtons";
import { LanguageSegmentGroup } from "./sub/LanguageSegmentGroup";
import { MenuButton } from "./sub/MenuButton";
import { SearchTextField } from "./sub/SearchTextField";
import { ThemeSegmentGroup } from "./sub/ThemeSegmentGroup";

export const Controller = (): JSX.Element => {
    const className = {
        _: "relative -mx-4 p-4 backdrop-blur-lg",
        flex: "flex flex-col items-center justify-center gap-4 sm:flex-row",
        position: "sticky inset-x-0 top-0 z-10",
    };

    return (
        <div className={Object.values(className).join(" ")}>
            <MenuButton />
            <SearchTextField />
            <ExpandAndCollapseButtons />
            <Popover>
                <div className="flex flex-col items-start gap-4">
                    <LanguageSegmentGroup />
                    <ThemeSegmentGroup />
                    <Copyright />
                </div>
            </Popover>
        </div>
    );
};
