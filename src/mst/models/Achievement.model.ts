import { types } from 'mobx-state-tree'

export const Achievement = types
    .model({
        id: types.snapshotProcessor(types.identifier, {
            preProcessor(sn: string | undefined) {
                if (!sn) return crypto.randomUUID()

                return sn
            },
        }),
        title: '',
        description: '',
        visible: true,
        owner_id: '',
        img_path: '',
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
    .views((self) => ({
        get onCreateAchievementDisabled(): boolean {
            return !self.title || !self.img_path
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
    .actions(() => ({}))
