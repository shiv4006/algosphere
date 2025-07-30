// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Requests to /api will be proxied to your backend
      '/api': {
        target: 'http://localhost:3000', // Your backend server
        changeOrigin: true, // Recommended for virtual hosted sites
        // secure: false,      // Uncomment if your backend is not HTTPS
        // rewrite: (path) => path.replace(/^\/api/, ''), // Use if your backend doesn't expect /api prefix
      },
    },
  },
});