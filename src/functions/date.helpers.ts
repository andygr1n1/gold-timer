import { format, set } from 'date-fns'
export const setMidnightTime = (date: Date): Date => {
    const dateWithDefaultUTC = new Date(date.getTime() + date.getTimezoneOffset() * 60000)
    const newDate = set(dateWithDefaultUTC, {
        hours: 23,
        minutes: 59,
        seconds: 59,
        milliseconds: 59,
    })

    return newDate
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

export const convertStringDate = (date: string): Date => {
    /* removing UTC */
    return new Date(date.replace(/Z|[\+\-]\d\d:\d\d$/gi, ''))
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

export const dateAtZeroTime = (date?: Date | string): string => {
    if (!date) date = new Date()

    if (typeof date === 'string') {
        date = new Date(date)
    }

    return (
        date.getFullYear() +
        '-' +
        ('0' + (date.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + date.getDate()).slice(-2) +
        ' ' +
        '00' +
        ':' +
        '00' +
        ':' +
        '00'
    )
}
