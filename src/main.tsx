import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './modules/app/App'
import { App as AntdApp } from 'antd'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './styles/index.scss'
import { SnowfallAnimation } from './components/SnowfallAnimation'
import { Provider } from 'urql'
import { generateURQLClient } from './graphql/client'
const queryClient = new QueryClient()

const Main = () => {
    return (
        <Provider value={generateURQLClient()}>
            <QueryClientProvider client={queryClient}>
                <SnowfallAnimation />
                <ReactQueryDevtools initialIsOpen={false} />
                <AntdApp className='w-full h-full flex text-cText'>
                    <App />
                </AntdApp>
            </QueryClientProvider>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
