/**
 * TailwindCSSのDocumentationページから値を取得するのに使用する
 */
export default class DocumentationExtractor {
    private document: Document;

    constructor(document: Document) {
        this.document = document;
    }

    /**
     * 指定したセレクターの要素からテキストを取得
     * @throws HTML要素が見つからなければエラーが発生
     */
    private getTextContent = (selector: string): string => {
        const element = this.document.querySelector(selector);
        if (element == null) {
            throw new Error(
                `Documentationの${selector}要素が見つかりませんでした`,
            );
        }

        return element.textContent ?? "";
    };

    /**
     * 見出しの取得
     * @throws HTML要素が見つからなければエラーが発生
     */
    getEntry = (): string => {
        try {
            return this.getTextContent("h1");
        } catch (error) {
            throw error!;
        }
    };

    /**
     * 説明の取得
     * @throws HTML要素が見つからなければエラーが発生
     */
    getDescription = (): string => {
        try {
            return this.getTextContent("h1~p");
        } catch (error) {
            throw error!;
        }
    };

    /**
     * クラス名とそれに対応するCSSスタイルを全て取得
     * @throws HTML要素が見つからなければエラーが発生
     */
    getParameters = (): string[][] => {
        return Array.from(
            this.document.querySelectorAll(
                "div#quick-reference > div > table > tbody",
            ),
        )
            .map((tbody) => {
                return Array.from(tbody.querySelectorAll("tr")).map((tr) => {
                    return Array.from(tr.querySelectorAll("td")).map((td) => {
                        return td.textContent ?? "";
                    });
                });
            })
            .flat();
    };
}
