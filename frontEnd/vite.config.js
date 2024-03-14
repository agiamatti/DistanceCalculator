import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // making "process.env" available for vite
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },
    build: {
      outDir: 'build',
    },
    server: {
      port: 3010,
    },
    plugins: [react()],

  };
});
