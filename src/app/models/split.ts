export const splitByWhitespace = (value: string): string[] => {
    return value.split(/\s+/).filter((v) => v.length > 0);
};
