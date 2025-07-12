import { CheatSheetData } from "../../../models/types";
import CategoryBar from "./sub/categoryBar";
import DocumentationGroupBox from "./sub/documentationGroupBox";
import FloatingCard from "./sub/floatingCard";

export const CheatSheet = ({
    cheatSheetData,
}: {
    cheatSheetData: CheatSheetData;
}) => {
    return (
        <FloatingCard>
            <CategoryBar cheatSheetData={cheatSheetData} />
            {cheatSheetData.documentationDetailsList.map((doc) => (
                <DocumentationGroupBox
                    key={doc.entry}
                    documentationDetails={doc}
                />
            ))}
        </FloatingCard>
    );
};
