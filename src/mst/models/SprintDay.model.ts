import { types } from 'mobx-state-tree'
import { generateMstId } from '../mst.helper'

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
    }))
