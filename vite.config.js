import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@c": path.resolve(__dirname, "./src/components"),
      "@const": path.resolve(__dirname, "./src/const"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
