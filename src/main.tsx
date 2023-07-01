import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './StoreProvider'
import { ConfigProvider } from 'antd'
import 'normalize.css'
import './styles/fonts.scss'
import './styles/root_variables.scss'
import './styles/index.css'
import './styles/antdRedesign.css'

import { passiveSupport } from 'passive-events-support/src/utils'
import { AppConfigWrapper } from './AppConfigWrapper'
passiveSupport({ debug: false })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <StoreProvider>
            <ConfigProvider theme={{ token: { colorPrimary: '#60a5fa' } }}>
                <AppConfigWrapper />
            </ConfigProvider>
        </StoreProvider>
    </BrowserRouter>,
)
