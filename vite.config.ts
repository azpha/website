import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssr: {
    // react-router-dom's "node" export condition points at its CommonJS build,
    // so SSR would otherwise get a module whose named exports all hang off
    // `.default` — every `import { Routes } from "react-router-dom"` throws at
    // request time in dev. "module-sync" selects the ESM entry instead.
    resolve: {
      conditions: [
        "module-sync",
        "module",
        "browser",
        "development|production",
      ],
      externalConditions: ["module-sync", "node", "import"],
    },
  },
});
