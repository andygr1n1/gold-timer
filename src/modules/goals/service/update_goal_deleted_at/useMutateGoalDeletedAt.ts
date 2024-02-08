import { useMutation } from '@tanstack/react-query'
import { mutation_goalDeletedAt } from './mutation_goalDeletedAt'

import { selectedGoalAtom } from '@/modules/goals/stores/selectedGoal.store'
import { useAtom } from 'jotai'
import { optimizeActiveGoalsData } from '../../helpers/optimizeActiveGoalsData'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'

export const useMutateGoalDeletedAt = () => {
    const [selectedGoal] = useAtom(selectedGoalAtom)

    const mutation = useMutation({
        mutationFn: ({ goal_id, deleted_at }: { goal_id: string; deleted_at: boolean }) =>
            mutation_goalDeletedAt(goal_id, deleted_at),
        onSuccess: (res) => {
            window.queryClient.setQueryData(['useFetchGoals', 'all', 8], (oldData: IActiveGoalOptimized[]) => {
                if (res?.deleted_at) return oldData.filter((goal) => goal.id !== res?.id)

                if (!res?.deleted_at) {
                    const deletedGoal: IActiveGoalOptimized | undefined = window.queryClient.getQueryData([
                        'useFetchGoal',
                        res?.id,
                    ])
                    if (!deletedGoal) return oldData
                    const proxyArray = new Proxy([...oldData, ...optimizeActiveGoalsData([deletedGoal])], {})
                    return proxyArray
                }
            })
            selectedGoal?.id &&
                window.queryClient.setQueryData(['useFetchGoal', selectedGoal?.id], (oldData: IActiveGoalOptimized) => {
                    return optimizeActiveGoalsData({ ...oldData, deleted_at: res?.deleted_at })?.[0]
                })
        },
        onSettled: async () => {
            return await window.queryClient.invalidateQueries({ queryKey: ['useFetchGoals', 'all', 8] })
        },
    })

    return mutation
}
