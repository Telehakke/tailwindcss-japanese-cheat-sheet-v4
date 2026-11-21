/** switch文の網羅性チェック */
export const exhaustiveCheck = (value: never): void => {
  throw new Error(value);
};
