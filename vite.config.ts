import { defineConfig, loadEnv } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'
import { outputPluginStats } from './vite.outputPluginStats.plugin'
import { requestAnalytics } from './vite.requestAnalytics.plugin'
import { hotUpdateReport } from './vite.hotUpdateReport.plugin'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
    // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

    return defineConfig({
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
            macrosPlugin(),
            requestAnalytics(),
            outputPluginStats(),
            hotUpdateReport(),
        ],

        resolve: {
            alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
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
                output: {
                    manualChunks: {
                        antd: ['antd'],
                        'react-day-picker': ['react-day-picker'],
                    },
                },
            },
        },
    })
}
