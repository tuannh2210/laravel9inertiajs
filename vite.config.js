import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        vue(),
    ],
    server: {
        https: false,
        hmr: {
            host: "localhost",
        },
    },
    resolve: {
        alias: {
            "@": "/resources/ts",
            "~@coreui": path.resolve(__dirname, "./node_modules/@coreui"),
        },
    },
});
