/** ホワイトスペースを区切り文字として文字列を分割する */
export const splitByWhitespace = (value: string): string[] => {
  return value.split(/\s+/).filter((v) => v.length > 0);
};
