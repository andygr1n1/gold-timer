import { useMutation } from '@tanstack/react-query'
import { mutation_favoriteGoal } from './mutation_favoriteGoal'

import { useAtom } from 'jotai'
import { selectedGoalAtom } from '@/modules/goals/stores/selectedGoal.store'
import { IGoal } from '../types'
import { ISelectedGoal } from '../../stores/types'
import { KEY_FetchGoalById, KEY_FetchGoalsByFilter, goalsQueryKeys, goalsQueryKeysValues } from '../keys'
import { proxyConvert } from '@/functions/proxyConvert'
import { getSelectedGoalFromCache } from '../../helpers/goalsCache'
import { isDashboard } from '@/helpers/globalGuards'
import { KEY_FetchTopRitualGoals } from '../../components/goals-dashboard/top-ritual-goals-widget/service/keys'

export const useMutateGoalFavorite = () => {
    const [selectedGoal] = useAtom(selectedGoalAtom)
    const mutation = useMutation({
        mutationFn: ({ goal_id, is_favorite }: { goal_id: string; is_favorite: boolean }) =>
            mutation_favoriteGoal(goal_id, is_favorite),
        onSuccess: (res /*variables*/) => {
            if (!res) return

            goalsQueryKeysValues.forEach((filter) => {
                window.queryClient.setQueryData(
                    KEY_FetchGoalsByFilter(filter),
                    (oldData: IGoal[] | { pages: { data: IGoal[] }[] }) => {
                        const newData = oldData ? proxyConvert(oldData) : undefined
                        if (!newData) return

                        const selected = getSelectedGoalFromCache(newData, res?.id)
                        selected && (selected.is_favorite = res.is_favorite)

                        return newData
                    },
                )
            })

            selectedGoal?.id &&
                window.queryClient.setQueryData(KEY_FetchGoalById(selectedGoal.id), (oldData: ISelectedGoal) => {
                    return { ...oldData, is_favorite: res?.is_favorite }
                })
        },
        onSettled: () => {
            isDashboard() && window.queryClient.invalidateQueries({ queryKey: goalsQueryKeys.DASHBOARD })
            isDashboard() && window.queryClient.invalidateQueries({ queryKey: KEY_FetchTopRitualGoals() })
        },
    })
    return mutation
}
