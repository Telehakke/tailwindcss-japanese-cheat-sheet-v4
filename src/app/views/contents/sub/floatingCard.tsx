import type { JSX } from "solid-js/jsx-runtime";
import { Bg } from "../../common/classNames";

const FloatingCard = (props: { children?: JSX.Element }) => {
    return (
        <div class={`rounded-xl shadow-md ${Bg.neutral50_dark800}`}>
            {props.children}
        </div>
    );
};

export default FloatingCard;
