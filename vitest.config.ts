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
        src: ["./src/features"],
        exclude: [
          "**/**{Container,container}.vue",
          "**/{Default,default}**.*",
          "**/**.stories.ts",
          "**/{Story, story}**.*",
          "**/**.test.ts",
          "**/**{TestBed}.*",
          "**/**.routes.*",
          "**/index.*",
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
