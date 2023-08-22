import { types } from 'mobx-state-tree'

export const SideMenuSprints$ = types
    .model('SideMenuSprints$', {
        visible: false,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
