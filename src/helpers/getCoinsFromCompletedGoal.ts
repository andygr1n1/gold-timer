import { type IGoalSchema } from '@/modules/goals/shared-service/types'
import { DIFFICULTY_ENUM } from '../services/enums'

export const getCoinsFromCompletedGoal = (goal: IGoalSchema, currentCoins: number): number => {
    const { difficulty, goal_ritual } = goal
    if (goal_ritual) {
        //
        //
        // ritual
        const power = goal_ritual.ritual_power || 0
        if (power <= 10) {
            return currentCoins + 10 + 1 * power
        } else if (power <= 30) {
            return currentCoins + 20 + 1 * power
        } else if (power <= 60) {
            return currentCoins + 30 + 1 * power
        } else if (power <= 100) {
            return currentCoins + 50 + 1 * power
        } else if (power <= 365) {
            return currentCoins + 100 + 10 * power
        } else if (power <= 731) {
            return currentCoins + 1000 + 100 * power
        } else if (power <= 1097) {
            return currentCoins + 10000 + 1000 * power
        } else if (power <= 1464) {
            return currentCoins + 100000 + 10000 * power
        } else if (power <= 1829) {
            return currentCoins + 1000000 + 100000 * power
        } else if (power > 1829) {
            return currentCoins + 1000000000 + 10000000 * power
        }
        return 10 + currentCoins
    } else {
        //
        //
        // active
        switch (difficulty) {
            case DIFFICULTY_ENUM.LIGHT:
                return currentCoins + 200
            case DIFFICULTY_ENUM.MEDIUM:
                return currentCoins + 1000
            case DIFFICULTY_ENUM.LEGEND:
                return currentCoins + 10000
            case DIFFICULTY_ENUM.EPIC:
                return currentCoins + 100000
            case DIFFICULTY_ENUM.STAR:
                return currentCoins + 1000000
            case DIFFICULTY_ENUM.FRIEND_OF_DEATH:
                return currentCoins + 10000000
            case DIFFICULTY_ENUM.IMMORTAL:
                return currentCoins + 1000000000
            default:
                return currentCoins
        }
    }
}
