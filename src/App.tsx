import { Sidebar } from './modules/sidebar/Sidebar'
import { AppRoutes } from './AppRoutes'
import { useRootStore } from './StoreProvider'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { RdLoader } from './components/loader/RdLoader'

export const App = observer(() => {
    const {
        user$: { id: user_id },
        fetchUserInfo,
    } = useRootStore()

    useEffect(() => {
        fetchUserInfo()

        const handler = () => {
            // e.preventDefault()
        }

        document.addEventListener('touchstart', handler, { passive: true })
        document.addEventListener('touchend', handler, { passive: true })
        document.addEventListener('wheel', handler, { passive: true })
    }, [])

    return user_id ? (
        <div className='app flex-col'>
            {/* <Topbar /> */}
            <div className='app-body'>
                <Sidebar />
                <div className='flex w-full flex-auto'>
                    <AppRoutes />
                </div>
            </div>
        </div>
    ) : (
        <RdLoader />
    )
})
