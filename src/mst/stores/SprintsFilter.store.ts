import { types } from 'mobx-state-tree'

export const SprintsFilter$ = types
    .model({
        sprints_input_filter: '',
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
