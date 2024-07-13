import { getCoinsFromCompletedGoal } from '@/helpers/getCoinsFromCompletedGoal'
import { getCoinsFromRitual } from '@/helpers/getCoinsFromRitual'
import { IGoalSchema, IGoalStatus, goalStatus } from '@/modules/goals/shared-service'
import { useFetchUserDetails } from '@/modules/goals/shared-service/fetch-user-details/useFetchUserDetails'
import { useUserStore$ } from '@/services/user-store/useUserStore.service'

export const useRecalculateUserCoins = () => {
    const { userId } = useUserStore$()
    const { coins } = useFetchUserDetails({ userId })

    const recalculateUserCoins = (props: { goal: IGoalSchema; status?: IGoalStatus }): number => {
        const isACtive = props.goal.status === goalStatus.active

        if (props.status === goalStatus.ritual)
            return isACtive ? getCoinsFromRitual(props.goal.goal_ritual?.ritual_power || 0, coins) : coins + 5

        return isACtive ? getCoinsFromCompletedGoal(props.goal, coins) : coins + 5
    }

    return { recalculateUserCoins, userId }
}
