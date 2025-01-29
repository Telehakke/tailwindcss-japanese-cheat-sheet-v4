import { JSDOM } from "jsdom";

/**
 * 指定したURLからDOMを生成し、Documentを非同期で返す
 */
const createDom = async (url: string): Promise<Document> => {
    const response = await fetch(url);
    const html = await response.text();
    const { document } = new JSDOM(html).window;
    return document;
};

export default createDom;
