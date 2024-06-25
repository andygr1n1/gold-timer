import { IGoalSchema } from '@/modules/goals/shared-service'
import { useMutation } from '@tanstack/react-query'
import { mutation_goalStatus } from '../service/mutation_goalStatus'
import { mutation_userCoins } from '../service/mutation_userCoins'
import { useRecalculateUserCoins } from './useRecalculateUserCoins.hook'
import { useInvalidateGoals } from '@/modules/goals/shared-hooks/useInvalidateGoals.hook'
import { useInvalidateUser } from '@/modules/goals/shared-hooks/useInvalidateUser.hook'

export const useUpdateGoalStatus = () => {
    const { recalculateUserCoins, userId } = useRecalculateUserCoins()
    const { onSuccess: onUserMutationSuccess } = useInvalidateUser()
    const { onSuccess: onGoalMutationSuccess } = useInvalidateGoals()
    const goalStatusMutation = useMutation({
        mutationFn: ({ goal }: { goal: IGoalSchema }) => mutation_goalStatus({ goal }),
        onSuccess: onGoalMutationSuccess,
    })

    const userCoinsMutation = useMutation({
        mutationFn: ({ coins }: { coins: number }) => mutation_userCoins({ coins, userId }),
        onSuccess: onUserMutationSuccess,
    })

    const updateGoalStatus = (props: { goal: IGoalSchema }) => {
        goalStatusMutation.mutate({ goal: props.goal })

        userCoinsMutation.mutate({ coins: recalculateUserCoins({ goal: props.goal }) })
    }
    return { updateGoalStatus }
}
