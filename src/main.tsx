import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { App } from './modules/app/App'
import { SnowfallAnimation } from './components/SnowfallAnimation'
import { root$, Root$Provider } from './modules/app/mst/StoreProvider'
import { Provider } from 'react-redux'
import { root$ as reduxStore$ } from './store/root.store'
import { App as AntdApp } from 'antd'
import './styles/index.css'

/* for testing on mobile */
if (typeof crypto.randomUUID !== 'function') {
    crypto.randomUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0
            const v = c === 'x' ? r : (r & 0x3) | 0x8
            return v.toString(16)
        }) as `${string}-${string}-${string}-${string}-${string}`
    }
}


const queryClient = new QueryClient()

const Main = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <SnowfallAnimation />
            <AntdApp className='w-full h-full flex text-cText'>
                <Root$Provider store={root$}>
                    <Provider store={reduxStore$}>
                        <App />
                    </Provider>
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
