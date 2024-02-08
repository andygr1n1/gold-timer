import { setMidnightTime } from '@/functions/date.helpers'
import { useQuery } from '@tanstack/react-query'
import { fabric_goalsByFilter } from './fabric_goalsByFilter'
import { IActiveGoalOptimized, IGoalQueryTypeFilter } from '@/modules/goals/interfaces/types'
import { isPast } from 'date-fns'
import { GOAL_STATUS_ENUM } from '@/lib/enums'
import { orderBy } from 'lodash-es'

type IActiveGoals = {
    isLoading: boolean
    data: {
        activeGoals: IActiveGoalOptimized[]
        favoriteGoals: IActiveGoalOptimized[]
        ritualGoals: IActiveGoalOptimized[]
        expiredGoals: IActiveGoalOptimized[]
    }
}

export const useFetchGoalsByFilter = (props: { queryFilter?: IGoalQueryTypeFilter; limit?: number }): IActiveGoals => {
    const { queryFilter = 'all', limit = 8 } = props
    const { isLoading, data } = useQuery({
        queryKey: ['useFetchGoals', queryFilter, limit],
        queryFn: async () => {
            const data = await fabric_goalsByFilter({ limit, queryFilter })
            return data
        },
        // 5 minutes
        // staleTime: 300000,
        staleTime: Infinity,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    })

    const activeGoals =
        orderBy(
            data?.filter(
                (goal) =>
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
            data?.filter((goal) => !!goal.goal_ritual?.ritual_power && goal.status !== GOAL_STATUS_ENUM.COMPLETED),
            ['finished_at'],
            ['asc'],
        ) || []

    const expiredGoals =
        orderBy(
            data?.filter(
                (goal) =>
                    !!!goal.goal_ritual?.ritual_power &&
                    isPast(setMidnightTime(new Date(goal.finished_at))) &&
                    goal.status !== GOAL_STATUS_ENUM.COMPLETED,
            ),
            ['finished_at'],
            ['asc'],
        ) || []

    return {
        isLoading,
        data: { activeGoals, favoriteGoals, ritualGoals, expiredGoals },
    }
}
