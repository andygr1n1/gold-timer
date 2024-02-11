import { useMutation } from '@tanstack/react-query'
import { fabric_goalRitualize } from './fabric_goalRitualize'

import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { cloneDeep } from 'lodash-es'
import { IUserCoinsInfo } from '@/components/top-bar/service/query_userCoinsInfo'
import { processSuccess } from '@/functions/processMessage'
import { KEY_FetchGoalsByFilter } from '../keys'

export const useMutateGoalRitualize = () => {
    const mutation = useMutation({
        mutationFn: ({ goal }: { goal: IActiveGoalOptimized }) => fabric_goalRitualize(goal),
        onSuccess: (res) => {
            if (!res) return

            window.queryClient.setQueryData(KEY_FetchGoalsByFilter('all', 8), (oldData: IActiveGoalOptimized[]) => {
                const proxyArray = new Proxy(cloneDeep(oldData.filter((g) => g.id !== res.goal?.id)), {})
                res.goal && proxyArray.push(res.goal)
                return proxyArray
            })

            res.coins &&
                window.queryClient.setQueryData(['useFetchUserCoinsInfo'], (oldData: IUserCoinsInfo) => {
                    console.log('res.coins', res.coins, oldData.totalRitualPower)
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
