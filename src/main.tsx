import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './StoreProvider'
import 'normalize.css'
import './styles/fonts.scss'
import './styles/index.scss'

import { passiveSupport } from 'passive-events-support/src/utils'
import { AppConfigWrapper } from './AppConfigWrapper'
import Snowfall from 'react-snowfall'
passiveSupport({ debug: false })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <StoreProvider>
            <Snowfall
                snowflakeCount={25}
                style={{ zIndex: 9999999, opacity: 5, position: 'fixed', width: '100vw', height: '100vh' }}
            />
            <AppConfigWrapper />
        </StoreProvider>
    </BrowserRouter>,
)
