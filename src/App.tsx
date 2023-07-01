import { useRootStore } from './StoreProvider'
import { observer } from 'mobx-react-lite'
import { getUserCookie } from './helpers/universalCookie.helper'
import { AppProtected } from './AppProtected'
import { AppAnonymous } from './AppAnonymous'

export const App = observer(() => {
    const {
        user$: { isAuthenticated, onChangeField },
    } = useRootStore()

    const getUserIdCookie = getUserCookie()
    if (getUserIdCookie) onChangeField('id', getUserIdCookie)

    if (!isAuthenticated && !getUserIdCookie) {
        return <AppAnonymous />
    }

    return <AppProtected />
})
