import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './StoreProvider'
import 'normalize.css'
import './styles/fonts.scss'
import './styles/index.scss'

import { passiveSupport } from 'passive-events-support/src/utils'
import { AppConfigWrapper } from './AppConfigWrapper'
passiveSupport({ debug: false })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <StoreProvider>
            <AppConfigWrapper />
        </StoreProvider>
    </BrowserRouter>,
)
