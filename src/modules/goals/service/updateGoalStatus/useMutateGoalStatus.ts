import { useMutation } from '@tanstack/react-query'
import { fabric_goalStatus } from './fabric_goalStatus'

import { goal_status_enum_enum } from '@/graphql/generated'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { cloneDeep } from 'lodash-es'
import { IUserCoinsInfo } from '@/components/top-bar/service/query_userCoinsInfo'
import { processSuccess } from '@/functions/processMessage'
import { isCompleted } from '../../helpers/guards'
import { KEY_FetchGoalsByFilter } from '../keys'

export const useMutateGoalStatus = () => {
    const mutation = useMutation({
        mutationFn: ({ goal, status }: { status: goal_status_enum_enum; goal: IActiveGoalOptimized }) =>
            fabric_goalStatus(goal, status),
        onSuccess: (res) => {
            if (!res) return
            const resStatus = res.status?.status
            const resGoalId = res.status?.id
            const resUserCoins = res.coins

            window.queryClient.setQueryData(KEY_FetchGoalsByFilter('all', 8), (oldData: IActiveGoalOptimized[]) => {
                const proxyArray = new Proxy(
                    cloneDeep(oldData).map((g) => new Proxy(g, {})),
                    {},
                )
                const selected = proxyArray.find((goal) => goal.id === resGoalId)
                if (selected && resStatus) {
                    selected.status = resStatus
                }
                return proxyArray
            })

            resUserCoins &&
                window.queryClient.setQueryData(['useFetchUserCoinsInfo'], (oldData: IUserCoinsInfo) => {
                    return cloneDeep({ ...oldData, coins: resUserCoins })
                })

            resStatus && isCompleted(resStatus) && processSuccess('Goal successfully completed')
        },
    })

    return mutation
}
