import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { StoreProvider } from './StoreProvider'
import { ConfigProvider } from 'antd'
import 'normalize.css'
import './styles/fonts.scss'
import './styles/root_variables.scss'
import './styles/index.css'
import './styles/antdRedesign.css'

import { passiveSupport } from 'passive-events-support/src/utils'
passiveSupport({ debug: false })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <StoreProvider>
            <ConfigProvider theme={{ token: { colorPrimary: '#41313B' } }}>
                <App />
            </ConfigProvider>
        </StoreProvider>
    </BrowserRouter>,
)
