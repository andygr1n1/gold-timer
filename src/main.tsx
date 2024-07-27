import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './modules/app/App'
import { App as AntdApp } from 'antd'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './styles/index.scss'
import { SnowfallAnimation } from './components/SnowfallAnimation'

const queryClient = new QueryClient()

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SnowfallAnimation />
            <ReactQueryDevtools initialIsOpen={false} />
            <AntdApp className='w-full h-full flex text-cText'>
                <App />
            </AntdApp>
        </QueryClientProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
