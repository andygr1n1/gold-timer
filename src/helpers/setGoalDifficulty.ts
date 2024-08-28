import { formatDistanceStrict } from 'date-fns'
import { DIFFICULTY_ENUM } from '../services/enums'

export const setGoalDifficulty = (finished_at: Date): DIFFICULTY_ENUM => {
    const timeInMonths = Number(
        formatDistanceStrict(finished_at, Date.now(), {
            unit: 'month',
            roundingMethod: 'ceil',
        }).split(' ')[0],
    )

    if (timeInMonths <= 3) {
        return DIFFICULTY_ENUM.LIGHT
    } else if (timeInMonths <= 12) {
        return DIFFICULTY_ENUM.MEDIUM
    } else if (timeInMonths <= 36) {
        return DIFFICULTY_ENUM.LEGEND
    } else if (timeInMonths <= 60) {
        return DIFFICULTY_ENUM.EPIC
    } else if (timeInMonths <= 120) {
        return DIFFICULTY_ENUM.STAR
    } else if (timeInMonths <= 240) {
        return DIFFICULTY_ENUM.FRIEND_OF_DEATH
    } else if (timeInMonths <= 3600) {
        return DIFFICULTY_ENUM.IMMORTAL
    }

    return DIFFICULTY_ENUM.IMMORTAL
}
