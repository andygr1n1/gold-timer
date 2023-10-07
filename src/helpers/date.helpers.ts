import { set } from 'date-fns'

export const setMidnightTime = (date: Date): Date => {
    return set(date, {
        hours: 23,
        minutes: 59,
        seconds: 59,
        milliseconds: 59,
    })
}
