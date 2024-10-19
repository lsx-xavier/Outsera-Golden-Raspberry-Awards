/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, UserConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.tsx",
    globalSetup: "./src/test/globals.ts",
  },
}) satisfies UserConfig;
