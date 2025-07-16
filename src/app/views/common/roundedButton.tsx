import type { JSX } from "solid-js/jsx-runtime";

const RoundedButton = (props: {
    ref?: HTMLButtonElement;
    class?: string;
    id?: string;
    Icon?: JSX.Element;
    text?: string;
    onClick?: (event: MouseEvent) => void;
}) => {
    return (
        <button
            ref={props.ref}
            class={`flex justify-center rounded-full transition ${props.class ?? ""}`}
            id={props.id}
            onClick={(event) => props.onClick?.(event)}
        >
            {props.Icon}
            {props.text != null && <p>{props.text}</p>}
        </button>
    );
};

export default RoundedButton;
