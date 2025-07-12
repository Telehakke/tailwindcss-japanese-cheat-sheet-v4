import { DocumentationDetails } from "./types";

export default class DocumentationDetailsFilter {
    filtering = (
        documentationDetailsList: readonly DocumentationDetails[],
        searchStrings: string[],
    ): readonly DocumentationDetails[] => {
        if (searchStrings.length === 0) return documentationDetailsList;

        const result = documentationDetailsList.filter((v) => {
            return searchStrings.every((searchString) => {
                if (this.contains(v.entry, searchString)) return true;
                if (this.contains(v.description, searchString)) return true;
                for (const parameters of v.parameters) {
                    for (const parameter of parameters) {
                        if (this.contains(parameter, searchString)) return true;
                    }
                }
                return false;
            });
        });
        return result;
    };

    private contains = (sourceString: string, searchString: string): boolean =>
        sourceString.toLowerCase().includes(searchString.toLowerCase());
}
