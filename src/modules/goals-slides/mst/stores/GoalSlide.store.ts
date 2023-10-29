import { types } from 'mobx-state-tree'

export const GoalSlide$ = types.model('GoalSlide$', {
    id: types.snapshotProcessor(types.identifier, {
        preProcessor(sn: string | undefined) {
            if (!sn) return crypto.randomUUID()

            return sn
        },
    }),
    owner_id: '',
    img_path: '',
    title: '',
    active: true,
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
