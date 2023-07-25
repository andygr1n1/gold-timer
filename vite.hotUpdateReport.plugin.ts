import { HmrContext } from 'vite'

export const hotUpdateReport = () => ({
    name: 'hot-update-report',
    handleHotUpdate(hmrContext: HmrContext) {
        console.log(`${hmrContext.timestamp}: ${hmrContext.modules.length} module(s) updated`)
    },
})
