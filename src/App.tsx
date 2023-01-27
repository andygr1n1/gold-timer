import { AppRoutes } from './AppRoutes'
import { rootStore$, useRootStore } from './StoreProvider'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { RdLoader } from './components/loader/RdLoader'
import { getGoalFiltersStore, setGoalFiltersStore } from './functions/indexdb_manager'
import { onSnapshot } from 'mobx-state-tree'
import { Sidemenu } from './components/sidemenu/Sidemenu'
import { useThemming } from './hooks/useThemming.hook'

export const App = observer(() => {
    const {
        user$: { id: user_id },
        fetchUserInfo,
    } = useRootStore()

    useEffect(() => {
        ;(async () => {
            useThemming.applyLocalStorage()

            const filtersRes: typeof rootStore$.goals$.goals_checked_list_filter | null = await getGoalFiltersStore()

            if (filtersRes) {
                rootStore$.goals$.onChangeField('goals_checked_list_filter', filtersRes)
            } else {
                setGoalFiltersStore(rootStore$.goals$.goals_checked_list_filter)
            }

            onSnapshot(rootStore$.goals$.goals_checked_list_filter, (sn) => setGoalFiltersStore(sn))
        })()

        fetchUserInfo()

        const handler = () => {
            // e.preventDefault()
        }

        document.addEventListener('touchstart', handler, { passive: true })
        document.addEventListener('touchend', handler, { passive: true })
        document.addEventListener('wheel', handler, { passive: true })
    }, [])

    return user_id ? (
        <div className='app'>
            <Sidemenu />
            <div className='app-body w-full flex-auto flex-col'>
                <AppRoutes />
            </div>
        </div>
    ) : (
        <RdLoader />
    )
})
