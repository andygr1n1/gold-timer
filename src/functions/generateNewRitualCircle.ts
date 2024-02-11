import { setZeroTime } from '@/functions/date.helpers'
import { add, getDay } from 'date-fns'
import { RITUAL_TYPE_ENUM } from '../lib/enums'
import { setMidnightTime } from './date.helpers'
import { ritual_type_enum_enum } from '@/graphql/generated'

interface INewRitualCircleProps {
    ritual_type: ritual_type_enum_enum
    new_ritual_interval: number
    // goal_created_at: Date
    goal_finished_at: Date
    edit?: boolean
}

export const generateNewRitualCircle = (
    options: INewRitualCircleProps,
): { ritual_goal_created_at: Date; ritual_goal_finished_at: Date } => {
    const { new_ritual_interval, goal_finished_at, ritual_type, edit } = options

    const today = setZeroTime(new Date(Date.now()))
    const isRitualDaysInterval = ritual_type === RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS
    const isRitualDaysOfWeek = ritual_type === RITUAL_TYPE_ENUM.DAYS_OF_WEEK

    let ritual_goal_created_at = today
    let ritual_goal_finished_at = today
    console.log('goal_finished_at', goal_finished_at)
    console.log('today', today)

    if (goal_finished_at <= today) {
        // *
        // expired ritual
        console.log('x1')
        ritual_goal_created_at = today
        isRitualDaysInterval && (ritual_goal_finished_at = add(ritual_goal_created_at, { days: new_ritual_interval }))
        isRitualDaysOfWeek &&
            (ritual_goal_finished_at = add(ritual_goal_created_at, {
                days: generateEstimationForRitualDaysOfWeek(ritual_goal_created_at, new_ritual_interval),
            }))
    } else {
        // *
        // normal ritualization
        console.log('x2')
        ritual_goal_created_at = edit ? ritual_goal_finished_at : goal_finished_at
        isRitualDaysInterval && (ritual_goal_finished_at = add(ritual_goal_created_at, { days: new_ritual_interval }))
        isRitualDaysOfWeek &&
            (ritual_goal_finished_at = add(ritual_goal_created_at, {
                days: generateEstimationForRitualDaysOfWeek(ritual_goal_created_at, new_ritual_interval),
            }))
    }

    return {
        ritual_goal_created_at: setZeroTime(ritual_goal_finished_at),
        ritual_goal_finished_at: setMidnightTime(ritual_goal_finished_at),
    }
}

export const generateEstimationForRitualDaysOfWeek = (created: Date, finishPoint: number): number => {
    console.log('created', created)
    console.log('finishPoint', finishPoint)
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
