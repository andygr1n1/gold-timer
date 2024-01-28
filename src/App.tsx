import { BrowserRouter } from 'react-router-dom'
import { useAtom } from 'jotai'
import { loginAtom } from './modules/login/stores/login.store'
import { AppProtected } from './AppProtected'
import { AnonymousRoutes } from './AnonymousRoutes'

export const App = () => {
    const [login] = useAtom(loginAtom)

    return (
        <BrowserRouter>
            {!login.user_id && <AnonymousRoutes />}

            {login.user_id && <AppProtected user_id={login.user_id} />}
        </BrowserRouter>
    )
}
