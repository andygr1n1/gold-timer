import { types } from 'mobx-state-tree'

export const User$ = types
    .model('User$', {
        id: '',
        name: '',
        email: '',
        role: types.optional(types.enumeration(['hero', 'guest', 'super_hero', 'admin']), 'guest'),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
    .views((self) => ({
        get isGuest() {
            return self.role === 'guest'
        },
        get isHero() {
            return self.role === 'hero'
        },
        get isSuperHero() {
            return self.role === 'super_hero' || self.role === 'admin'
        },
    }))
