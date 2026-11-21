import type { Language } from "../../domain/models/language";

/** 言語に応じたUIラベルを作成 */
export const createUILabel = (language: Language): UILabel => {
  if (language === "ja") return JA;
  return EN;
};

/* -------------------------------------------------------------------------- */

type UILabel = Readonly<{
  expand: string;
  collapse: string;
  copied: string;
}>;

const EN: UILabel = {
  expand: "Expand",
  collapse: "Collapse",
  copied: "Copied",
};

const JA: UILabel = {
  expand: "展開",
  collapse: "折りたたむ",
  copied: "コピーしました",
};
