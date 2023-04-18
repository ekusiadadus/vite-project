import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "src/components/Button"),
      formats: ["umd"],
      name: "buttonId",
      fileName: "button-id",
    },
  },
  define: {
    "process.env": {},
  },
});
