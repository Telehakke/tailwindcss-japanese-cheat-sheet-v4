import { CheatSheetData } from "../../../models/types";
import FloatingCard from "./sub/floatingCard";
import CategoryBar from "./sub/categoryBar";
import DocumentationGroupBox from "./sub/documentationGroupBox";

/**
 * カテゴリー名とその項目の説明を表示する
 */
export const CheatSheet = ({
    cheatSheetData,
}: {
    cheatSheetData: CheatSheetData;
}) => {
    return (
        <FloatingCard>
            <CategoryBar cheatSheetData={cheatSheetData} />
            {cheatSheetData.detailedDocumentations.map((doc) => {
                return (
                    <DocumentationGroupBox
                        key={doc.entry}
                        detailedDocumentation={doc}
                    />
                );
            })}
        </FloatingCard>
    );
};
