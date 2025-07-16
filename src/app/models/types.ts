import type { JSX } from "solid-js/jsx-runtime";

export type Navigation = {
    category: string;
    urls: readonly string[];
};

export type Documentation = {
    url: string;
    entry: string;
    description: string;
    parameters: readonly string[][];
};

export type DocumentationDetails = {
    url: string;
    entry: string;
    description: string;
    details: [string, string, JSX.Element?][];
    parameters: readonly string[][];
};

export type Translation = {
    entry: string;
    description: string;
    details: [string, string, JSX.Element?][];
};

export type CheatSheetData = {
    category: string;
    categoryEN: string;
    documentationDetailsList: readonly DocumentationDetails[];
};
