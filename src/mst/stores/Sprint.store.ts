import { types } from 'mobx-state-tree'
import { SprintGoal } from '../models/SprintGoal.model'
import { generateMstId } from '../mst.helper'
import { SprintDay } from '../models/SprintDay.model'

export const Sprint$ = types
    .model('Sprint$', {
        id: generateMstId(),
        title: '',
        description: types.maybeNull(types.string),
        sprints_goals: types.array(SprintGoal),
        sprints_days: types.array(SprintDay),
        achievement: types.maybeNull(types.string),
        duration: 7,
        img_path: types.maybeNull(types.string),
        started_at: types.snapshotProcessor(types.maybe(types.Date), {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return new Date(Date.now())
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
    })

    .actions((/* self */) => ({
        // onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
        //     self[key] = value
        // },
    }))
