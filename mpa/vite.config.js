import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const foldername = dirname(fileURLToPath(import.meta.url));
console.log(foldername);

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        login: resolve(foldername, '/pages/login-page.html'),
        profile: resolve(foldername, '/pages/profile-page.html'),
        select: resolve(foldername, '/pages/select-page.html'),
        home: resolve(foldername, '/pages/home-page.html'),
      }
    }
  }
});