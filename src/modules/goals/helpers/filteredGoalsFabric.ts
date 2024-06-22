import { compact, uniq } from 'lodash-es'
import { IGoal } from '../service/types'
import { format } from 'date-fns'
import { convertStringDate } from '@/helpers/date.helpers'

export const filteredGoalsFabric = (
    goals: IGoal[] = [],
): {
    timeFrame: string[]
    filteredGoals: (tp: string) => IGoal[]
} => {
    const timeFrame = compact(
        uniq(goals.map((goal) => goal.finished_at && format(convertStringDate(goal.finished_at), 'yyyy MMMM'))),
    )

    const filteredGoals = (timeFrame: string) => {
        return goals.filter((goal) => format(convertStringDate(goal.finished_at), 'yyyy MMMM') === timeFrame)
    }

    return {
        timeFrame,
        filteredGoals,
    }
}
