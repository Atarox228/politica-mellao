import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/politica-mellao/',   // ← el nombre exacto de tu repositorio en GitHub
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});