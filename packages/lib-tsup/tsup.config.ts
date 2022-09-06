import { defineConfig } from 'tsup'

export default defineConfig({
    entry: {
      index: 'src/index.ts'
    },
    format: [
        'cjs',
        'esm',
        'iife'
    ],
    dts: true,
    external: [

    ],
    treeshake: true,
    // legacyOutput: true
    // minify: true,
    loader: {
        '.js':'jsx'
    },
    splitting: false
    // target: 'es5'
})
