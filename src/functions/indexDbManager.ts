import { ISprintsFilter$ } from '@/mst/types'
import { rootStore$ } from '@/StoreProvider'
import localForage from 'localforage'

const goalFiltersStore = localForage.createInstance({
    name: 'sprints_filters_store',
})

export const setSprintsFilter$ = (store: ISprintsFilter$) => {
    goalFiltersStore.setItem('sprints_filters_store', JSON.parse(JSON.stringify(store)))
}

export const getSprintsFilter$ = (): Promise<typeof rootStore$.goals$.goals_checked_list_filter | null> => {
    return goalFiltersStore.getItem('sprints_filters_store')
}
