import { flow, getParentOfType, types } from 'mobx-state-tree'
import { Sprint$ } from '../stores/Sprint.store'

export const SprintDay = types
    .model('SprintDay', {
        id: types.identifier,
        status: types.maybeNull(types.boolean),
        date: types.snapshotProcessor(types.maybeNull(types.Date), {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return null
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
    })
    .views((self) => ({
        get isStatusFreezed(): boolean {
            return getParentOfType(self, Sprint$)?.isStatusFreezed
        },
        get isStatusChecked(): boolean {
            return getParentOfType(self, Sprint$)?.todayIsChecked
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        changeStatus: flow(function* _changeStatus() {
            self.status = !self.status || null
            const { updateSprintDays } = getParentOfType(self, Sprint$)
            updateSprintDays()
        }),
    }))
