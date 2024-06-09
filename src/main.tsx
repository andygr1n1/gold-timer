import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './modules/app/App'
import './styles/index.scss'

window.queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={window.queryClient}>
        {/* <SnowfallAnimation /> */}
        <App />
    </QueryClientProvider>,
)
