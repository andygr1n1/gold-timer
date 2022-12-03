import { AppRoutes } from './AppRoutes'
import { rootStore$, useRootStore } from './StoreProvider'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { RdLoader } from './components/loader/RdLoader'
import { getGoalFiltersStore, setGoalFiltersStore } from './functions/indexdb_manager'
import { onSnapshot } from 'mobx-state-tree'
import { GoalsTopbar } from './components/topbar/Topbar'

export const App = observer(() => {
    const {
        user$: { id: user_id },
        fetchUserInfo,
    } = useRootStore()

    useEffect(() => {
        ;(async () => {
            const filtersRes: typeof rootStore$.goals$.goals_checked_list_filter | null = await getGoalFiltersStore()

            if (filtersRes) {
                console.log('filtersRes', filtersRes)
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
        <div className='app flex-col'>
            <div className='app-body'>
                {/* <Sidebar /> */}
                <div className='flex w-full flex-auto'>
                    <AppRoutes />
                </div>
            </div>
        </div>
    ) : (
        <RdLoader />
    )
})
