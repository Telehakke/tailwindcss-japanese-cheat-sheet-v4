import fs from "fs";
import { isCategory } from "../domain/models/category";
import { createDom } from "./createDom";

const url = "https://tailwindcss.com/docs/installation/using-vite";
const document = await createDom(url);
const version = getDocumentationVersion(document);
const navigationItems = getNavigationItems(document);
const path = getDistPath(version);
if (fs.existsSync(path)) throw new Error(`${path}がすでに存在します`);

fs.writeFileSync(path, createCode(version, navigationItems));
console.log(`${path}に保存しました`);

/* -------------------------------------------------------------------------- */

/** TailwindCSSのドキュメントバージョンを取得 */
function getDocumentationVersion(document: Document): string {
  return document.querySelector("div > div > div > div > div > div > button")?.textContent ?? "";
}

/* -------------------------------------------------------------------------- */

type Navigation = {
  readonly category: string;
  readonly urls: readonly string[];
};

/** TailwindCSSのページのサイドメニューからナビゲーション情報を取得 */
function getNavigationItems(document: Document): readonly Navigation[] {
  return getNavChildren(getNav(document))
    .filter((v) => isCategory(getCategory(v)))
    .map((v) => {
      return {
        category: getCategory(v)!,
        urls: getUrls(v),
      };
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

function getCategory(child: HTMLDivElement): string | undefined {
  return child.querySelector("h3")?.textContent ?? undefined;
}

function getUrls(child: HTMLElement): readonly string[] {
  return Array.from(child.querySelectorAll<HTMLAnchorElement>("ul > li > a")).map((v) => {
    return `https://tailwindcss.com${v.href}`;
  });
}

/* -------------------------------------------------------------------------- */

/** 出力先パスを取得 */
function getDistPath(version: string): string {
  return `./src/infrastructure/documentations/navigationItems_${version}.ts`;
}

/** ファイルに書き込むコードを作成 */
function createCode(version: string, navigationItems: readonly Navigation[]): string {
  return `export const version = "${version}";
export const navigationItems = ${JSON.stringify(navigationItems, null, 4)}`;
}
