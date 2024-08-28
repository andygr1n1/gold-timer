import { useInfiniteQuery } from '@tanstack/react-query'
import { compact, flatten, last, uniqWith } from 'lodash-es'
import { KEY_FetchGoalsInfinity } from '../keys'
import { type IGoalSchema, type IGoalStatus, goalStatusEnum } from '../types'
import { useUser$ } from '@/services/user-store/userUser.store'
import { query_activeGoals } from '@/modules/goals/shared-service/fetch-goals/query_activeGoals'
import { query_expiredGoals } from './query_expiredGoals'
import { query_favoriteGoals } from './query_favoriteGoals'
import { query_ritualGoals } from './query_ritualGoals'
import { query_deletedGoals } from './query_deletedGoals'
import { query_completedGoals } from './query_completedGoals'
import { query_allGoals } from './query_allGoals'

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
    const { queryFilter = goalStatusEnum.active, limit = 20, serverSearchInput = '' } = props
    const { userId } = useUser$()

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
        queryKey: KEY_FetchGoalsInfinity(limit, queryFilter, serverSearchInput, userId),
        queryFn: async (props) => {
            const offset = props.pageParam
            const nextCursor = props.pageParam + 5
            let data: IGoalSchema[] | undefined = []

            if (queryFilter === goalStatusEnum.all) {
                data = await query_allGoals({ userId, limit, offset, serverSearchInput })
            }

            if (queryFilter === goalStatusEnum.favorite) {
                data = await query_favoriteGoals({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === goalStatusEnum.active) {
                data = await query_activeGoals({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === goalStatusEnum.expired) {
                data = await query_expiredGoals({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === goalStatusEnum.ritualActive) {
                data = await query_ritualGoals({ userId, limit, offset, serverSearchInput, expiredGoals: false })
            }
            if (queryFilter === goalStatusEnum.ritual) {
                data = await query_ritualGoals({
                    userId,
                    limit,
                    offset,
                    serverSearchInput,
                    expiredGoals: true,
                })
            }
            if (queryFilter === goalStatusEnum.completed) {
                data = await query_completedGoals({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === goalStatusEnum.deleted) {
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
