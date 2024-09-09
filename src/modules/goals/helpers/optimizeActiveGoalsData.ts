import { convertStringDate, setMidnightTime } from '@/helpers/date.helpers'
import { differenceInCalendarDays, isFuture, set } from 'date-fns'
import { type IGoalSchema } from '../shared-service/types'

export const calculateIsExpired = (goal: IGoalSchema): boolean => {
    return !!goal.finished_at && !!(setMidnightTime(convertStringDate(goal.finished_at)) < new Date(Date.now()))
}
export const calculateIsRitual = (goal: IGoalSchema): boolean => {
    return !!goal.goal_ritual
}

export const calculateIsRitualWithPower = (goal: IGoalSchema): boolean => {
    return !!goal.goal_ritual?.ritual_power
}

export const calculateIsFromFuture = (goal: IGoalSchema): boolean => {
    if (!goal.created_at || !goal.finished_at) return false

    return (
        // !!(new Date(goal.created_at) > new Date()) ||
        !!isFuture(set(goal.finished_at, { hours: 0, minutes: 0, seconds: 0 }))
    )
}

export const calculateCreatedDaysAgo = (goal: IGoalSchema): number => {
    if (!goal.created_at) return 0
    const created = goal?.goal_ritual?.created_at ? goal?.goal_ritual?.created_at : goal.created_at
    const today = Date.now()
    const createdAt = convertStringDate(created).getTime()
    const diff = new Date(today - createdAt)
    return Math.floor(diff.getTime() / (1000 * 3600 * 24))
}
export const calculateTotalRemainingDays = (goal: IGoalSchema): number => {
    if (!goal.finished_at) return NaN

    const result = differenceInCalendarDays(goal.finished_at, set(new Date(), { hours: 0, minutes: 0, seconds: 0 }))
    return result
}

export const calculateGoalDeadline = (goal: IGoalSchema) => {
    const isExpired = calculateIsExpired(goal)
    if (isExpired) return true
    const _totalRemainingDays = calculateTotalRemainingDays(goal)
    return _totalRemainingDays < 1
}
