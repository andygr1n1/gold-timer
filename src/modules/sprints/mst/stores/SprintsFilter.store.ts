import { types } from 'mobx-state-tree'
import { SPRINT_FILTER_STATUS_ENUM } from '@/modules/sprints/helpers/sprints.enum'

export const SprintsFilter$ = types
    .model({
        sprints_input_filter: '',
        sprints_selected_statuses: types.array(types.enumeration(Object.values(SPRINT_FILTER_STATUS_ENUM))),
    })
    .views((self) => ({
        get isStatusAll(): boolean {
            return !self.sprints_selected_statuses.length
        },
        isStatusActive(status: SPRINT_FILTER_STATUS_ENUM): boolean {
            return !!self.sprints_selected_statuses.includes(status)
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        addStatusFilter(newStatus: SPRINT_FILTER_STATUS_ENUM): void {
            const activeStatus = self.sprints_selected_statuses.find((status) => status === newStatus)

            if (activeStatus) {
                // remove status
                const indexOfActiveFilter = self.sprints_selected_statuses.indexOf(activeStatus)
                self.sprints_selected_statuses.splice(indexOfActiveFilter, 1)
            } else {
                // add status
                self.sprints_selected_statuses.push(newStatus)
            }
        },
    }))
