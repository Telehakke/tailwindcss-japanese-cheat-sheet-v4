import { CopyState, UILabelState } from "../appStates";
import { Bg } from "./common/classNames";

const CopiedMessageBox = () => {
    const uiLabel = UILabelState.uiLabel();
    const isCopied = CopyState.isCopied();

    const space = "p-2 mt-2";
    const position = () =>
        `fixed top-0 right-0 z-20 ${isCopied() ? "" : "translate-x-full"}`;

    return (
        <div
            class={`font-bold transition ${space} ${position()} ${Bg.neutral200_dark700}`}
        >
            {uiLabel().copied}
        </div>
    );
};

export default CopiedMessageBox;
