import fs from "fs";
import createDom from "./models/createDom";
import NavigationExtractor from "./models/navigationExtractor";

// 指定したURLにアクセスしDOMを生成
const url = "https://tailwindcss.com/docs/installation/using-vite";

const document = await createDom(url);

// サイドメニューからチートシートに必要な項目を取得
const navigationExtractor = new NavigationExtractor(document);
const navigations = navigationExtractor.getNavigations();
const version = navigationExtractor.getVersion();

// TSファイルを作成し、src/app/dataディレクトリに保存
// prettier-ignore
const code =
`export const version = "${version}";
export const navigations = ${JSON.stringify(navigations, null, 4)}`;

const path = `./src/app/data/navigations_${version}.ts`;
fs.writeFileSync(path, code);
