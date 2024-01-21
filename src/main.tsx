import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './StoreProvider'
import 'normalize.css'
import './styles/index.scss'

import { passiveSupport } from 'passive-events-support/src/utils'
import { AppConfigWrapper } from './AppConfigWrapper'
import Snowfall from 'react-snowfall'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

passiveSupport({ debug: false })

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <StoreProvider>
            <Snowfall
                snowflakeCount={25}
                style={{ zIndex: 9999999, opacity: 5, position: 'fixed', width: '100vw', height: '100vh' }}
            />
            <QueryClientProvider client={queryClient}>
                <AppConfigWrapper />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </StoreProvider>
    </BrowserRouter>,
)
