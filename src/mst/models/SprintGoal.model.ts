import { types } from 'mobx-state-tree'
import { generateMstId } from '../mst.helper'

export const SprintGoal = types
    .model('SprintGoal', {
        id: generateMstId(),
        title: '',
        status: types.maybeNull(types.boolean),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))