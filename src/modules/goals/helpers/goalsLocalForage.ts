import localForage from 'localforage'
import { IGoalsFilter$ } from '../mst/types'

const goalsFilterStore = localForage.createInstance({
    name: 'goals_filters_store',
})

export const setGoals$LocalForage = (store: IGoalsFilter$) => {
    goalsFilterStore.setItem('goals_filters_store', JSON.parse(JSON.stringify(store)))
}

export const getGoals$LocalForage = (): Promise<IGoalsFilter$ | null> => {
    return goalsFilterStore.getItem('goals_filters_store')
}
