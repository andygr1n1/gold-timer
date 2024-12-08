import { useQueryClient } from '@tanstack/react-query'
import { type IGoalSchema } from '../shared-service'
import { KEY_FetchGoal } from '../components/goal-editor-dialog/service/types'

export const useInvalidateGoals = () => {
    const queryClient = useQueryClient()

    const onSuccess = (res: IGoalSchema | undefined) => {
        const goalId = res?.id

        queryClient.invalidateQueries()

        goalId &&
            queryClient.invalidateQueries({
                queryKey: KEY_FetchGoal(goalId),
            })
    }

    return { onSuccess }
}
