import react from "@vitejs/plugin-react"
import ssr from "vike/plugin"

export default {
  plugins: [
    react({
      include: ["**/*.mjs", "**/*.jsx", ".js"],
    }),
    ssr({
      prerender: true,
    }),
  ],
}
