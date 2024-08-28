import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { generateNewRitualCircle } from '@/helpers/generateNewRitualCircle'
import { type IGoalSchema, goalStatusEnum } from '@/modules/goals/shared-service'
import { useMutation } from '@tanstack/react-query'
import { mutation_userCoins } from '../mutation_userCoins'
import { useRecalculateUserCoins } from '../../hooks/useRecalculateUserCoins'
import { useInvalidateGoals } from '@/modules/goals/shared-hooks/useInvalidateGoals'
import { useInvalidateUser } from '@/modules/goals/shared-hooks/useInvalidateUse'
import { type IUpdateGoalRitualSchema } from '../types'
import { mutation_ritualizeGoal } from './mutation_ritualizeGoal'

export const useRitualizeGoal = () => {
    const { recalculateUserCoins, userId } = useRecalculateUserCoins()
    const { onSuccess: onUserMutationSuccess } = useInvalidateUser()
    const { onSuccess: onGoalMutationSuccess } = useInvalidateGoals()

    const goalMutation = useMutation({
        mutationFn: ({ goalRitual }: { goalRitual: IUpdateGoalRitualSchema }) => mutation_ritualizeGoal({ goalRitual }),
        onSuccess: onGoalMutationSuccess,
    })

    const userCoinsMutation = useMutation({
        mutationFn: ({ coins }: { coins: number }) => mutation_userCoins({ coins, userId }),
        onSuccess: onUserMutationSuccess,
    })

    const ritualizeGoal = (props: { goal: IGoalSchema; onSuccess?: () => void; onSettled?: () => void }) => {
        const { goal } = props
        if (!goal.goal_ritual || !goal.finished_at) return

        const { ritual_goal_created_at, ritual_goal_finished_at } = generateNewRitualCircle({
            ritual_type: goal.goal_ritual?.ritual_type,
            new_ritual_interval: goal.goal_ritual?.ritual_interval,
            goal_finished_at: new Date(goal.finished_at),
        })

        const goalRitual: IUpdateGoalRitualSchema = {
            goal_id: goal.id,
            ritual_id: goal.goal_ritual?.ritual_id,
            ritual_power: (goal.goal_ritual?.ritual_power || 0) + 10,
            created_at: formatDateWithTimezone(ritual_goal_created_at),
            finished_at: formatDateWithTimezone(ritual_goal_finished_at),
        }

        userCoinsMutation.mutate({ coins: recalculateUserCoins({ goal, status: goalStatusEnum.ritual }) })
        goalMutation.mutate({ goalRitual }, { onSuccess: props.onSuccess, onSettled: props.onSettled })
    }
    return { ritualizeGoal }
}
