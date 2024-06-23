import { compact } from 'lodash-es'

export const KEY_FetchGoalsInfinity = (limit: number, ownerId: string, searchText: string, queryFilter: string) => [
    'KEY_FetchGoalsInfinity',
    limit,
    ownerId,
    searchText,
    queryFilter,
]

export const KEY_FetchActiveGoals = (limit: number, ownerId: string, searchText: string) => [
    'KEY_FetchActiveGoals',
    limit,
    ownerId,
    searchText,
]
export const KEY_FetchExpiredGoals = (limit: number, ownerId: string) => ['KEY_FetchExpiredGoals', limit, ownerId]
export const KEY_FetchFavoriteGoals = (limit: number, ownerId: string) => ['KEY_FetchFavoriteGoals', limit, ownerId]
export const KEY_FetchRitualGoals = (limit: number, ownerId: string, expiredGoals: boolean) => [
    'KEY_FetchRitualGoals',
    limit,
    ownerId,
    expiredGoals,
]
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
