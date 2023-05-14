import { useEffect } from 'react'
import { useTheming } from './useTheming.hook'
import { rootStore$ } from '@/StoreProvider'

export const useAppInit = () => {
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

        rootStore$.fetchAndStabilizeAppData()

        const handler = () => {
            // e.preventDefault()
        }

        document.addEventListener('touchstart', handler, { passive: true })
        document.addEventListener('touchend', handler, { passive: true })
        document.addEventListener('wheel', handler, { passive: true })
    }, [])
}
