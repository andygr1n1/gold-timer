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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        {/* <SnowfallAnimation /> */}
        <App />
    </>,
)
