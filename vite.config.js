import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Apunta '@' directamente a la carpeta 'd' donde tienes components, lib, pages, etc.
      '@': path.resolve(__dirname, './dir'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
});