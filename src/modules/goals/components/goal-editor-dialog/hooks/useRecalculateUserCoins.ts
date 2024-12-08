import { getCoinsFromCompletedGoal } from '@/helpers/getCoinsFromCompletedGoal'
import { getCoinsFromRitual } from '@/helpers/getCoinsFromRitual'
import { type IGoalSchema, type IGoalStatus, goalStatusEnum } from '@/modules/goals/shared-service'
import { useFetchUserDetails } from '@/modules/goals/shared-service/fetch-user-details/useFetchUserDetails'
import { useUser$ } from '@/modules/app/mst/StoreProvider'

export const useRecalculateUserCoins = () => {
    const { id: userId } = useUser$()
    const { coins } = useFetchUserDetails({ userId })

    const recalculateUserCoins = (props: { goal: IGoalSchema; status?: IGoalStatus }): number => {
        const isACtive = props.goal.status === goalStatusEnum.active

        if (props.status === goalStatusEnum.ritual)
            return isACtive ? getCoinsFromRitual(props.goal.goal_ritual?.ritual_power || 0, coins) : coins + 5

        return isACtive ? getCoinsFromCompletedGoal(props.goal, coins) : coins + 5
    }

    return { recalculateUserCoins, userId }
}
