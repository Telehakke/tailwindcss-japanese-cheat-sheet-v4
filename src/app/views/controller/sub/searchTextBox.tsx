import {
    createEffect,
    createSignal,
    Show,
    type Accessor,
    type Setter,
} from "solid-js";
import { SearchStringState } from "../../../appStates";
import DelayAction from "../../../models/delayAction";
import { Bg, Fill, Outline } from "../../common/classNames";
import { Close, Search } from "../../common/icons";

const SearchTextBox = () => {
    const [isTextFieldFocused, setIsTextFieldFocused] = createSignal(false);
    const [inputString, setInputString] = createSignal("");

    return (
        <div class="flex justify-center">
            <div class="relative w-screen max-w-64">
                <div class="flex">
                    <TextField
                        setIsTextFieldFocused={setIsTextFieldFocused}
                        inputString={inputString}
                        setInputString={setInputString}
                    />
                    <ClearButton
                        inputString={inputString}
                        setInputString={setInputString}
                    />
                </div>
                <TextFieldDecoration />
                <SearchIcon
                    isTextFieldFocused={isTextFieldFocused}
                    inputString={inputString}
                />
            </div>
        </div>
    );
};

export default SearchTextBox;

/* -------------------------------------------------------------------------- */

const TextField = (props: {
    setIsTextFieldFocused: Setter<boolean>;
    inputString: Accessor<string>;
    setInputString: Setter<string>;
}) => {
    let inputElement: HTMLInputElement | undefined;
    const delayAction = new DelayAction();

    // 虫眼鏡アイコンの表示・非表示のためにフォーカスの状態を監視する
    createEffect(() => {
        inputElement?.addEventListener("focus", () => {
            props.setIsTextFieldFocused(true);
        });
        inputElement?.addEventListener("focusout", () => {
            props.setIsTextFieldFocused(false);
        });
    });

    const handleChange = (element: HTMLInputElement) => {
        const inputString = element.value;
        props.setInputString(inputString);
        delayAction.run(() => {
            SearchStringState.setSearchString(inputString);
        }, 400);
    };

    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label class="sr-only" for="search">
                クラス名の検索
            </label>
            <input
                class={`h-8 w-full px-2 focus:outline-hidden`}
                id="search"
                type="text"
                onInput={(e) => handleChange(e.target)}
                value={props.inputString()}
                ref={inputElement}
            />
        </>
    );
};

const ClearButton = (props: {
    inputString: Accessor<string>;
    setInputString: Setter<string>;
}) => {
    const handleClick = () => {
        props.setInputString("");
        SearchStringState.setSearchString("");
    };

    return (
        <Show when={props.inputString().length > 0}>
            <button onClick={handleClick}>
                <Close
                    class={`inset-y-0 right-2 my-auto transition ${Fill.neutral500_hover400}`}
                />
            </button>
        </Show>
    );
};

const TextFieldDecoration = () => {
    const outline = `rounded-md outline-2 ${Outline.neutral400_dark700}`;

    return (
        <div
            class={`absolute inset-0 -z-10 ${Bg.neutral50_dark800} ${outline}`}
        />
    );
};

const SearchIcon = (props: {
    isTextFieldFocused: Accessor<boolean>;
    inputString: Accessor<string>;
}) => {
    return (
        <Show
            when={
                !props.isTextFieldFocused() && props.inputString().length === 0
            }
        >
            <Search
                class={`absolute inset-y-0 left-2 my-auto ${Fill.neutral500}`}
            />
        </Show>
    );
};
