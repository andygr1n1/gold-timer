import { BrowserRouter } from 'react-router-dom'
import { useAtom } from 'jotai'
import { loginAtom } from './modules/login/stores/login.store'
import { AppProtected } from './AppProtected'
import { AnonymousRoutes } from './AnonymousRoutes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// *
//
// important to inject query into window
// it saves react hmr
window.queryClient = new QueryClient()

export const App = () => {
    const [login] = useAtom(loginAtom)
    return (
        <QueryClientProvider client={window.queryClient}>
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                {!login.user_id && <AnonymousRoutes />}

                {login.user_id && <AppProtected user_id={login.user_id} />}
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
