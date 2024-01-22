import ReactDOM from 'react-dom/client'
import { passiveSupport } from 'passive-events-support/src/utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnowfallAnimation } from './components/SnowfallAnimation'
import { App } from './App'
import './styles/index.scss'

passiveSupport({ debug: false })
const handler = () => undefined
document.addEventListener('touchstart', handler, { passive: true })
document.addEventListener('touchend', handler, { passive: true })
document.addEventListener('wheel', handler, { passive: true })
document.addEventListener('touchstart', handler, { passive: true })
document.addEventListener('touchend', handler, { passive: true })
document.addEventListener('wheel', handler, { passive: true })

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <SnowfallAnimation />
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </>,
)
