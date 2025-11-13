import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  // 依據 mode 載入 .env, .env.development, .env.production 等
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_BASE_URL || '/', // 安全預設
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})





