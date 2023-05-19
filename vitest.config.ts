import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";
import { configDefaults, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/],
      },
      coverage: {
        provider: "istanbul",
        enabled: true,
        branches: 100,
        statements: 90,
        functions: 90,
        lines: 90,
        all: true,
        exclude: [
          "data/**",
          "main.ts",
          "router/**",
          "**/**{Container, container}.vue",
          "**/{Default, default}**.ts",
        ],
      },
      globals: true,
    },
  })
);
