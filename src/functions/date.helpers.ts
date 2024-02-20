import { format, parseISO, set } from 'date-fns'

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
export const convertDateToString = (date: Date): string => {
    return format(date, 'yyyy-MM-dd HH:mm:ss')
}

export const convertStringToDate = (date: string): Date => {
    return parseISO(date)
}

export const DaysOfTheWeek = [
    { value: '1', label: 'Monday' },
    { value: '2', label: 'Tuesday' },
    { value: '3', label: 'Wednesday' },
    { value: '4', label: 'Thursday' },
    { value: '5', label: 'Friday' },
    { value: '6', label: 'Saturday' },
    { value: '0', label: 'Sunday' },
]
