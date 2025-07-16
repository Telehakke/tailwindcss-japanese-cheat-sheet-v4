import fs from "fs";
import { setTimeout } from "timers/promises";
import { navigations, version } from "../app/data/navigations_v4.1";
import type { Documentation } from "../app/models/types";
import createDom from "./models/createDom";
import DocumentationExtractor from "./models/documentationExtractor";

/* 【注意】このスクリプトを一度実行すると、完了までに約27分かかる */

const total = navigations.reduce((total, value) => {
    total += value.urls.length;
    return total;
}, 0);
let count = 0;
const documentationsMap = new Map<string, Documentation[]>();

outer: for (const navigation of navigations) {
    const category = navigation.category;
    console.log(category);

    for (const url of navigation.urls) {
        try {
            const document = await createDom(url);
            const documentationExtractor = new DocumentationExtractor(document);
            const entry = documentationExtractor.getEntry();
            const documentation: Documentation = {
                url: url,
                entry: entry,
                description: documentationExtractor.getDescription(),
                parameters: documentationExtractor.getParameters(),
            };
            if (documentationsMap.has(category)) {
                documentationsMap.get(category)?.push(documentation);
            } else {
                documentationsMap.set(category, [documentation]);
            }

            count += 1;
            console.log(`${count} / ${total} - ${entry}`);

            // サーバーに負荷を掛けないよう、アクセスごとに10秒待機
            if (count < total) {
                await setTimeout(10000);
            }
        } catch (error) {
            console.log(error);
            break outer;
        }
    }
}

// TSファイルを作成し、src/app/dataディレクトリに保存
// prettier-ignore
for (const category of documentationsMap.keys()) {
    const documentations = documentationsMap.get(category);
    const code = 
`export const version = "${version}";
export const documentations = ${JSON.stringify(documentations, null, 4)}`;

    const path = `./src/app/data/${category}_${version}.ts`;
    fs.writeFileSync(path, code);
}
