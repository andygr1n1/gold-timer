import { useMutation } from '@tanstack/react-query'
import { fabric_goalRitualize } from './fabric_goalRitualize'

import { IGoal } from '@/modules/goals/service/types'
import { cloneDeep } from 'lodash-es'
import { IUserCoinsInfo } from '@/components/top-bar/service/query_userCoinsInfo'
import { processSuccess } from '@/helpers/processMessage'
import { KEY_FetchGoalById, KEY_FetchGoalsByFilter, goalsQueryKeys, goalsQueryKeysValues } from '../keys'
import { proxyConvert } from '@/helpers/proxyConvert'
import { getSelectedGoalFromCache } from '../../helpers/goalsCache'
import { replaceObjectValues } from '../../../../helpers/replaceObjectValues'
import { isDashboard } from '@/services/guards'
import { KEY_FetchTopRitualGoals } from '../../components/goals-dashboard/top-ritual-goals-widget/service/keys'

export const useMutateGoalRitualize = () => {
    const mutation = useMutation({
        mutationFn: ({ goal }: { goal: IGoal }) => fabric_goalRitualize(goal),
        onSuccess: (res) => {
            const goalId = res?.goal?.id
            if (!goalId) return

            goalsQueryKeysValues.forEach((filter) => {
                window.queryClient.setQueryData(
                    KEY_FetchGoalsByFilter(filter),
                    (oldData: IGoal[] | { pages: { data: IGoal[] }[] }) => {
                        const newData = oldData ? proxyConvert(oldData) : undefined
                        if (!newData) return

                        const selected = getSelectedGoalFromCache(newData, goalId)
                        replaceObjectValues(selected, res.goal)

                        return newData
                    },
                )
            })

            window.queryClient.setQueryData(KEY_FetchGoalById(goalId), (oldData: IGoal) => {
                const selected = oldData ? proxyConvert(oldData) : undefined
                replaceObjectValues(selected, res.goal)
                return selected
            })

            res.coins &&
                window.queryClient.setQueryData(['useFetchUserCoinsInfo'], (oldData: IUserCoinsInfo) => {
                    return cloneDeep({
                        ...oldData,
                        coins: res.coins,
                        totalRitualPower: (oldData.totalRitualPower || 0) + 1,
                    })
                })

            res && processSuccess('Goal successfully ritualized')
        },
        onSettled: (data) => {
            if (!data) return

            isDashboard() && window.queryClient.invalidateQueries({ queryKey: goalsQueryKeys.DASHBOARD })
            isDashboard() && window.queryClient.invalidateQueries({ queryKey: KEY_FetchTopRitualGoals() })
        },
    })

    return mutation
}
