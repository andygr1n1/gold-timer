import { useQuery } from '@tanstack/react-query'
import { query_fetchGoalById } from '@/modules/goals/service/fetchGoalById/query_fetchGoalById'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { optimizeActiveGoalsData } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { selectedGoalAtom } from '@/modules/goals/stores/selected-goal/selectedGoal.store'
import { useAtom } from 'jotai'
import { KEY_FetchGoalById } from '../keys'
import { newGoalTemplate } from '../../stores/editGoal.store'

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
              queryKey: KEY_FetchGoalById(id),
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
