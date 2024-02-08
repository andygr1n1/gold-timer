import { types, flow, applySnapshot, cast } from 'mobx-state-tree'
import { query_fetchGoalsByUserId } from '../../modules/goals/graphql/query_fetchGoalsByUserId'
import { Goals$ } from '../../modules/goals/mst/stores/Goals.store'
import { User$ } from './User.store'
import { processError } from '@/functions/processMessage'
import { SideMenu$ } from './side-menu/SideMenu.store'
import { Notes$ } from '@/modules/notes/mst/stores/Notes.store'
import { Sprints$ } from '@/modules/sprints/mst/stores/Sprints.store'
import { IGoal$SnapshotIn } from '@/modules/goals/mst/types'
import { GoalsSlides$ } from '@/modules/goals-slides/mst/stores/GoalsSlides.store'
import { GOAL_STATUS_ENUM } from '@/lib/enums'
import { uniqBy } from 'lodash-es'

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
        // concat will add goals!
        fetchGoals: flow(function* _fetchGoals(status: GOAL_STATUS_ENUM[]) {
            try {
                if (!self.user$.id) throw new Error('User id is undefined')

                const res: IGoal$SnapshotIn[] = yield query_fetchGoalsByUserId(self.user$.id, status)

                applySnapshot(self.goals$.goals, uniqBy(self.goals$.goals.concat(res), 'id'))
            } catch (e) {
                processError(e, 'fetchGoals error')
            }
        }),
    }))
