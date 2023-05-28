import { types } from 'mobx-state-tree'

export const Link = types.model('Task', {
    id: types.snapshotProcessor(types.identifier, {
        preProcessor(sn: string | undefined) {
            if (!sn) return crypto.randomUUID()

            return sn
        },
    }),
    title: '',
    description: '',
    avatar: '',
    link: '',
    created_at: types.snapshotProcessor(types.maybe(types.Date), {
        preProcessor: (sn: Date | undefined | string) => {
            if (!sn) {
                return undefined
            }
            if (typeof sn === 'string') {
                return new Date(sn)
            }
            return sn
        },
    }),
})
