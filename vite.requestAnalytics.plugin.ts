import { ViteDevServer } from 'vite'

export const requestAnalytics = () => ({
    name: 'request-analytics',
    configureServer(server: ViteDevServer) {
        return () => {
            console.table(server.config.env)
            server.middlewares.use((req, _res, next) => {
                console.warn(`${req.method.toUpperCase()} ${req.url}`)
                next()
            })
        }
    },
})
