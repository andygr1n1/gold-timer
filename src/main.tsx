import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './modules/app/App'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './styles/index.scss'

// const handler = () => undefined
// document.addEventListener('touchstart', handler, { passive: true })
// document.addEventListener('touchend', handler, { passive: true })
// document.addEventListener('wheel', handler, { passive: true })
// document.addEventListener('touchstart', handler, { passive: true })
// document.addEventListener('touchend', handler, { passive: true })
// document.addEventListener('wheel', handler, { passive: true })

// *
//
// important to inject query into window
// it saves react hmr
window.queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={window.queryClient}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            {/* <SnowfallAnimation /> */}
            <App />
        </GoogleOAuthProvider>
    </QueryClientProvider>,
)
