import { types, cast } from 'mobx-state-tree'
import { User$ } from './User.store'
import { SideMenu$ } from './side-menu/SideMenu.store'
import { Notes$ } from '@/modules/notes/mst/stores/Notes.store'
import { Sprints$ } from '@/modules/sprints/mst/stores/Sprints.store'
import { GoalsSlides$ } from '@/modules/goals-slides/mst/stores/GoalsSlides.store'

export const Root$ = types
    .model('Root$', {
        user$: types.optional(User$, {}),
        goals_slides$: types.optional(GoalsSlides$, {}),
        notes$: types.optional(Notes$, {}),
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
            self.goals_slides$ = cast({})
            self.notes$ = cast({})
            self.sprints$ = cast({})
            self.user$ = cast({})
        },
    }))
