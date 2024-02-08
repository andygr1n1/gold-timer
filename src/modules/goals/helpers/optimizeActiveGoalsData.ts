import { setMidnightTime } from '@/functions/date.helpers'
import { differenceInCalendarDays, parseISO } from 'date-fns'
import { isArray } from 'lodash-es'
import { IActiveGoalOptimized, IGoalWithRituals } from '../interfaces/types'

export const optimizeActiveGoalsData = (data: IGoalWithRituals[] | IGoalWithRituals | null): IActiveGoalOptimized[] => {
    if (!data) return []
    const isOneGoal = !isArray(data)
    const goals = isOneGoal ? [data] : data
    const optimizedGoals: IActiveGoalOptimized[] = goals.map((goal) => ({
        ...goal,
        isFromFuture: calculateIsFromFuture(goal),
        isDeadline: calculateIsDeadline(goal),
        totalRemainingDays: totalRemainingDays(goal),
        createdDaysAgo: calculateCreatedDaysAgo(goal),
        title: goal.title?.toString(),
        isExpired: calculateIsExpired(goal),
        isRitual: calculateIsRitual(goal),
        // finishedAtData: parseISO(goal.finished_at),
    }))

    return optimizedGoals
}

const calculateIsExpired = (goal: IGoalWithRituals): boolean => {
    return !!(setMidnightTime(parseISO(goal.finished_at)) < new Date(Date.now()))
}
const calculateIsRitual = (goal: IGoalWithRituals): boolean => {
    return !!goal.goal_ritual?.ritual_power
}

const calculateIsFromFuture = (goal: IGoalWithRituals): boolean => {
    if (!goal.created_at) return false
    return (
        !!(parseISO(goal.created_at) > new Date(Date.now())) ||
        !!(setMidnightTime(parseISO(goal.finished_at)).getTime() > setMidnightTime(new Date(Date.now())).getTime())
    )
}

const calculateCreatedDaysAgo = (goal: IGoalWithRituals): number => {
    if (!goal.created_at) return 0
    const created = goal?.goal_ritual?.created_at ? goal?.goal_ritual?.created_at : goal.created_at
    const today = Date.now()
    const createdAt = parseISO(created).getTime()
    const diff = new Date(today - createdAt)
    return Math.floor(diff.getTime() / (1000 * 3600 * 24))
}

const totalRemainingDays = (goal: IGoalWithRituals): number => {
    const result = differenceInCalendarDays(parseISO(goal.finished_at).getTime(), new Date(Date.now()))
    return result
}

const calculateIsDeadline = (goal: IGoalWithRituals) => {
    return totalRemainingDays(goal) <= 1
}
