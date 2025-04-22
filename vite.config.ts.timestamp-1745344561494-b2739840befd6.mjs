// vite.config.ts
import { defineConfig } from "file:///D:/SSD_Optimization/User/Desktop/tedx-iut-2025/node_modules/vite/dist/node/index.js";
import react from "file:///D:/SSD_Optimization/User/Desktop/tedx-iut-2025/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { VitePWA } from "file:///D:/SSD_Optimization/User/Desktop/tedx-iut-2025/node_modules/vite-plugin-pwa/dist/index.js";
import tailwindcss from "file:///D:/SSD_Optimization/User/Desktop/tedx-iut-2025/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/SSD_Optimization/User/Desktop/tedx-iut-2025/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig({
  server: {
    port: 3010
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      }
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTU0RfT3B0aW1pemF0aW9uXFxcXFVzZXJcXFxcRGVza3RvcFxcXFx0ZWR4LWl1dC0yMDI1XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxTU0RfT3B0aW1pemF0aW9uXFxcXFVzZXJcXFxcRGVza3RvcFxcXFx0ZWR4LWl1dC0yMDI1XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9TU0RfT3B0aW1pemF0aW9uL1VzZXIvRGVza3RvcC90ZWR4LWl1dC0yMDI1L3ZpdGUuY29uZmlnLnRzXCI7Ly8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuLy8gZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuLy8gICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbi8vIH0pXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMTBcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcclxuICAgICAgZGV2T3B0aW9uczoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgdGFpbHdpbmRjc3MoKSxcclxuICAgICAgICBhdXRvcHJlZml4ZXIoKSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFLQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sa0JBQWtCO0FBRXpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
