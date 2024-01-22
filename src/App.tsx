import { BrowserRouter } from 'react-router-dom'
import { useAtom } from 'jotai'
import { loginAtom } from './stores/login.store'
import { AppProtected } from './AppProtected'
import { AppAnonymous } from './AppAnonymous'
import { useUserCookie } from './hooks/useUserCookie.hook'
import { useUserTheming } from './hooks/useUserTheming.hook'

export const App = () => {
    const [{ user_id }] = useAtom(loginAtom)
    useUserCookie()
    useUserTheming()

    return (
        <BrowserRouter>
            {!user_id && <AppAnonymous />}
            {user_id && <AppProtected user_id={user_id} />}
        </BrowserRouter>
    )
}
