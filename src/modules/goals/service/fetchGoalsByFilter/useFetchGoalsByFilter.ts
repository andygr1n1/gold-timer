import { useQuery } from '@tanstack/react-query'
import { fabric_goalsByFilter } from './fabric_goalsByFilter'
import { compact, orderBy } from 'lodash-es'
import { KEY_FetchGoalsByFilter } from '../keys'
import { IActiveGoals } from '../types'
import { IGoalQueryTypeFilter } from '../types'
import { isPast } from 'date-fns'

export const useFetchGoalsByFilter = (props: { queryFilter?: IGoalQueryTypeFilter; limit?: number }): IActiveGoals => {
    const { queryFilter = 'all', limit } = props

    const { isLoading, data, isFetching } = useQuery({
        queryKey: KEY_FetchGoalsByFilter([...compact(['KEY_FetchGoalsByFilter', queryFilter, limit])]),
        queryFn: async () => {
            const data = await fabric_goalsByFilter({ limit, queryFilter, filterByText: false })
            return data
        },
        // 5 minutes
        // staleTime: 300000,
        // staleTime: Infinity,

        // 1 minute
        // staleTime: 60000,
        staleTime: 1000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    })

    const activeGoals =
        orderBy(
            data?.filter((goal) => {
                return (
                    !goal.deleted_at &&
                    !!!goal.goal_ritual?.ritual_power &&
                    !isPast(goal.finished_at) &&
                    goal.status !== 'completed'
                )
            }),
            ['finished_at', 'title'],
            ['asc', 'asc'],
        ) || []

    const favoriteGoals =
        orderBy(
            data?.filter((goal) => goal.is_favorite),
            ['finished_at', 'title'],
            ['asc', 'asc'],
        ) || []

    const ritualGoals =
        orderBy(
            data?.filter(
                (goal) =>
                    !goal.deleted_at &&
                    // !isPast(setMidnightTime(new Date(goal.finished_at))) &&
                    !!goal.goal_ritual?.ritual_power &&
                    goal.status !== 'completed',
            ),
            ['finished_at', 'title'],
            ['asc', 'asc'],
        ) || []

    const expiredGoals =
        orderBy(
            data?.filter((goal) => !goal.deleted_at && isPast(goal.finished_at) && goal.status !== 'completed'),
            ['finished_at', 'title'],
            ['asc', 'asc'],
        ) || []

    return {
        isLoading,
        isFetching,
        data: { active: activeGoals, favorite: favoriteGoals, ritual: ritualGoals, expired: expiredGoals },
    }
}
