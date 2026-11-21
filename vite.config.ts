import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";

const tsEslintRecommended = {
  "@typescript-eslint/ban-ts-comment": "error",
  "no-array-constructor": "off",
  "@typescript-eslint/no-array-constructor": "error",
  "@typescript-eslint/no-duplicate-enum-values": "error",
  "@typescript-eslint/no-empty-object-type": "error",
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "@typescript-eslint/no-require-imports": "error",
  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  "@typescript-eslint/no-unsafe-declaration-merging": "error",
  "@typescript-eslint/no-unsafe-function-type": "error",
  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "error",
  "@typescript-eslint/no-wrapper-object-types": "error",
  "@typescript-eslint/prefer-as-const": "error",
  "@typescript-eslint/prefer-namespace-keyword": "error",
  "@typescript-eslint/triple-slash-reference": "error",
} as const;

// https://vitejs.dev/config/
export default defineConfig({
  fmt: {
    sortTailwindcss: true,
    ignorePatterns: ["docs/**", "src/application/documentations/*.ts"],
  },
  lint: {
    plugins: ["react", "typescript", "oxc"],
    rules: {
      "react/rules-of-hooks": "error",
      "react/only-export-components": ["warn", { allowConstantExport: true }],
      "vite-plus/prefer-vite-plus-imports": "error",
      ...tsEslintRecommended,
      "typescript/explicit-function-return-type": "error",
      "typescript/strict-boolean-expressions": "error",
      complexity: ["error", { max: 7 }],
    },
    options: { typeAware: true, typeCheck: true },
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    ignorePatterns: ["docs/**"],
    overrides: [
      {
        files: ["src/domain/**/*.ts"],
        rules: {
          "no-restricted-imports": [
            "error",
            {
              patterns: [
                {
                  group: ["**/application/**"],
                  message: "Domain層でApplication層をimportしてはいけません",
                },
                {
                  group: ["**/infrastructure/**"],
                  message: "Domain層でInfrastructure層をimportしてはいけません",
                },
                {
                  group: ["**/presentation/**"],
                  message: "Domain層でPresentation層をimportしてはいけません",
                },
              ],
            },
          ],
        },
      },
      {
        files: ["src/application/**/*.ts"],
        rules: {
          "no-restricted-imports": [
            "error",
            {
              patterns: [
                {
                  group: ["**/infrastructure/**"],
                  message: "Application層でInfrastructure層をimportしてはいけません",
                },
                {
                  group: ["**/presentation/**"],
                  message: "Application層でPresentation層をimportしてはいけません",
                },
              ],
            },
          ],
        },
      },
      { files: ["src/domain/**/*.test.ts"], rules: { "no-restricted-imports": "off" } },
      { files: ["src/application/**/*.test.ts"], rules: { "no-restricted-imports": "off" } },
    ],
  },
  plugins: lazyPlugins(() => [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()]),
  server: {
    host: true,
  },
  build: {
    outDir: "docs",
    license: { fileName: "licenses.md" },
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [{ name: "vendor", test: /node_modules/ }],
        },
      },
    },
  },
  test: { environment: "node", isolate: false },
  base: "/tailwindcss-japanese-cheat-sheet-v4/",
});
