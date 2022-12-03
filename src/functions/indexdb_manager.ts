import { STATUS_ENUM_FILTERS } from '@/helpers/enums'
import { rootStore$ } from '@/StoreProvider'
import localForage from 'localforage'

const goalFiltersStore = localForage.createInstance({
    name: 'goal_filters_store',
})

export const setGoalFiltersStore = (value: STATUS_ENUM_FILTERS[]) => {
    console.log('value', JSON.parse(JSON.stringify(value)))
    goalFiltersStore.setItem('goal_filters', JSON.parse(JSON.stringify(value)))
}

export const getGoalFiltersStore = (): Promise<typeof rootStore$.goals$.goals_checked_list_filter | null> => {
    return goalFiltersStore.getItem('goal_filters')
}
