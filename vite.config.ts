import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        libInjectCss(),
        dts({ include: ["src"], exclude: ["src/**/*.spec.tsx"] }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
                additionalData: ['@use "./src/styles/index.scss" as *;'],
            },
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            formats: ["es"],
        },
        copyPublicDir: false,
        rollupOptions: {
            external: ["react", "react/jsx-runtime", 'react-dom'],
            input: Object.fromEntries(
                glob
                    .sync("src/**/*.{ts,tsx}", {
                        ignore: [
                            "**/*.test.ts",
                            "**/*.test.tsx",
                            "**/*.spec.ts",
                            "**/*.spec.tsx",
                            "**/__tests__/**",
                        ],
                    })
                    .map((file) => {
                        return [
                            // The name of the entry point
                            // src/nested/foo.ts becomes nested/foo
                            relative(
                                "src",
                                file.slice(
                                    0,
                                    file.length - extname(file).length,
                                ),
                            ),
                            // The absolute path to the entry file
                            // src/nested/foo.ts becomes /project/src/nested/foo.ts
                            fileURLToPath(new URL(file, import.meta.url)),
                        ];
                    }),
            ),
            output: {
                assetFileNames: "assets/[name][extname]",
                entryFileNames: "[name].js",
            },
        },
    },
});
