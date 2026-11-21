import type { JSX } from "react/jsx-runtime";

export const OSSLicense = (): JSX.Element => {
  return (
    <a className="underline" href={url} target="_blank">
      OSSライセンス
    </a>
  );
};

const url =
  "https://github.com/Telehakke/tailwindcss-japanese-cheat-sheet-v4/blob/main/docs/licenses.md";
