import { useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './modules/app/App'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './styles/index.scss'

const Main = () => {
    const queryClient = useMemo(() => new QueryClient(), [])

    return (
        <QueryClientProvider client={queryClient}>
            {/* <SnowfallAnimation /> */}
            <ReactQueryDevtools initialIsOpen={false} />
            <App />
        </QueryClientProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
