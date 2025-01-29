import { useAtomValue, useSetAtom } from "jotai";
import {
    cheatSheetDataAtom,
    isJapaneseAtom,
    translatorEN,
    translatorJA,
} from "../../../appStates";
import { useEffect, useRef, useState } from "react";
import { DetailedDocumentation } from "../../../models/types";
import DelayAction from "../../../models/delayAction";
import { Close, Search } from "../../common/icons";
import { Bg, Fill, Outline } from "../../common/classNames";

/**
 * 検索テキストボックス
 */
const SearchTextBox = () => {
    const setCheatSheetData = useSetAtom(cheatSheetDataAtom);
    const isJapanese = useAtomValue(isJapaneseAtom);
    const [isFocus, setIsFocus] = useState(false);
    const [inputString, setInputString] = useState("");
    const inputElement = useRef<HTMLInputElement>(null);

    // 虫眼鏡アイコンの表示・非表示のためにフォーカスの状態を取得する
    useEffect(() => {
        inputElement.current?.addEventListener("focus", () => {
            setIsFocus(true);
        });
        inputElement.current?.addEventListener("focusout", () => {
            setIsFocus(false);
        });
    }, []);

    // 項目、説明、パラメーターに対し、検索文字列が含まれる説明書だけを抽出する
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        const searchString = event.target.value;
        setInputString(searchString);
        const lowerCaseSearchString = searchString.toLowerCase();

        // フィルタリングのロジックをまとめた関数
        const FilterOutNonMatchingDocumentations = (
            src: DetailedDocumentation[],
            searchString: string,
        ): DetailedDocumentation[] => {
            const result = src.filter((doc) => {
                if (doc.entry.toLowerCase().includes(searchString)) {
                    return true;
                }

                if (doc.description.toLowerCase().includes(searchString)) {
                    return true;
                }

                for (const parameters of doc.parameters) {
                    for (const parameter of parameters) {
                        if (parameter.toLowerCase().includes(searchString)) {
                            return true;
                        }
                    }
                }
                return false;
            });
            return result;
        };

        // 最後の入力から0.4秒後にフィルター結果をページに反映させる
        DelayAction.run(() => {
            const cheatSheetData = isJapanese
                ? translatorJA.getCheatSheetData()
                : translatorEN.getCheatSheetData();
            const result = cheatSheetData.map((data) => {
                const documentations = FilterOutNonMatchingDocumentations(
                    data.detailedDocumentations,
                    lowerCaseSearchString,
                );
                return {
                    category: data.category,
                    categoryEN: data.categoryEN,
                    detailedDocumentations: documentations,
                };
            });
            setCheatSheetData(result);
        }, 400);
    };

    // 入力ボックスを空にしてフィルタリングを解除する
    const handleCloseClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        setInputString("");
        setCheatSheetData(
            isJapanese
                ? translatorJA.getCheatSheetData()
                : translatorEN.getCheatSheetData(),
        );
    };

    return (
        <div className="flex justify-center">
            <div className="relative w-screen max-w-64">
                <label className="sr-only" htmlFor="search">
                    クラス名の検索
                </label>
                <input
                    className={`h-8 w-full rounded-md px-2 focus:outline-hidden ${Bg.transparent}`}
                    id="search"
                    type="text"
                    onChange={handleInputChange}
                    value={inputString}
                    ref={inputElement}
                />
                <div
                    className={`absolute inset-0 -z-10 rounded-md outline-2 ${Bg.neutral50_dark800} ${Outline.neutral400_dark700}`}
                ></div>
                {!isFocus && inputString.length === 0 ? (
                    <Search
                        className={`absolute inset-y-0 left-2 my-auto ${Fill.neutral500}`}
                    />
                ) : null}
                {inputString.length > 0 && (
                    <button onClick={handleCloseClick}>
                        <Close
                            className={`absolute inset-y-0 right-2 my-auto rounded-full transition ${Fill.neutral500_hover400} }`}
                        />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchTextBox;
