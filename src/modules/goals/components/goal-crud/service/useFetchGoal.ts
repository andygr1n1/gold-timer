import { useQuery } from '@tanstack/react-query'
import { query_fetchGoalById } from '@/modules/goals/components/goal-crud/service/query_fetchGoalById'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { optimizeActiveGoalsData } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { newGoalTemplate, selectedGoalAtom } from '@/modules/goals/stores/selectedGoal.store'
import { useAtom } from 'jotai'

export const useFetchGoal = (): Partial<{ goal: IActiveGoalOptimized | null; isLoading: boolean; isEdit: boolean }> => {
    const [_selectedGoal] = useAtom(selectedGoalAtom)

    if (!_selectedGoal) return { isLoading: true, goal: null, isEdit: false }

    const { id, is_new, parent_goal_id, is_edit } = _selectedGoal

    const { isLoading, data: goalData } = is_new
        ? {
              isLoading: false,
              data: optimizeActiveGoalsData(newGoalTemplate(id, parent_goal_id))[0],
          }
        : useQuery({
              queryKey: ['useFetchGoal', id],
              queryFn: async () => await query_fetchGoalById(id),
              staleTime: 2000,
              refetchOnWindowFocus: true,
              refetchOnMount: true,
          })
    return {
        isLoading,
        goal: goalData,
        isEdit: is_new || is_edit,
    }
}
