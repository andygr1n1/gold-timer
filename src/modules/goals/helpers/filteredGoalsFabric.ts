import { compact, uniq } from 'lodash-es'
import { type IGoalSchema } from '../shared-service/types'
import { format } from 'date-fns'
import { convertStringDate } from '@/helpers/date.helpers'

export const filteredGoalsFabric = (
    goals: IGoalSchema[] = [],
): {
    timeFrame: string[]
    filteredGoals: (tp: string) => IGoalSchema[]
} => {
    const timeFrame = compact(
        uniq(goals.map((goal) => goal.finished_at && format(convertStringDate(goal.finished_at), 'yyyy MMMM'))),
    )

    const filteredGoals = (timeFrame: string) => {
        return goals.filter(
            (goal) => goal.finished_at && format(convertStringDate(goal.finished_at), 'yyyy MMMM') === timeFrame,
        )
    }

    return {
        timeFrame,
        filteredGoals,
    }
}
