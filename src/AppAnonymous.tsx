import { observer } from 'mobx-react-lite'
import { LoginStoreProvider } from './modules/login/mst/LoginStoreProvider'
import { AnonymousRoutes } from './AnonymousRoutes'

export const AppAnonymous: React.FC = observer(() => {
    return (
        <LoginStoreProvider>
            <AnonymousRoutes />
        </LoginStoreProvider>
    )
})
