import {
  defineConfig
} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "components": path.resolve(__dirname, "./src/components"),
      // eslint-disable-next-line no-undef
      "containers": path.resolve(__dirname, "./src/containers"),
      // eslint-disable-next-line no-undef
      "contexts": path.resolve(__dirname, "./src/context"),
      // eslint-disable-next-line no-undef
      "hooks": path.resolve(__dirname, "./src/hooks"),
      // eslint-disable-next-line no-undef
      "pages": path.resolve(__dirname, "./src/pages"),
      // eslint-disable-next-line no-undef
      "styles": path.resolve(__dirname, "./src/styles"),
      // eslint-disable-next-line no-undef
      "icons": path.resolve(__dirname, "./src/assets/icons"),
      // eslint-disable-next-line no-undef
      "errors": path.resolve(__dirname, "./src/assets/error404"),
      // eslint-disable-next-line no-undef
      "logos": path.resolve(__dirname, "./src/assets/logos"),
    }
  }
})