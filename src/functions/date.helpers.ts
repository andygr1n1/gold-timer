import { set } from 'date-fns'

export const setMidnightTime = (date: Date): Date => {
    return set(date, {
        hours: 23,
        minutes: 59,
        seconds: 59,
        milliseconds: 59,
    })
}

export const setZeroTime = (date: Date): Date => {
    return set(date, {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    })
}
