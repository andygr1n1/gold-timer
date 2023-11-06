import { rootStore$ } from '@/StoreProvider'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { useEffect } from 'react'
import { getGoals$LocalForage, setGoals$LocalForage } from './goalsLocalForage'
import { IGoalsFilter$ } from '../mst/types'

export const useListenGoalsFilterStore = () => {
    useEffect(() => {
        const goalsFilters$ = rootStore$.goals$.goals_filter$
        let disposer: IDisposer | undefined
        ;(async () => {
            rootStore$.onChangeField('loading', true)
            await getGoals$LocalForage().then((loadedFilter$) => {
                loadedFilter$ && rootStore$.goals$.onChangeField('goals_filter$', cast(loadedFilter$))
                disposer = onSnapshot(goalsFilters$, (store: IGoalsFilter$) => {
                    setGoals$LocalForage(store)
                })
                rootStore$.onChangeField('loading', false)
            })
        })()

        return () => {
            disposer?.()
        }
    }, [])
}
