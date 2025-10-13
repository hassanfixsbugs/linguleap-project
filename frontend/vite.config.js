import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    exclude: [
      'eslint',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      '@eslint/js',
      'typescript-eslint',
      'eslint-plugin-prettier'
    ]
  },
  server: {
    proxy: {
      "/auth": "http://localhost:5000",
      "/articles": "http://localhost:5000",
    },
  },
});