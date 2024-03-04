import { useQuery } from '@tanstack/react-query'
import { query_fetchGoalById } from '@/modules/goals/service/fetchGoalById/query_fetchGoalById'
import { IGoal } from '@/modules/goals/service/types'
import { selectedGoalAtom } from '@/modules/goals/stores/selectedGoal.store'
import { useAtom } from 'jotai'
import { KEY_FetchGoalById } from '../keys'

export const useFetchGoal = (
    selectedGoalId: string,
): Partial<{ goal: IGoal | null; isLoading: boolean; isEdit: boolean }> => {
    const [_selectedGoal] = useAtom(selectedGoalAtom)
    const { isLoading, data: goalData } = useQuery({
        queryKey: KEY_FetchGoalById(selectedGoalId),
        queryFn: async () => await query_fetchGoalById(selectedGoalId),
        staleTime: 2000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    })

    return {
        isLoading,
        goal: goalData,
        isEdit: _selectedGoal?.is_new || _selectedGoal?.is_edit,
    }
}
