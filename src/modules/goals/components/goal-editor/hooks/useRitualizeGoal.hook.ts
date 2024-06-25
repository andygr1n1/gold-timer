import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { generateNewRitualCircle } from '@/helpers/generateNewRitualCircle'
import { IGoalSchema, goalStatus } from '@/modules/goals/shared-service'
import { useMutation } from '@tanstack/react-query'
import { mutation_userCoins } from '../service/mutation_userCoins'
import { useRecalculateUserCoins } from './useRecalculateUserCoins.hook'
import { useInvalidateGoals } from '@/modules/goals/shared-hooks/useInvalidateGoals.hook'
import { useInvalidateUser } from '@/modules/goals/shared-hooks/useInvalidateUser.hook'
import { IUpdateGoalRitualSchema } from '../service/types'
import { mutation_ritualizeGoal } from '../service/mutation_ritualizeGoal'

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

    const ritualizeGoal = (props: { goal: IGoalSchema }) => {
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

        goalMutation.mutate({ goalRitual })
        userCoinsMutation.mutate({ coins: recalculateUserCoins({ goal, status: goalStatus.ritual }) })
    }
    return { ritualizeGoal }
}
