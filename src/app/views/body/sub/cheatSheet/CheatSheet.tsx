import { useAtomValue } from "jotai";
import { useState, type JSX } from "react";
import { shouldExpandAllAtom } from "../../../../atoms";
import { type Category } from "../../../../models/category";
import type { FullDocumentation } from "../../../../models/cheatSheetData";
import { Collapsible } from "../../../common/Collapsible";
import { Description } from "./sub/Description";
import { DetailTable } from "./sub/DetailTable";
import { EntryAndLink } from "./sub/EntryAndLink";
import { ParameterList } from "./sub/ParameterList";

export const CheatSheet = (props: {
    category: Category;
    fullDocumentation: FullDocumentation;
}): JSX.Element => {
    const shouldExpandAll = useAtomValue(shouldExpandAllAtom);
    const [prevState, setPrevState] = useState<boolean | undefined>(
        shouldExpandAll,
    );
    const [shouldExpand, setShouldExpand] = useState<boolean>(
        shouldExpandAll ?? false,
    );

    if (prevState !== shouldExpandAll) {
        if (shouldExpandAll) {
            setShouldExpand(true);
        }
        if (shouldExpandAll === false) {
            setShouldExpand(false);
        }
        setPrevState(shouldExpandAll);
    }

    return (
        <div className="space-y-2">
            <EntryAndLink {...props} {...{ shouldExpand, setShouldExpand }} />
            <div>
                <Description {...props} />
                <Collapsible
                    collapsedHeight={0}
                    unmountOnExit
                    open={shouldExpand}
                >
                    <div className="space-y-2 pt-2">
                        <DetailTable {...props} />
                        <ParameterList {...props} />
                    </div>
                </Collapsible>
            </div>
        </div>
    );
};
