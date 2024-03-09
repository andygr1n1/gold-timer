import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/index.scss'

const handler = () => undefined
document.addEventListener('touchstart', handler, { passive: true })
document.addEventListener('touchend', handler, { passive: true })
document.addEventListener('wheel', handler, { passive: true })
document.addEventListener('touchstart', handler, { passive: true })
document.addEventListener('touchend', handler, { passive: true })
document.addEventListener('wheel', handler, { passive: true })

console.info('environment', import.meta.env.VITE_NODE_ENV)

import { QueryClient } from '@tanstack/react-query'

// *
//
// important to inject query into window
// it saves react hmr
window.queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        {/* <SnowfallAnimation /> */}
        <App />
    </>,
)
