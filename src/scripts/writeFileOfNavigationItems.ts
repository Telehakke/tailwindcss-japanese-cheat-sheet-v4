import fs from "fs";
import { isCategory } from "../app/models/category";
import { createDom } from "./createDom";

const url = "https://tailwindcss.com/docs/installation/using-vite";
const document = await createDom(url);
const version = getDocumentationVersion(document);
const navigationItems = getNavigationItems(document);
const path = createPath(version);
if (fs.existsSync(path)) throw new Error(`${path}がすでに存在します`);

fs.writeFileSync(path, createCode(version, navigationItems));
console.log(`${path}に保存しました`);

/* -------------------------------------------------------------------------- */

/**
 * TailwindCSSのドキュメントバージョンを取得
 */
function getDocumentationVersion(document: Document): string {
    return (
        document.querySelector("div > div > div > div > div > div > button")
            ?.textContent ?? ""
    );
}

/* -------------------------------------------------------------------------- */

type Navigation = {
    readonly category: string;
    readonly urls: readonly string[];
};

/**
 * TailwindCSSのページのサイドメニューからナビゲーション情報を取得
 */
function getNavigationItems(document: Document): readonly Navigation[] {
    return getNavChildren(getNav(document))
        .filter((e) => isCategory(getCategory(e)))
        .map((e) => {
            return {
                category: getCategory(e)!,
                urls: getUrls(e),
            };
        });
}

function getCategory(child: HTMLDivElement): string | undefined {
    return child.querySelector("h3")?.textContent ?? undefined;
}

function getUrls(child: HTMLElement): readonly string[] {
    return Array.from(
        child.querySelectorAll<HTMLAnchorElement>("ul > li > a"),
    ).map((e) => {
        return `https://tailwindcss.com${e.href}`;
    });
}

function getNavChildren(nav: Element): readonly HTMLDivElement[] {
    return Array.from(nav.querySelectorAll("div"));
}

function getNav(document: Document): Element {
    const nav = document.querySelector("div > div > div:nth-of-type(2) nav");
    if (nav == null) throw new Error("<nav>要素が見つかりませんでした");
    return nav;
}

/* -------------------------------------------------------------------------- */

function createPath(version: string): string {
    return `./src/app/data/navigationItems_${version}.ts`;
}

function createCode(
    version: string,
    navigationItems: readonly Navigation[],
): string {
    return `export const version = "${version}";
export const navigationItems = ${JSON.stringify(navigationItems, null, 4)}`;
}
