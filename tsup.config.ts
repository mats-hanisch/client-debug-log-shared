import { defineConfig } from 'tsup';


export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    platform: 'node',
    target: 'node18',
    outDir: 'dist',
    sourcemap: true,
    splitting: false,
    shims: true,
    dts: true,
    clean: true
});
