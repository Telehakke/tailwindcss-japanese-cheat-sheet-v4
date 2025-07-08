import { useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { searchStringAtom } from "../../../appStates";
import DelayAction from "../../../models/delayAction";
import { Bg, Fill, Outline } from "../../common/classNames";
import { Close, Search } from "../../common/icons";

const SearchTextBox = () => {
    const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);
    const [inputString, setInputString] = useState("");

    return (
        <div className="flex justify-center">
            <div className="relative w-screen max-w-64">
                <div className="flex">
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

const TextField = ({
    setIsTextFieldFocused,
    inputString,
    setInputString,
}: {
    setIsTextFieldFocused: React.Dispatch<React.SetStateAction<boolean>>;
    inputString: string;
    setInputString: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const setSearchString = useSetAtom(searchStringAtom);
    const inputElement = useRef<HTMLInputElement>(null);
    const delayAction = useRef(new DelayAction());

    // 虫眼鏡アイコンの表示・非表示のためにフォーカスの状態を監視する
    useEffect(() => {
        inputElement.current?.addEventListener("focus", () => {
            setIsTextFieldFocused(true);
        });
        inputElement.current?.addEventListener("focusout", () => {
            setIsTextFieldFocused(false);
        });
    }, [setIsTextFieldFocused]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchString = event.target.value;
        setInputString(searchString);
        delayAction.current.run(() => {
            setSearchString(searchString);
        }, 400);
    };

    return (
        <>
            <label className="sr-only" htmlFor="search">
                クラス名の検索
            </label>
            <input
                className={`h-8 w-full px-2 focus:outline-hidden`}
                id="search"
                type="text"
                onChange={handleChange}
                value={inputString}
                ref={inputElement}
            />
        </>
    );
};

const ClearButton = ({
    inputString,
    setInputString,
}: {
    inputString: string;
    setInputString: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const setSearchString = useSetAtom(searchStringAtom);

    const handleClick = () => {
        setInputString("");
        setSearchString("");
    };

    if (inputString.length === 0) return <></>;
    return (
        <button onClick={handleClick}>
            <Close
                className={`inset-y-0 right-2 my-auto transition ${Fill.neutral500_hover400}`}
            />
        </button>
    );
};

const TextFieldDecoration = () => {
    const outline = `rounded-md outline-2 ${Outline.neutral400_dark700}`;

    return (
        <div
            className={`absolute inset-0 -z-10 ${Bg.neutral50_dark800} ${outline}`}
        />
    );
};

const SearchIcon = ({
    isTextFieldFocused,
    inputString,
}: {
    isTextFieldFocused: boolean;
    inputString: string;
}) => {
    if (isTextFieldFocused || inputString.length > 0) return <></>;
    return (
        <Search
            className={`absolute inset-y-0 left-2 my-auto ${Fill.neutral500}`}
        />
    );
};
