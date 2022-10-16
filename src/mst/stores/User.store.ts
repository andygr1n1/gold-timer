import { types } from 'mobx-state-tree'

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
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
