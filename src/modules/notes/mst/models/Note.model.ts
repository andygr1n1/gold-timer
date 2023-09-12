import { types } from 'mobx-state-tree'

export const Note = types.model('Note', {
    id: types.snapshotProcessor(types.identifier, {
        preProcessor(sn: string | undefined) {
            if (!sn) return crypto.randomUUID()

            return sn
        },
    }),
    user_id: '',
    description: '',
    tag: '',
})
