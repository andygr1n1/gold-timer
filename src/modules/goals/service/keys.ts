import { IGoalQueryTypeFilter } from '../interfaces/types'

export const KEY_FetchGoalsByFilter = (queryFilter: IGoalQueryTypeFilter, limit: number) => [
    'KEY_FetchGoalsByFilter',
    queryFilter,
    limit,
]
export const KEY_FetchGoalById = (id: string) => ['useFetchGoal', id]
