import { add, getDay, set } from 'date-fns'
import { type IGoalRitualType, goalRitualType } from '@/modules/goals/shared-service'

interface INewRitualCircleProps {
    ritual_type: IGoalRitualType
    new_ritual_interval: number
    // goal_created_at: Date
    goal_finished_at: Date
    edit?: boolean
}

export const generateNewRitualCircle = (
    options: INewRitualCircleProps,
): { ritual_goal_created_at: Date; ritual_goal_finished_at: Date } => {
    const { new_ritual_interval, goal_finished_at, ritual_type, edit } = options

    // *
    // today with default UTC
    const today = new Date()

    const isRitualDaysInterval = ritual_type === goalRitualType.interval_in_days
    const isRitualDaysOfWeek = ritual_type === goalRitualType.days_of_week

    let ritual_goal_created_at = today
    let ritual_goal_finished_at = today

    if (goal_finished_at <= today) {
        // *
        // expired ritual
        ritual_goal_created_at = today
        isRitualDaysInterval && (ritual_goal_finished_at = add(ritual_goal_created_at, { days: new_ritual_interval }))
        isRitualDaysOfWeek &&
            (ritual_goal_finished_at = add(ritual_goal_created_at, {
                days: generateEstimationForRitualDaysOfWeek(ritual_goal_created_at, new_ritual_interval),
            }))
    } else {
        // *
        // normal ritualization
        ritual_goal_created_at = edit ? ritual_goal_finished_at : goal_finished_at
        isRitualDaysInterval && (ritual_goal_finished_at = add(ritual_goal_created_at, { days: new_ritual_interval }))
        isRitualDaysOfWeek &&
            (ritual_goal_finished_at = add(ritual_goal_created_at, {
                days: generateEstimationForRitualDaysOfWeek(ritual_goal_created_at, new_ritual_interval),
            }))
    }

    return {
        ritual_goal_created_at: set(ritual_goal_finished_at, {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        }),
        ritual_goal_finished_at: set(ritual_goal_finished_at, {
            hours: 23,
            minutes: 59,
            seconds: 59,
            milliseconds: 59,
        }),
    }
}

const generateEstimationForRitualDaysOfWeek = (created: Date, finishPoint: number): number => {
    let pushDays = 0
    const createPoint = getDay(created)
    if (createPoint > finishPoint) {
        /* create = 3(wednesday) finish = 0(sunday) */
        /* 7 - 3 + 0 */
        /* create = 5(friday) finish = 2(tuesday) */
        /* 7 - 5 + 2 */
        pushDays = 7 - createPoint + finishPoint
    } else if (createPoint === finishPoint) {
        pushDays = 7
    } else {
        /* create = 3(wednesday) finish = 6(saturday)  */
        /* create = 6 - 3  */
        /* create = 0(sunday) finish = 5(friday)  */
        /* create = 5 - 0  */
        pushDays = finishPoint - createPoint
    }

    return pushDays
}
