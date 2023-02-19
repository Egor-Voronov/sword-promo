import { fileURLToPath, URL } from "node:url";
import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      runtimeOnly: false,
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/utils/i18n/locales/**"
      ),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/index.scss';`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./src/assets", import.meta.url)),
    },
  },
});
