import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './modules/app/App'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './styles/index.scss'

window.queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={window.queryClient}>
        {/* <SnowfallAnimation /> */}
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
    </QueryClientProvider>,
)
