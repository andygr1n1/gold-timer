import { ViteDevServer } from 'vite'

export const requestAnalytics = () => ({
    name: 'request-analytics',
    configureServer(server: ViteDevServer) {
        return () => {
            console.log(`env list:`)
            console.table(server.config.env)
            console.log(`Hi there!!! configureServer`, server)
            server.middlewares.use((req, _res, next) => {
                console.log(`${req.method.toUpperCase()} ${req.url}`)
                next()
            })
        }
    },
})
