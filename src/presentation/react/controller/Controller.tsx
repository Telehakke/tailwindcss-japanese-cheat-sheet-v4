import type { JSX } from "react";
import { joinObjectValues } from "../../utils/joinObjectValues";
import { Popover } from "../common/Popover";
import { Copyright } from "./items/Copyright";
import { ExpandAndCollapseButtons } from "./items/ExpandAndCollapseButtons";
import { LanguageSegmentGroup } from "./items/LanguageSegmentGroup";
import { MenuButton } from "./items/MenuButton";
import { OSSLicense } from "./items/OSSLicense";
import { SearchTextField } from "./items/SearchTextField";
import { ThemeSegmentGroup } from "./items/ThemeSegmentGroup";

export const Controller = (): JSX.Element => {
  const className = {
    _: "relative -mx-4 p-4 backdrop-blur-lg",
    flex: "flex flex-col items-center justify-center gap-4 sm:flex-row",
    position: "sticky inset-x-0 top-0 z-10",
  };

  return (
    <div className={joinObjectValues(className)}>
      <MenuButton />
      <SearchTextField />
      <ExpandAndCollapseButtons />
      <Popover>
        <div className="flex flex-col items-start gap-4">
          <LanguageSegmentGroup />
          <ThemeSegmentGroup />
          <OSSLicense />
          <Copyright />
        </div>
      </Popover>
    </div>
  );
};
