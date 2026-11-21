import { useAtomValue } from "jotai";
import { useState, type JSX } from "react";
import type { FullDocumentation } from "../../../../../application/cheatSheetData";
import type { Category } from "../../../../../domain/models/category";
import { shouldExpandAllAtom } from "../../../../atoms";
import { Collapsible } from "../../../common/Collapsible";
import { Description } from "./items/Description";
import { DetailTable } from "./items/DetailTable";
import { EntryAndLink } from "./items/EntryAndLink";
import { ParameterList } from "./items/ParameterList";

export const CheatSheet = (props: {
  category: Category;
  fullDocumentation: FullDocumentation;
}): JSX.Element => {
  const shouldExpandAll = useAtomValue(shouldExpandAllAtom);
  const [prevState, setPrevState] = useState(shouldExpandAll);
  const [shouldExpand, setShouldExpand] = useState<boolean>(shouldExpandAll ?? false);

  if (prevState !== shouldExpandAll) {
    if (typeof shouldExpandAll === "boolean") setShouldExpand(shouldExpandAll);
    setPrevState(shouldExpandAll);
  }

  return (
    <div className="space-y-2">
      <EntryAndLink {...props} {...{ shouldExpand, setShouldExpand }} />
      <div>
        <Description {...props} />
        <Collapsible collapsedHeight={0} unmountOnExit open={shouldExpand}>
          <div className="space-y-2 pt-2">
            <DetailTable {...props} />
            <ParameterList {...props} />
          </div>
        </Collapsible>
      </div>
    </div>
  );
};
