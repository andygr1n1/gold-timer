import { convertDateToString } from '@/functions/date.helpers'
import { IGoal } from '../service'
import { add, set, sub } from 'date-fns'

export const test_data_futureGoal = (): IGoal => ({
    id: crypto.randomUUID(),
    title: 'Future Goal',
    status: 'active',
    finished_at: convertDateToString(add(new Date(Date.now()), { days: 1 })),
    created_at: convertDateToString(sub(new Date(Date.now()), { days: 10 })),
})

export const test_data_expiredGoal = (): IGoal => ({
    id: crypto.randomUUID(),
    title: 'Expired Goal',
    status: 'active',
    finished_at: convertDateToString(sub(new Date(Date.now()), { days: 1 })),
    created_at: convertDateToString(sub(new Date(Date.now()), { days: 10 })),
})

export const test_data_todayGoal = (): IGoal => ({
    id: crypto.randomUUID(),
    title: 'Today Goal',
    status: 'active',
    finished_at: convertDateToString(set(new Date(Date.now()), { hours: 23 })),
    created_at: convertDateToString(sub(new Date(Date.now()), { days: 10 })),
})

export const test_data_TodayGoals = () => [
    test_data_todayGoal(),
    test_data_todayGoal(),
    test_data_todayGoal(),
    test_data_todayGoal(),
]
