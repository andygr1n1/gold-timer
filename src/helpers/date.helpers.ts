import { set, format, add, sub } from 'date-fns'

export const setMidnightTime = (date: Date | string): Date => {
    const newDate = set(date, {
        hours: 23,
        minutes: 59,
        seconds: 59,
        milliseconds: 59,
    })

    const timeZoneOffsetInHours = new Date().getTimezoneOffset() / 60

    const stabilizeDateByTimeZone =
        timeZoneOffsetInHours < 0
            ? add(newDate, {
                  hours: Math.abs(timeZoneOffsetInHours),
              })
            : sub(newDate, {
                  hours: Math.abs(timeZoneOffsetInHours),
              })

    return stabilizeDateByTimeZone
}

export const setZeroTime = (date: Date): Date => {
    const newDate = set(date, {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    })

    const timeZoneOffsetInHours = new Date().getTimezoneOffset() / 60

    const stabilizeDateByTimeZone =
        timeZoneOffsetInHours < 0
            ? add(newDate, {
                  hours: Math.abs(timeZoneOffsetInHours),
              })
            : sub(newDate, {
                  hours: Math.abs(timeZoneOffsetInHours),
              })

    return stabilizeDateByTimeZone
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

export const prepareFinishedAtForInsert = (date: Date | string): string => {
    const updated = set(date, { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 })
    return formatDateWithTimezone(updated)
}

// Helper function to get timezone offset in HH:mm format
function getTimezoneOffset(date: Date): string {
    const offset = date.getTimezoneOffset()
    const absOffset = Math.abs(offset)
    const hours = Math.floor(absOffset / 60)
    const minutes = absOffset % 60
    return (offset <= 0 ? '+' : '-') + String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0')
}

// Function to format a date with timezone offset
export function formatDateWithTimezone(date = new Date()): string {
    const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm:ss")
    const timezoneOffset = getTimezoneOffset(date)
    return `${formattedDate}${timezoneOffset}`
}

export const calculateCreatedDaysAgo = (created?: string): number => {
    if (!created) return 0
    const today = Date.now()
    const createdAt = convertStringDate(created).getTime()
    const diff = new Date(today - createdAt)
    return Math.floor(diff.getTime() / (1000 * 3600 * 24))
}
