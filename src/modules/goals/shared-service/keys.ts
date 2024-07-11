// import { compact } from 'lodash-es'

export const KEY_FetchGoalsInfinity = (limit: number, queryFilter: string, searchText: string, ownerId: string) => [
    'KEY_FetchGoalsInfinity',
    limit,
    queryFilter,
    searchText,
    ownerId,
]

// export const KEY_FetchActiveGoals = (limit: number, ownerId: string, searchText: string) => [
//     'KEY_FetchActiveGoals',
//     limit,
//     ownerId,
//     searchText,
// ]
// export const KEY_FetchExpiredGoals = (limit: number, ownerId: string) => ['KEY_FetchExpiredGoals', limit, ownerId]
// export const KEY_FetchFavoriteGoals = (limit: number, ownerId: string) => ['KEY_FetchFavoriteGoals', limit, ownerId]
// export const KEY_FetchRitualGoals = (limit: number, ownerId: string, expiredGoals: boolean) => [
//     'KEY_FetchRitualGoals',
//     limit,
//     ownerId,
//     expiredGoals,
// ]
// export const KEY_FetchGoalsByFilter = (queryFilter: readonly (string | number)[]) => compact([...queryFilter])
// export const KEY_FetchGoalById = (id: string) => ['useFetchGoal', id]
