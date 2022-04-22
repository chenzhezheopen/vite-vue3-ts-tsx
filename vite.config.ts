import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
const { resolve } = require("path");
export default defineConfig({
  plugins: [vue(),vueJsx()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  }
})
