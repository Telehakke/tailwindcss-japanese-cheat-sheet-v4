export default class Split {
    static byWhiteSpace = (text: string): string[] => {
        return text.split(/\s+/).filter((v) => v.length > 0);
    };
}
