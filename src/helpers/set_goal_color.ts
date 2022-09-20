import { DIFFICULTY_ENUM } from './enums'

export const setGoalColor = (difficulty?: DIFFICULTY_ENUM, isFrozen = false): string => {
    let color = 'bg-blue-200'

    if (difficulty === DIFFICULTY_ENUM.LIGHT) {
        color = 'bg-yellow-100'
    }

    if (isFrozen) {
        color = 'bg-gray-100'
    }

    return color
}
