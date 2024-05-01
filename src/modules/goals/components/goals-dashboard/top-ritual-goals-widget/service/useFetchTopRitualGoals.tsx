import { useQuery } from '@tanstack/react-query'
import { orderBy } from 'lodash-es'
import { KEY_FetchTopRitualGoals } from './keys'
import { IGoal } from '@/modules/goals/service'
import { query_topRitualGoals } from './query_topRitualGoals'

export interface IFetchTopRitualGoals {
    isLoading: boolean
    goals: IGoal[]
}

export const useFetchTopRitualGoals = (): IFetchTopRitualGoals => {
    const { isLoading, data } = useQuery({
        queryKey: KEY_FetchTopRitualGoals(),
        queryFn: async () => await query_topRitualGoals(),
        staleTime: 1000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    })

    const ritualGoals: IGoal[] =
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

    return {
        isLoading,
        goals: ritualGoals,
    }
}
