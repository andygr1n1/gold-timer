import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { StoreProvider } from './StoreProvider'
import 'normalize.css'
import 'material-icons/iconfont/material-icons.css'
import './styles/fonts.scss'
import './styles/root_variables.scss'
import './styles/antd.css'
import './styles/index.css'

import { passiveSupport } from 'passive-events-support/src/utils'
passiveSupport({ debug: false })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,
)
