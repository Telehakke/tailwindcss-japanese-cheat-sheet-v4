/** オブジェクトのバリューを半角スペースで連結した文字列を返す */
export const joinObjectValues = (obj: Record<string, string>): string => {
  return Object.values(obj).join(" ");
};
