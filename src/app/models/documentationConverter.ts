import { Category } from "./category";
import {
    CheatSheetData,
    Documentation,
    DocumentationDetails,
    Translation,
} from "./types";

export default class DocumentationConverter {
    convertToCheatSheetData = (
        documentations: [Category, Documentation[], Map<string, Translation>][],
    ): readonly CheatSheetData[] => {
        const result = documentations.map(
            ([category, documentations, translations]) => {
                const formattedCategory = this.formatCategory(
                    category,
                    translations,
                );
                const detailedDocumentations =
                    this.convertToDetailedDocumentations(
                        documentations,
                        translations,
                    );
                const obj: CheatSheetData = {
                    category: formattedCategory,
                    categoryEN: category,
                    documentationDetailsList: detailedDocumentations,
                };
                return obj;
            },
        );
        return result;
    };

    private formatCategory = (
        category: Category,
        translations: Map<string, Translation>,
    ): string => {
        const translation = translations.get(category);
        const result = [category, translation?.entry]
            .filter((v) => v != null)
            .join(" / ");
        return result;
    };

    private convertToDetailedDocumentations = (
        documentations: Documentation[],
        translations: Map<string, Translation>,
    ): readonly DocumentationDetails[] => {
        const result = documentations.map((doc) => {
            const translation = translations.get(doc.entry);
            const entry = [doc.entry, translation?.entry]
                .filter((v) => v != null)
                .join("\n");
            const description = translation?.description ?? doc.description;
            const obj: DocumentationDetails = {
                url: doc.url,
                entry: entry,
                description: description,
                detail: translation?.detail,
                parameters: doc.parameters,
            };
            return obj;
        });
        return result;
    };
}
