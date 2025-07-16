import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [solid(), tailwindcss()],
    server: {
        host: true,
    },
    build: {
        outDir: "docs",
        chunkSizeWarningLimit: 1000,
    },
    base: "/tailwindcss-japanese-cheat-sheet-v4/",
});
