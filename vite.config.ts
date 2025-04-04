import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        host: true,
    },
    build: {
        outDir: "docs",
        chunkSizeWarningLimit: 1500,
    },
    base: "/tailwindcss-japanese-cheat-sheet-v4/",
});
