import { useMutation } from '@tanstack/react-query'

import { selectedGoalAtom } from '@/modules/goals/stores/selectedGoal.store'
import { useAtom } from 'jotai'
import { optimizeActiveGoalsData } from '../../helpers/optimizeActiveGoalsData'
import { IActiveGoalOptimized } from '@/modules/goals/service/types'
import { mutation_goalDeletedAt } from './mutation_goalDeletedAt'
import { KEY_FetchGoalById, KEY_FetchGoalsByFilter, goalsQueryKeysValues } from '../keys'
import { proxyConvert } from '@/functions/proxyConvert'
import { getSelectedGoalFromCache } from '../../helpers/goalsCache'

export const useMutateGoalDeletedAt = () => {
    const [selectedGoal] = useAtom(selectedGoalAtom)

    const mutation = useMutation({
        mutationFn: ({ goal_id, deleted_at }: { goal_id: string; deleted_at: boolean }) =>
            mutation_goalDeletedAt(goal_id, deleted_at),
        onSuccess: (res) => {
            if (!res) return

            goalsQueryKeysValues.forEach((filter) => {
                window.queryClient.setQueryData(
                    KEY_FetchGoalsByFilter(filter),
                    (oldData: IActiveGoalOptimized[] | { pages: { data: IActiveGoalOptimized[] }[] }) => {
                        const newData = oldData ? proxyConvert(oldData) : undefined
                        if (!newData) return

                        const selected = getSelectedGoalFromCache(newData, res.id)

                        selected && (selected.deleted_at = res.deleted_at)

                        return newData
                    },
                )
            })
            selectedGoal?.id &&
                window.queryClient.setQueryData(KEY_FetchGoalById(selectedGoal.id), (oldData: IActiveGoalOptimized) => {
                    return optimizeActiveGoalsData({ ...oldData, deleted_at: res?.deleted_at })?.[0]
                })
        },
    })

    return mutation
}
