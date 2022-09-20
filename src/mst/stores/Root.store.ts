import { types, flow, applySnapshot } from 'mobx-state-tree'
import { fetchGoalsByUserId } from '../../graphql/queries/fetchGoalsByUserId.query'
import { IGoalSnapshotIn } from '../types'
import { Goals$ } from './Goals.store'
import { User$ } from './User.store'

export const Root$ = types
    .model('Root$', {
        user$: types.optional(User$, {}),
        goals$: types.optional(Goals$, {}),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        fetchUserId(): void {
            self.user$.user_id = 'f192b78e-399e-4fc5-9676-ce0bf65b220b'
        },
    }))
    .actions((self) => ({
        fetchGoals: flow(function* _fetchGoals() {
            try {
                self.fetchUserId()
                const res: IGoalSnapshotIn[] = yield fetchGoalsByUserId(self.user$.user_id)
                applySnapshot(self.goals$.goals, res)
            } catch (e) {
                console.error('applySavedLocation error', e)
            }
        }),
    }))
