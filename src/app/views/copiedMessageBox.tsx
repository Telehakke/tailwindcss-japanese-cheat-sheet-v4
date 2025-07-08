import { useAtom, useAtomValue } from "jotai";
import { useRef } from "react";
import { isCopiedAtom, UILabelAtom } from "../appStates";
import DelayAction from "../models/delayAction";
import { Bg } from "./common/classNames";

const CopiedMessageBox = () => {
    const UILabel = useAtomValue(UILabelAtom);
    const [isCopied, setIsCopied] = useAtom(isCopiedAtom);
    const delayAction = useRef(new DelayAction());

    if (isCopied) {
        delayAction.current.run(() => {
            setIsCopied(false);
        }, 1500);
    }

    const space = "p-2 mt-2";
    const position = `fixed top-0 right-0 z-20 ${isCopied ? "" : "translate-x-full"}`;

    return (
        <div
            className={`font-bold transition ${space} ${position} ${Bg.neutral200_dark700}`}
        >
            {UILabel.copied}
        </div>
    );
};

export default CopiedMessageBox;
