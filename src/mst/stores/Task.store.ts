import { types } from 'mobx-state-tree'
import { Task } from '../models/Task.model'

export const Task$ = types
    .compose(
        Task,
        types.model({
            id: types.snapshotProcessor(types.identifier, {
                preProcessor(sn: string | undefined) {
                    if (!sn) return crypto.randomUUID()

                    return sn
                },
            }),
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
        }),
    )
    .named('Task$')
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
