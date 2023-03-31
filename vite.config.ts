// vite.config.js
import path from 'path';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';
import { VarletUIResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({ resolvers: [VarletUIResolver()] }),
    autoImport({ resolvers: [VarletUIResolver({ autoImport: true })] })
  ],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } }
});