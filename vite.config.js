import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/index/",
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@css": "/src/assets/css",
      "@pages": "/src/pages",
      "@datas": "/src/datas",
      "@": "/src"
    }
  }
});
