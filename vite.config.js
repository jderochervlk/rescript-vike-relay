import react from "@vitejs/plugin-react";
import ssr from "vike/plugin";
import relay from "vite-plugin-relay";
export default {
  plugins: [
    react({
      include: ["**/*.mjs", "**/*.jsx", ".js"],
    }),
    ssr({
      prerender: true,
    }),
    // relay,
  ],
};
