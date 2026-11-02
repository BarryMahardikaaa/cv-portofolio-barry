import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" supaya hasil build bisa dibuka dari folder mana pun
// (GitHub Pages subpath, file lokal, dll.)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
