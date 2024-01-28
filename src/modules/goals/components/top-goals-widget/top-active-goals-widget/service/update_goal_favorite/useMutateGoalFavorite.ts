import { useMutation } from '@tanstack/react-query'
import { mutation_favoriteGoal } from './mutation_favoriteGoal'
import { queryClient } from '@/main'
import { useAtom } from 'jotai'
import { loginAtom } from '@/modules/login/stores/login.store'
import { IActiveGoalOptimized } from '../fetch_active_goals/query_activeGoals'

export const useMutateGoalFavorite = () => {
    const [{ user_id }] = useAtom(loginAtom)
    const mutation = useMutation({
        mutationFn: ({ goal_id, is_favorite }: { goal_id: string; is_favorite: boolean }) =>
            mutation_favoriteGoal(goal_id, is_favorite),
        onSuccess: (res) => {
            queryClient.setQueryData(['useFetchActiveGoals', user_id], (oldData: IActiveGoalOptimized[]) => {
                const proxyArray = new Proxy([...oldData], {})
                const selected = proxyArray.find((goal) => goal.id === res?.id)
                if (selected) {
                    selected.is_favorite = res?.is_favorite
                }
                return proxyArray
            })
        },
    })

    return mutation
}
