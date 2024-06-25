import { useInfiniteQuery } from '@tanstack/react-query'
import { compact, flatten, last, uniqWith } from 'lodash-es'
import { KEY_FetchGoalsInfinity } from '../keys'
import { IGoalSchema, IGoalStatus, goalStatus } from '../types'
import { useUserStore$ } from '@/services/user-store/useUserStore.service'
import { query_activeGoals } from '@/modules/goals/shared-service/fetch-goals/query_activeGoals'
import { query_expiredGoals } from './query_expiredGoals'
import { query_favoriteGoals } from './query_favoriteGoals'
import { query_ritualGoals } from './query_ritualGoals'
import { query_deletedGoals } from './query_deletedGoals'
import { query_completedGoals } from './query_completedGoals'

export const useFetchGoals = (props: {
    queryFilter: IGoalStatus
    limit: number
    serverSearchInput: string
}): {
    isLoading: boolean
    goals: IGoalSchema[]
    isFetchingNextPage: boolean
    fetchNextPage: () => void
    hasNextPage: boolean
} => {
    const { queryFilter = goalStatus.active, limit = 20, serverSearchInput = '' } = props
    const { userId } = useUserStore$()

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
        queryKey: KEY_FetchGoalsInfinity(limit, queryFilter, serverSearchInput, userId),
        queryFn: async (props) => {
            const offset = props.pageParam
            const nextCursor = props.pageParam + 5
            let data: IGoalSchema[] | undefined = []

            if (queryFilter === goalStatus.favorite) {
                data = await query_favoriteGoals({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === goalStatus.active) {
                data = await query_activeGoals({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === goalStatus.expired) {
                data = await query_expiredGoals({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === goalStatus.ritualActive) {
                data = await query_ritualGoals({ userId, limit, offset, serverSearchInput, expiredGoals: false })
            }
            if (queryFilter === goalStatus.ritual) {
                data = await query_ritualGoals({
                    userId,
                    limit,
                    offset,
                    serverSearchInput,
                    expiredGoals: true,
                })
            }
            if (queryFilter === goalStatus.completed) {
                data = await query_completedGoals({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === goalStatus.deleted) {
                data = await query_deletedGoals({ userId, limit, offset, serverSearchInput })
            }
            return { data, nextCursor }
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            return last(pages)?.data?.length ? lastPage?.nextCursor : undefined
        },

        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!userId,
    })

    const goals = uniqWith(compact(flatten(data?.pages.map((page) => page.data))), (a, b) => a.id === b.id)

    return {
        isLoading: isFetching,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        goals,
    }
}
