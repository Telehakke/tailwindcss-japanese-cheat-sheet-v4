import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import solid from "eslint-plugin-solid/configs/typescript";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    { ignores: ["docs"] },
    {
        files: ["**/*.{ts,tsx}"],
        ...solid,
    },
    {
        files: ["**/*.{ts,tsx}"],
        ...jsxA11y.flatConfigs.recommended,
    },
]);
