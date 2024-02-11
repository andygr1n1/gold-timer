import { types, cast } from 'mobx-state-tree'
import { Goals$ } from '../../modules/goals/mst/Goals.store'
import { User$ } from './User.store'
import { SideMenu$ } from './side-menu/SideMenu.store'
import { Notes$ } from '@/modules/notes/mst/stores/Notes.store'
import { Sprints$ } from '@/modules/sprints/mst/stores/Sprints.store'
import { GoalsSlides$ } from '@/modules/goals-slides/mst/stores/GoalsSlides.store'

export const Root$ = types
    .model('Root$', {
        user$: types.optional(User$, {}),
        goals$: types.optional(Goals$, {}),
        goals_slides$: types.optional(GoalsSlides$, {}),
        notes$: types.optional(Notes$, {}),
        sprints$: types.optional(Sprints$, {}),
        loading: false,
        //
        side_menu$: types.optional(SideMenu$, {}),
        //
        theme: types.maybeNull(types.enumeration(['night', 'day'])),
    })
    .views((self) => ({
        get isDarkTheme(): boolean {
            return self.theme === 'night'
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
    .actions((self) => ({
        clearStore(): void {
            self.goals$ = cast({})
            self.goals_slides$ = cast({})
            self.notes$ = cast({})
            self.sprints$ = cast({})
            self.user$ = cast({})
        },
    }))
