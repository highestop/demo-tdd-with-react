import reactRefresh from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // our 'index.html' is in src folder, not default project root folder. Noted that environment meta providers are also in root folder.
  root: "src/react",
  // build outdir is same as root by default, but we want to keep it in root project root folder, so this is relative to root.
  build: {
    outDir: "../../dist",
  },
  // use relative path to import files such as assets. Absolute '/' by default.
  server: {
    https: true,
    port: 8118,
  },
  plugins: [reactRefresh()],
});
