import { flow, toGenerator, types } from 'mobx-state-tree'
import { generateMstId } from '../mst.helper'
import { processError } from '@/helpers/processError.helper'
import { updateSprintDayStatus } from '@/graphql/mutations/sprints/updateSprintDayStatus.mutation'

export const SprintDay = types
    .model('SprintDay', {
        id: generateMstId(),
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
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        changeStatus: flow(function* _changeStatus() {
            try {
                const statusRes = yield* toGenerator(updateSprintDayStatus(self.id, !self.status))
                if (statusRes === undefined) throw new Error('changeStatus error: SprintDay')
                self.status = statusRes
            } catch (e) {
                processError(e)
            }
        }),
    }))
