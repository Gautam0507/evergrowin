import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/evergrowin",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: "src/main.jsx",
    },
  },
  optimizeDeps: {
    include: ["react-router-dom"],
  },
});
