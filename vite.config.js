import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'


const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
});
