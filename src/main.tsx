import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { App } from './modules/app/App'
import { App as AntdApp } from 'antd'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './styles/index.css'
import { SnowfallAnimation } from './components/SnowfallAnimation'
import { root$, Root$Provider } from './modules/app/mst/StoreProvider'
const queryClient = new QueryClient()

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SnowfallAnimation />
            <ReactQueryDevtools initialIsOpen={false} />
            <AntdApp className='w-full h-full flex text-cText'>
                <Root$Provider store={root$}>
                    <App />
                </Root$Provider>
            </AntdApp>
            <Toaster
                toastOptions={{
                    duration: 4000,
                    style: { boxShadow: '0 2px 9px 3px rgba(0, 0, 0, 0.25) !important' },
                    className: '!bg-global-bg-plasma !text-cText !backdrop-blur-sm',
                    error: {
                        duration: 4000,
                    },
                }}
            />
        </QueryClientProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
