import { useMutation } from '@tanstack/react-query'
import { fabric_goalRitualize } from './fabric_goalRitualize'

import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { cloneDeep } from 'lodash-es'
import { IUserCoinsInfo } from '@/components/top-bar/service/query_userCoinsInfo'
import { processSuccess } from '@/functions/processMessage'
import { KEY_FetchGoalById, KEY_FetchGoalsByFilter, goalsQueryKeysValues } from '../keys'
import { proxyConvert } from '@/functions/proxyConvert'
import { getSelectedGoalFromCache } from '../../helpers/getSelectedGoalFromCache'
import { replaceObjectValues } from '../../helpers/replaceObjectValues'

export const useMutateGoalRitualize = () => {
    const mutation = useMutation({
        mutationFn: ({ goal }: { goal: IActiveGoalOptimized }) => fabric_goalRitualize(goal),
        onSuccess: (res) => {
            const goalId = res?.goal?.id
            if (!goalId) return

            goalsQueryKeysValues.forEach((filter) => {
                window.queryClient.setQueryData(
                    KEY_FetchGoalsByFilter(filter),
                    (oldData: IActiveGoalOptimized[] | { pages: { data: IActiveGoalOptimized[] }[] }) => {
                        const newData = oldData ? proxyConvert(oldData) : undefined
                        if (!newData) return

                        const selected = getSelectedGoalFromCache(newData, goalId)
                        replaceObjectValues(selected, res.goal)

                        return newData
                    },
                )
            })

            window.queryClient.setQueryData(KEY_FetchGoalById(goalId), (oldData: IActiveGoalOptimized) => {
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
    })

    return mutation
}
