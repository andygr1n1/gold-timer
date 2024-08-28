// import { defineConfig } from 'vitest/config'
import { defineConfig, loadEnv } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'
import { outputPluginStats } from './vite.outputPluginStats.plugin'
import { requestAnalytics } from './vite.requestAnalytics.plugin'
import { hotUpdateReport } from './vite.hotUpdateReport.plugin'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import Inspect from 'vite-plugin-inspect'
export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
    // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

    return {
        server: {
            host: '0.0.0.0',
            port: process.env.VITE_PORT ? Number(process.env.VITE_PORT) : 9999,
        },
        plugins: [
            react({
                babel: {
                    presets: ['jotai/babel/preset'],
                },
            }),
            NodeGlobalsPolyfillPlugin({
                buffer: true,
                process: true,
            }),
            macrosPlugin(),
            requestAnalytics(),
            outputPluginStats(),
            hotUpdateReport(),
            Inspect(),
        ],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './tests/setup',
        },
        resolve: {
            alias: [
                { find: '@', replacement: path.resolve(__dirname, 'src') },
                { find: 'tests', replacement: path.resolve(__dirname, 'tests') },
            ],
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    additionalData: '@root-entry-name: default;',
                },
            },
        },
        build: {
            sourcemap: true,
            chunkSizeWarningLimit: 1500,
            rollupOptions: {
                // temporary fix to ignore warnings related to source maps
                onwarn(warning, defaultHandler) {
                    if (warning.code === 'SOURCEMAP_ERROR') {
                        return
                    }

                    defaultHandler(warning)
                },
                output: {
                    manualChunks: {
                        antd: ['antd'],
                        'react-day-picker': ['react-day-picker'],
                    },
                },
            },
        },
        define: { global: 'window' },
    }
})
