import { AppRoutes } from './AppRoutes'
import { rootStore$, useRootStore } from './StoreProvider'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { RdLoader } from './components/RdLoader'
import { getGoalFiltersStore, setGoalFiltersStore } from './functions/indexDbManager'
import { onSnapshot } from 'mobx-state-tree'
import { SideMenu } from './layout/side-menu/SideMenu'
import { useTheming } from './hooks/useTheming.hook'

export const App = observer(() => {
    const {
        user$: { id: user_id },
        fetchAppData,
        loading,
    } = useRootStore()

    useEffect(() => {
        ;(async () => {
            useTheming.applyLocalStorage()

            const filtersRes: typeof rootStore$.goals$.goals_checked_list_filter | null = await getGoalFiltersStore()

            if (filtersRes) {
                rootStore$.goals$.onChangeField('goals_checked_list_filter', filtersRes)
            } else {
                setGoalFiltersStore(rootStore$.goals$.goals_checked_list_filter)
            }

            onSnapshot(rootStore$.goals$.goals_checked_list_filter, (sn) => setGoalFiltersStore(sn))
        })()

        fetchAppData()

        const handler = () => {
            // e.preventDefault()
        }

        document.addEventListener('touchstart', handler, { passive: true })
        document.addEventListener('touchend', handler, { passive: true })
        document.addEventListener('wheel', handler, { passive: true })
    }, [])

    return user_id && !loading ? (
        <div className='app'>
            <SideMenu />
            <div className='app-body w-full flex-auto flex-col'>
                <div className='module-wrapper'>
                    <AppRoutes />
                </div>
            </div>
        </div>
    ) : (
        <RdLoader />
    )
})
