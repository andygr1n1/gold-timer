import { compact } from 'lodash-es'
import { ISprint$ } from '../types'

export const filterSprintByInput = (sprint: ISprint$, filter: string): boolean => {
    if (filter.trim() === '@') return true
    if (filter.trim().match(/(^@)/g)) {
        const statusList = compact(filter.replace('@', '').split(' '))
        console.log('status', statusList)
        return !!statusList.find((status) => sprint.status.toLowerCase().trim().includes(status.trim().toLowerCase()))
    }

    return sprint.title.toLowerCase().trim().includes(filter.trim().toLowerCase())
}
