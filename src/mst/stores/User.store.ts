import { types } from 'mobx-state-tree'
import { GoalRitual } from '../models/GoalRitual.model'

export const User$ = types
    .model('User$', {
        id: '',
        name: '',
        phone: '',
        email: '',
        birthday: types.snapshotProcessor(types.Date, {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return new Date()
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
        coins: 0,
        total_ritual_power: 0,
        number_of_rituals: 0,
        most_powerful_ritual: types.optional(GoalRitual, {}),
        avatar: types.maybeNull(types.string),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
