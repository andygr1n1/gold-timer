import { SPRINT_STATUS_ENUM } from './sprints.enum'

export const getSprintBgByStatus = (status: SPRINT_STATUS_ENUM, todayIsChecked: boolean): string => {
    const defaultClass = '2xl:border-l-solid border-t-solid border-t-[20px] 2xl:border-t-0 2xl:border-l-[20px] '
    switch (status) {
        case SPRINT_STATUS_ENUM.FREEZED:
            return `${defaultClass} border-blue-500/80`
        case SPRINT_STATUS_ENUM.ACTIVE:
            return `${defaultClass} ${todayIsChecked ? 'border-emerald-500/80' : 'border-cyan-500/80'}`
        case SPRINT_STATUS_ENUM.FUTURE:
            return `${defaultClass} border-rose-500/80`
        default:
            return `${defaultClass} border-gray-400 2xl:border-transparent`
    }
}
