import { types, cast } from 'mobx-state-tree'
import { User$ } from './User.store'
import { SideMenu$ } from './side-menu/SideMenu.store'
import { Sprints$ } from '@/modules/sprints/mst/stores/Sprints.store'

export const Root$ = types
    .model('Root$', {
        user$: types.optional(User$, {}),
        sprints$: types.optional(Sprints$, {}),
        loading: false,
        side_menu$: types.optional(SideMenu$, {}),
    })

    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
    .actions((self) => ({
        clearStore(): void {
            self.sprints$ = cast({})
            self.user$ = cast({})
        },
    }))
