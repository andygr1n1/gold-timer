import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './app/App'

import './styles/index.scss'

const handler = () => undefined
document.addEventListener('touchstart', handler, { passive: true })
document.addEventListener('touchend', handler, { passive: true })
document.addEventListener('wheel', handler, { passive: true })
document.addEventListener('touchstart', handler, { passive: true })
document.addEventListener('touchend', handler, { passive: true })
document.addEventListener('wheel', handler, { passive: true })

console.info('environment', import.meta.env.VITE_NODE_ENV)

// *
//
// important to inject query into window
// it saves react hmr
window.queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        {/* <SnowfallAnimation /> */}
        <QueryClientProvider client={window.queryClient}>
            <App />
        </QueryClientProvider>
    </>,
)
