import { setMidnightTime } from '@/functions/date.helpers'
import { useQuery } from '@tanstack/react-query'
import { fabric_goalsByFilter } from './fabric_goalsByFilter'
import { isPast } from 'date-fns'
import { GOAL_STATUS_ENUM } from '@/lib/enums'
import { compact, orderBy } from 'lodash-es'
import { KEY_FetchGoalsByFilter } from '../keys'
import { IActiveGoals } from '../types'
import { IGoalQueryTypeFilter } from '../../interfaces/types'

export const useFetchGoalsByFilter = (props: { queryFilter?: IGoalQueryTypeFilter; limit?: number }): IActiveGoals => {
    const { queryFilter = 'all', limit } = props

    const { isLoading, data } = useQuery({
        queryKey: KEY_FetchGoalsByFilter([...compact(['KEY_FetchGoalsByFilter', queryFilter, limit])]),
        queryFn: async () => {
            const data = await fabric_goalsByFilter({ limit, queryFilter, filterByText: false })
            return data
        },
        // 5 minutes
        // staleTime: 300000,
        // staleTime: Infinity,

        // 1 minute
        staleTime: 60000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    })

    const activeGoals =
        orderBy(
            data?.filter(
                (goal) =>
                    !goal.deleted_at &&
                    !!!goal.goal_ritual?.ritual_power &&
                    !isPast(setMidnightTime(new Date(goal.finished_at))) &&
                    goal.status !== GOAL_STATUS_ENUM.COMPLETED,
            ),
            ['finished_at'],
            ['asc'],
        ) || []

    const favoriteGoals =
        orderBy(
            data?.filter((goal) => goal.is_favorite),
            ['finished_at'],
            ['asc'],
        ) || []

    const ritualGoals =
        orderBy(
            data?.filter(
                (goal) =>
                    !goal.deleted_at && !!goal.goal_ritual?.ritual_power && goal.status !== GOAL_STATUS_ENUM.COMPLETED,
            ),
            ['finished_at'],
            ['asc'],
        ) || []

    const expiredGoals =
        orderBy(
            data?.filter(
                (goal) =>
                    !goal.deleted_at &&
                    !!!goal.goal_ritual?.ritual_power &&
                    isPast(setMidnightTime(new Date(goal.finished_at))) &&
                    goal.status !== GOAL_STATUS_ENUM.COMPLETED,
            ),
            ['finished_at'],
            ['asc'],
        ) || []

    return {
        isLoading,
        data: { active: activeGoals, favorite: favoriteGoals, ritual: ritualGoals, expired: expiredGoals },
    }
}
