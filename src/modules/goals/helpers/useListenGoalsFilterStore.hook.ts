import { rootStore$ } from '@/StoreProvider'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { useEffect } from 'react'
import { getGoals$LocalForage, setGoals$LocalForage } from './goalsLocalForage'
import { IGoalsFilter$ } from '../mst/types'
import { GOAL_STATUS_ENUM } from '@/lib/enums'

const injectCompletedGoals = () => {
    rootStore$.goals$.goals_filter$.activeGoalsCompletedStatus &&
        rootStore$.fetchGoals([GOAL_STATUS_ENUM.COMPLETED]).then(() => {
            rootStore$.onChangeField('loading', false)
        })
}

export const useListenGoalsFilterStore = () => {
    useEffect(() => {
        const goalsFilters$ = rootStore$.goals$.goals_filter$
        let disposer: IDisposer | undefined
        ;(async () => {
            rootStore$.onChangeField('loading', true)
            await getGoals$LocalForage().then((loadedFilter$) => {
                loadedFilter$ && rootStore$.goals$.onChangeField('goals_filter$', cast(loadedFilter$))
                injectCompletedGoals()
                //
                //
                //
                disposer = onSnapshot(goalsFilters$, (store: IGoalsFilter$) => {
                    setGoals$LocalForage(store)
                    injectCompletedGoals()
                })
                rootStore$.onChangeField('loading', false)
            })
        })()

        return () => {
            disposer?.()
        }
    }, [])
}
