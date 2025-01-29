import { test, expect } from "vitest";
import { JSDOM } from "jsdom";
import DocumentationExtractor from "./documentationExtractor";

// prettier-ignore
const html =
`<body>
    <div>
        <div>
            <div></div>
            <div>
                <div></div>
                <div></div>
                <div>
                    <div>
                        <div>
                            <p>Category</p>
                            <h1>Entry</h1>
                            <p>Description</p>
                            <div>
                                <div id="quick-reference">
                                    <div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Class</th>
                                                    <th>Styles</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><code>Class1</code></td>
                                                    <td><div>Styles1</div></td>
                                                </tr>
                                                <tr>
                                                    <td><code>Class2</code></td>
                                                    <td><div>Styles2</div></td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td><code>Class3</code></td>
                                                    <td><div>Styles3</div></td>
                                                </tr>
                                                <tr>
                                                    <td><code>Class4</code></td>
                                                    <td><div>Styles4</div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>`

const { document } = new JSDOM(html).window;
const documentationExtractor = new DocumentationExtractor(document);

test("見出しを取得できているかどうか", () => {
    const result = documentationExtractor.getEntry();
    expect(result).toBe("Entry");
});

test("説明を取得できているかどうか", () => {
    const result = documentationExtractor.getDescription();
    expect(result).toBe("Description");
});

test("パラメーターを取得できているかどうか", () => {
    const result = documentationExtractor.getParameters();
    const expected = [
        ["Class1", "Styles1"],
        ["Class2", "Styles2"],
        ["Class3", "Styles3"],
        ["Class4", "Styles4"],
    ];
    expect(result).toEqual(expected);
});
