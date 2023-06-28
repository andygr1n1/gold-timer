import { AppRoutes } from './AppRoutes'
import { useRootStore } from './StoreProvider'
import { observer } from 'mobx-react-lite'
import { SideMenu } from './components-layout/side-menu/SideMenu'
import { useAppInit } from './hooks/useAppInit.hook'
import { XLoader } from './components-x/x-loader/XLoader'
import { FocusGoalOfWeek } from './components-modal-windows/focus-goal-of-week/FocusGoalOfWeek'
import { AnonymousRoutes } from './AnonymousRoutes'
import { useEffect } from 'react'
import { getUserCookie } from './helpers/universalCookie.helper'
import { useTheming } from './hooks/useTheming.hook'
import { LoginStoreProvider } from './modules/login/mst/LoginStoreProvider'

export const App = observer(() => {
    const {
        user$: { isAuthenticated, onChangeField },
    } = useRootStore()
    const getUserIdCookie = getUserCookie()
    if (getUserIdCookie) onChangeField('id', getUserIdCookie)

    useEffect(() => {
        ;(async () => {
            useTheming.applyLocalStorage()

            // const filtersRes: typeof rootStore$.goals$.goals_checked_list_filter | null = await getGoalFiltersStore()
            // if (filtersRes) {
            //     rootStore$.goals$.onChangeField('goals_checked_list_filter', filtersRes)
            // } else {
            //     setGoalFiltersStore(rootStore$.goals$.goals_checked_list_filter)
            // }
            // onSnapshot(rootStore$.goals$.goals_checked_list_filter, (sn) => setGoalFiltersStore(sn))
        })()

        const handler = () => {
            // e.preventDefault()
        }

        document.addEventListener('touchstart', handler, { passive: true })
        document.addEventListener('touchend', handler, { passive: true })
        document.addEventListener('wheel', handler, { passive: true })
    }, [])
    if (!isAuthenticated) {
        if (getUserIdCookie) return null

        return (
            <LoginStoreProvider>
                <AnonymousRoutes />
            </LoginStoreProvider>
        )
    }

    return <ProtectedSide />
})

export const ProtectedSide = observer(() => {
    const {
        isValidating,
        user$: { hasGoalsOfWeekAddon },
    } = useRootStore()

    useAppInit()

    return isValidating ? (
        <XLoader />
    ) : (
        <>
            {hasGoalsOfWeekAddon && <FocusGoalOfWeek />}
            <div className='app'>
                <SideMenu />
                <div className='app-body w-full flex-auto flex-col'>
                    <div className='module-wrapper'>
                        <AppRoutes />
                    </div>
                </div>
            </div>
        </>
    )
})
