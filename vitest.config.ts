import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";
import { configDefaults, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      exclude: [...configDefaults.exclude, "e2e/*"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/],
      },
      coverage: {
        enabled: true,
        branches: 100,
        statements: 90,
        functions: 90,
        lines: 90,
        all: true,
        exclude: [
          "src/data/**",
          "src/main.ts",
          "src/router/**",
          "**/**{Container, container}.vue",
          "**/{Default, default}**.ts",
          "src/coverage/**",
          ".storybook/**",
          "**/**.stories.ts",
          "src/shims-vue.d.ts",
          "env.d.ts",
          "vite.config.ts",
          "vitest.config.ts",
          "src/App.vue",
          "cypress.config.ts",
          "cypress",
        ],
      },
      globals: true,
    },
    resolve: {
      alias: {
        "@storybook/jest": "vitest",
      },
    },
  })
);
