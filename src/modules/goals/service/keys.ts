// import { ValueOf } from '@/functions'
import { compact } from 'lodash-es'

export const KEY_FetchGoalsByFilter = (queryFilter: readonly (string | number)[]) => compact([...queryFilter])
export const KEY_FetchGoalById = (id: string) => ['useFetchGoal', id]

export const goalsQueryKeys = {
    DASHBOARD: ['KEY_FetchGoalsByFilter', 'all', 4],
    ACTIVE: ['KEY_FetchGoalsByFilter', 'active'],
    RITUAL: ['KEY_FetchGoalsByFilter', 'ritual'],
    EXPIRED: ['KEY_FetchGoalsByFilter', 'expired'],
    FAVORITE: ['KEY_FetchGoalsByFilter', 'favorite'],
    COMPLETED: ['KEY_FetchGoalsByFilter', 'completed'],
    DELETED: ['KEY_FetchGoalsByFilter', 'deleted'],
} as const
// export type TGoalsQueryKeys = ValueOf<typeof goalsQueryKeys>

export const goalsQueryKeysValues = Object.values(goalsQueryKeys)
