import { setMidnightTime } from '@/functions/date.helpers'
import { goals } from '@/graphql/generated'
import { differenceInCalendarDays, parseISO } from 'date-fns'

export const optimizeActiveGoalsData = (data: Partial<goals>[]) => {
    const goals = data.map((goal) => ({
        ...goal,
        created_at: parseISO(goal.created_at),
        finished_at: parseISO(goal.finished_at),
        isFromFuture: calculateIsFromFuture(goal),
        isDeadline: calculateIsDeadline(goal),
        totalRemainingDays: totalRemainingDays(goal),
    }))
    return goals
}

const calculateIsFromFuture = (goal: Partial<goals>): boolean => {
    return (
        !!(parseISO(goal.created_at) > new Date(Date.now())) ||
        !!(setMidnightTime(parseISO(goal.finished_at)).getTime() > setMidnightTime(new Date(Date.now())).getTime())
    )
}

const totalRemainingDays = (goal: Partial<goals>): number => {
    const result = differenceInCalendarDays(parseISO(goal.finished_at).getTime(), new Date(Date.now()))
    return result
}

const calculateIsDeadline = (goal: Partial<goals>) => {
    return totalRemainingDays(goal) <= 1
}
