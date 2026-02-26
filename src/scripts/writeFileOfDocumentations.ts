import fs from "fs";
import { setTimeout } from "timers/promises";
import { navigationItems, version } from "../app/data/navigationItems_v4.2";
import type { Documentation } from "../app/models/cheatSheetData";
import { createDom } from "./createDom";

/* 【注意】このスクリプトを一度実行すると、完了までに約27分かかる */

const total = countUrlsOfNavigationItems();
let count = 0;

for (const { category, urls } of navigationItems) {
    console.log(category);
    const path = createPath(category);
    if (fs.existsSync(path)) throw new Error(`${path}がすでに存在します`);

    const documentations: Documentation[] = [];
    for (const url of urls) {
        const document = await createDom(url);
        const entry = getEntry(document);
        documentations.push({
            url: url,
            entry: entry,
            description: getDescription(document),
            parameters: getParameters(document),
        });
        count += 1;
        console.log(`${count} / ${total}: ${entry}`);
        // サーバーに負荷を掛けないよう、アクセスごとに10秒待機
        if (count < total) await setTimeout(10000);
    }

    fs.writeFileSync(path, createCode(documentations));
    console.log(`${path}に保存しました`);
}

/* -------------------------------------------------------------------------- */

function countUrlsOfNavigationItems(): number {
    return navigationItems.reduce((total, value) => {
        total += value.urls.length;
        return total;
    }, 0);
}

/**
 * TailwindCSSのページから見出しを取得
 */
function getEntry(document: Document): string {
    const text = document.querySelector("h1")?.textContent;
    if (text == null) throw new Error("entryが見つかりませんでした");
    return text;
}

/**
 * TailwindCSSのページから説明を取得
 */
function getDescription(document: Document): string {
    const text = document.querySelector("h1~p")?.textContent;
    if (text == null) throw new Error("descriptionが見つかりませんでした");
    return text;
}

/**
 * TailwindCSSのページからクラス名とそれに対応するCSSスタイルを全て取得
 */
function getParameters(document: Document): string[][] {
    const selector = "div#quick-reference > div > table > tbody";
    return Array.from(document.querySelectorAll(selector))
        .map((tbody) => {
            return Array.from(tbody.querySelectorAll("tr")).map((tr) => {
                return Array.from(tr.querySelectorAll("td")).map((td) => {
                    return td.textContent ?? "";
                });
            });
        })
        .flat();
}

/* -------------------------------------------------------------------------- */

function createPath(category: string): string {
    return `./src/app/data/${category}_${version}.ts`;
}

function createCode(documentations: Documentation[]): string {
    return `export const version = "${version}";
export const documentations = ${JSON.stringify(documentations, null, 4)}`;
}
