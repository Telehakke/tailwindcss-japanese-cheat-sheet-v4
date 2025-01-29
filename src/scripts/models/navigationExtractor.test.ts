import { expect, test } from "vitest";
import { JSDOM } from "jsdom";
import NavigationExtractor from "./navigationExtractor";
import { Navigation } from "../../app/models/types";

// prettier-ignore
const html =
`<body>
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <a></a>
                            <button>v4.0</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <nav>
                                    <div>
                                        <h3>Base styles</h3>
                                        <ul>
                                            <li>
                                                <a href="/docs/preflight">Preflight</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3>Layout</h3>
                                        <ul>
                                            <li>
                                                <a href="/docs/aspect-ratio">aspect-ratio</a>
                                            </li>
                                            <li>
                                                <a href="/docs/columns">columns</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>`;

const { document } = new JSDOM(html).window;
const navigationExtractor = new NavigationExtractor(document);

test("チートシートに必要な項目だけを取得できているかどうか", () => {
    const result = navigationExtractor.getNavigations();
    const expected: Navigation[] = [
        {
            category: "Layout",
            urls: [
                "https://tailwindcss.com/docs/aspect-ratio",
                "https://tailwindcss.com/docs/columns",
            ],
        },
    ];
    expect(result).toEqual(expected);
});

test("ドキュメントのバージョンを取得できているかどうか", () => {
    const result = navigationExtractor.getVersion();
    expect(result).toBe("v4.0");
});
