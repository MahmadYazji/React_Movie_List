import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Replace 'your-repo-name' with the actual repository name
  base: "/your-repo-name/",
  plugins: [react()],
});
