import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Required for Capacitor Android — assets use relative paths
  build: {
    outDir: 'dist',
  },
});
