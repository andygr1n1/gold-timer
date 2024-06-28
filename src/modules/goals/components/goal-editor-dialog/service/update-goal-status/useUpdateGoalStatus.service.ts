import { IGoalSchema } from '@/modules/goals/shared-service'
import { useMutation } from '@tanstack/react-query'
import { mutation_goalStatus } from './mutation_goalStatus'
import { mutation_userCoins } from '../mutation_userCoins'
import { useRecalculateUserCoins } from '../../hooks/useRecalculateUserCoins.hook'
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

    const updateGoalStatus = (props: { goal: IGoalSchema; onSuccess?: () => void; onSettled?: () => void }) => {
        goalStatusMutation.mutate({ goal: props.goal })

        userCoinsMutation.mutate(
            { coins: recalculateUserCoins({ goal: props.goal }) },
            { onSuccess: props.onSuccess, onSettled: props.onSettled },
        )
    }
    return { updateGoalStatus }
}
