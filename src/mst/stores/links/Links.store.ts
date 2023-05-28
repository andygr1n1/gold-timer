import { types } from 'mobx-state-tree'
import { Link$ } from './Link.store'

export const Links$ = types
    .model({
        links: types.array(Link$),
        new_link$: types.optional(Link$, {}),
        selected_link: types.safeReference(Link$),
    })
    .views(() => ({}))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
