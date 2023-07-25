import { ResolvedConfig } from 'vite'

export const outputPluginStats = () => ({
    name: 'output-plugin-stats',
    configResolved(config: ResolvedConfig) {
        const plugins = config.plugins.map((plugin) => plugin.name)
        console.log(`Your project has ${plugins.length} Vite plugins.`)
        console.table(plugins)
    },
})
