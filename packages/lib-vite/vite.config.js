import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import path from 'path'
import dts from 'vite-plugin-dts'

const name = "index";

// https://vitejs.dev/config/
export default defineConfig({
    root: 'src',
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: 'ui',
            fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
        },
      outDir: '../dist',
      emptyOutDir: false
    },
    rollupOptions: {
        external: [],
        output: {
          globals: {

          },
        },
    },
    define: { 'process.env.NODE_ENV': '"production"' },
    plugins: [
        EnvironmentPlugin({
            NODE_ENV: 'production',
        }),
        dts()
    ]
})
