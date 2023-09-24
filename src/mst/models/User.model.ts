import { types } from 'mobx-state-tree'

export const User = types.model('User', {
    id: '',
    name: '',
    phone: '',
    email: '',
    birthday: types.snapshotProcessor(types.maybeNull(types.Date), {
        preProcessor: (sn: Date | undefined | string | null) => {
            if (!sn) {
                return null
            }
            if (typeof sn === 'string') {
                return new Date(sn)
            }
            return sn
        },
    }),
    password: '',
})
