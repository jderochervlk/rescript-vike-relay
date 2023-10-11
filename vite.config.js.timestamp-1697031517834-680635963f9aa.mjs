// vite.config.js
import react from "file:///home/josh/Dev/rescript-vike/node_modules/@vitejs/plugin-react/dist/index.mjs";
import ssr from "file:///home/josh/Dev/rescript-vike/node_modules/vike/dist/esm/node/plugin/index.js";
var vite_config_default = {
  plugins: [
    react({
      include: ["**/*.mjs", "**/*.jsx", ".js"]
    }),
    ssr({
      prerender: true
    })
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qb3NoL0Rldi9yZXNjcmlwdC12aWtlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9qb3NoL0Rldi9yZXNjcmlwdC12aWtlL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2pvc2gvRGV2L3Jlc2NyaXB0LXZpa2Uvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCJcbmltcG9ydCBzc3IgZnJvbSBcInZpa2UvcGx1Z2luXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3Qoe1xuICAgICAgaW5jbHVkZTogW1wiKiovKi5tanNcIiwgXCIqKi8qLmpzeFwiLCBcIi5qc1wiXSxcbiAgICB9KSxcbiAgICBzc3Ioe1xuICAgICAgcHJlcmVuZGVyOiB0cnVlLFxuICAgIH0pLFxuICBdLFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUSxPQUFPLFdBQVc7QUFDeFIsT0FBTyxTQUFTO0FBRWhCLElBQU8sc0JBQVE7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFNBQVMsQ0FBQyxZQUFZLFlBQVksS0FBSztBQUFBLElBQ3pDLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLFdBQVc7QUFBQSxJQUNiLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
