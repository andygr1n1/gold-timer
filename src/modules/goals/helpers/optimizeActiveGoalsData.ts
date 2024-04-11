import { convertStringToDate, setMidnightTime, setZeroTime } from '@/functions/date.helpers'
import { differenceInCalendarDays } from 'date-fns'
import { isArray } from 'lodash-es'
import { IGoal } from '../service/types'

export const optimizeActiveGoalsData = (data: IGoal[] | IGoal | null): IGoal[] => {
    if (!data) return []
    const isOneGoal = !isArray(data)
    const goals = isOneGoal ? [data] : data

    return goals
}

export const calculateIsExpired = (goal: IGoal): boolean => {
    return !!(setMidnightTime(convertStringToDate(goal.finished_at)) < new Date(Date.now()))
}
export const calculateIsRitual = (goal: IGoal): boolean => {
    return !!goal.goal_ritual?.ritual_power
}

export const calculateIsFromFuture = (goal: IGoal): boolean => {
    if (!goal.created_at) return false
    return (
        !!(convertStringToDate(goal.created_at) > new Date(Date.now())) ||
        !!(
            setMidnightTime(convertStringToDate(goal.finished_at)).getTime() >
            setMidnightTime(new Date(Date.now())).getTime()
        )
    )
}

export const calculateCreatedDaysAgo = (goal: IGoal): number => {
    if (!goal.created_at) return 0
    const created = goal?.goal_ritual?.created_at ? goal?.goal_ritual?.created_at : goal.created_at
    const today = Date.now()
    const createdAt = convertStringToDate(created).getTime()
    const diff = new Date(today - createdAt)
    return Math.floor(diff.getTime() / (1000 * 3600 * 24))
}

export const calculateTotalRemainingDays = (goal: IGoal): number => {
    const result = differenceInCalendarDays(
        setMidnightTime(convertStringToDate(goal.finished_at)),
        setZeroTime(new Date(Date.now())),
    )
    if (goal.title === 'Meditation ritual') {
        console.log('date', goal.finished_at)
        console.log('midnight->', setMidnightTime(convertStringToDate(goal.finished_at)))
        console.log(setZeroTime(new Date(Date.now())))
        console.log('result', result)
    }
    return result
}

export const calculateGoalDeadline = (goal: IGoal) => {
    const isExpired = calculateIsExpired(goal)
    if (isExpired) return true
    const _totalRemainingDays = calculateTotalRemainingDays(goal)
    return _totalRemainingDays < 1
}
