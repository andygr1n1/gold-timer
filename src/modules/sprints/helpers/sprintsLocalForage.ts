import { rootStore$ } from '@/StoreProvider'
import { ISprintsFilter$ } from '@/modules/sprints/mst/types'
import localForage from 'localforage'

const sprintsFilterStore = localForage.createInstance({
    name: 'sprints_filter_store',
})

export const setSprints$LocalForage = (store: ISprintsFilter$) => {
    sprintsFilterStore.setItem('sprints_filter_store', JSON.parse(JSON.stringify(store)))
}

export const getSprints$LocalForage = (): Promise<
    typeof rootStore$.goals$.goals_filter$.goals_selected_statuses | null
> => {
    return sprintsFilterStore.getItem('sprints_filter_store')
}
