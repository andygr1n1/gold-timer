import { useMutation } from '@tanstack/react-query'
import { fabric_goalStatus } from './fabric_goalStatus'

import { goal_status_enum_enum } from '@/graphql/generated'
import { IActiveGoalOptimized } from '@/modules/goals/service/types'
import { cloneDeep } from 'lodash-es'
import { IUserCoinsInfo } from '@/components/top-bar/service/query_userCoinsInfo'
import { processSuccess } from '@/functions/processMessage'
import { isCompleted } from '../../helpers/goalsGuards'
import { KEY_FetchGoalsByFilter, goalsQueryKeysValues } from '../keys'
import { proxyConvert } from '@/functions/proxyConvert'
import { getSelectedGoalFromCache } from '../../helpers/goalsCache'

export const useMutateGoalStatus = () => {
    const mutation = useMutation({
        mutationFn: ({ goal, status }: { status: goal_status_enum_enum; goal: IActiveGoalOptimized }) =>
            fabric_goalStatus(goal, status),
        onSuccess: (res) => {
            const resStatus = res.status?.status
            const goalId = res.status?.id
            const resUserCoins = res.coins
            if (!resStatus || !goalId) return

            goalsQueryKeysValues.forEach((filter) => {
                window.queryClient.setQueryData(
                    KEY_FetchGoalsByFilter(filter),
                    (oldData: IActiveGoalOptimized[] | { pages: { data: IActiveGoalOptimized[] }[] }) => {
                        const newData = oldData ? proxyConvert(oldData) : undefined

                        if (!newData) return

                        const selected = getSelectedGoalFromCache(newData, goalId)
                        selected && (selected.status = resStatus)

                        return newData
                    },
                )
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
