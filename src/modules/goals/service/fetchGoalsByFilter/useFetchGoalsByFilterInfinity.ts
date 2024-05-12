import { useInfiniteQuery } from '@tanstack/react-query'
import { IGoalQueryTypeFilter } from '@/modules/goals/service/types'
import { compact, flatten, last, orderBy } from 'lodash-es'
import { KEY_FetchGoalsByFilter } from '../keys'
import { IActiveGoals } from '../types'
import { fabric_goalsByFilter } from './fabric_goalsByFilter'
import { isPast } from 'date-fns'

export const useFetchGoalsByFilterInfinity = (props: {
    queryFilter?: IGoalQueryTypeFilter
}): IActiveGoals & { isFetchingNextPage: boolean; fetchNextPage: () => void; hasNextPage: boolean } => {
    const { queryFilter = 'all' } = props

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
        queryKey: KEY_FetchGoalsByFilter(['KEY_FetchGoalsByFilter', queryFilter]),
        queryFn: async ({ pageParam }) => {
            const data = await fabric_goalsByFilter({ pageParam, queryFilter, limit: 25, filterByText: true })
            return { data, nextCursor: pageParam + 25 }
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            return last(pages)?.data?.length ? lastPage?.nextCursor : undefined
        },

        // 1 minute
        // staleTime: 60000,
        staleTime: 1000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    })

    const unifiedPages = compact(flatten(data?.pages.map((page) => page.data)))

    const activeGoals =
        orderBy(
            unifiedPages?.filter(
                (goal) =>
                    !goal.deleted_at &&
                    !!!goal.goal_ritual?.ritual_power &&
                    !isPast(goal.finished_at) &&
                    goal.status !== 'completed',
            ),
            ['finished_at'],
            ['asc'],
        ) || []

    const favoriteGoals =
        orderBy(
            unifiedPages?.filter((goal) => !goal.deleted_at && goal.is_favorite),
            ['finished_at'],
            ['asc'],
        ) || []

    const ritualGoals =
        orderBy(
            unifiedPages?.filter(
                (goal) => !goal.deleted_at && !!goal.goal_ritual?.ritual_power && goal.status !== 'completed',
            ),
            ['finished_at'],
            ['asc'],
        ) || []

    const expiredGoals =
        orderBy(
            unifiedPages?.filter(
                (goal) =>
                    !goal.deleted_at &&
                    // !!!goal.goal_ritual?.ritual_power &&
                    isPast(goal.finished_at) &&
                    goal.status !== 'completed',
            ),
            ['finished_at'],
            ['asc'],
        ) || []

    const completedGoals =
        orderBy(
            unifiedPages?.filter((goal) => !goal.deleted_at && goal.status === 'completed'),
            ['finished_at'],
            ['desc'],
        ) || []

    const deletedGoals =
        orderBy(
            unifiedPages?.filter((goal) => goal.deleted_at),
            ['finished_at'],
            ['desc'],
        ) || []

    return {
        isLoading: isFetching,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        data: {
            active: activeGoals,
            favorite: favoriteGoals,
            ritual: ritualGoals,
            expired: expiredGoals,
            completed: completedGoals,
            deleted: deletedGoals,
        },
    }
}
