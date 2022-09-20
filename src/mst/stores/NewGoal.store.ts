import { types } from 'mobx-state-tree'
import { Goal } from '../models/Goal.model'

export const NewGoal$ = types
    .compose(
        Goal,
        types.model({
            freeze: false,
        }),
    )
    .named('NewGoal$')
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
