import { useQueryClient } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { type IGoalSchema, type IGoalStatus } from '../shared-service'
import { KEY_FetchGoal } from '../components/goal-editor-dialog/service/types'

export const useInvalidateGoals = () => {
    const queryClient = useQueryClient()
    const location = useLocation()

    const onSuccess = (res: IGoalSchema | undefined) => {
        const goalId = res?.id

        const queryFilter: IGoalStatus = location.state?.filter

        queryClient.invalidateQueries({
            predicate: (query) => {
                const queryKey = query.queryKey
                return queryFilter
                    ? queryKey[0] === 'KEY_FetchGoalsInfinity' && queryKey[1] === 20 && queryKey[2] === queryFilter
                    : queryKey[0] === 'KEY_FetchGoalsInfinity' && queryKey[1] === 4
            },
        })

        goalId &&
            queryClient.invalidateQueries({
                queryKey: KEY_FetchGoal(goalId),
            })
    }

    return { onSuccess }
}
