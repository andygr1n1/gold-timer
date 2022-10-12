import { types } from 'mobx-state-tree'
import { Goal } from '../models/Goal.model'

export const GoalCreator$ = types
    .compose(
        Goal,
        types.model({
            is_open: false,
            freeze: false,
        }),
    )
    .named('GoalCreator$')
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
