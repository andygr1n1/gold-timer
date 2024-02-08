import { useMutation } from '@tanstack/react-query'
import { mutation_favoriteGoal } from './mutation_favoriteGoal'

import { useAtom } from 'jotai'
import { ISelectedGoal, selectedGoalAtom } from '@/modules/goals/stores/selectedGoal.store'
import { IActiveGoalOptimized } from '../../interfaces/types'
import { cloneDeep } from 'lodash-es'

export const useMutateGoalFavorite = () => {
    const [selectedGoal] = useAtom(selectedGoalAtom)
    const mutation = useMutation({
        mutationFn: ({ goal_id, is_favorite }: { goal_id: string; is_favorite: boolean }) =>
            mutation_favoriteGoal(goal_id, is_favorite),
        onSuccess: (res /*variables*/) => {
            selectedGoal?.id &&
                window.queryClient.setQueryData(['useFetchGoal', selectedGoal?.id], (oldData: ISelectedGoal) => {
                    return { ...oldData, is_favorite: res?.is_favorite }
                })
            window.queryClient.setQueryData(['useFetchGoals', 'all', 8], (oldData: IActiveGoalOptimized[]) => {
                const proxyArray = new Proxy(
                    cloneDeep(oldData).map((g) => new Proxy(g, {})),
                    {},
                )
                const selected = proxyArray.find((goal) => goal.id === res?.id)
                if (selected) {
                    selected.is_favorite = !!res?.is_favorite
                }
                return proxyArray
            })
        },
        onSettled: async () => {
            return await window.queryClient.invalidateQueries({ queryKey: ['useFetchGoals', 'all', 8] })
        },
    })
    return mutation
}
