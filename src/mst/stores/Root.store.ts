import { fethUserByPk } from '@/graphql/queries/fethUserByPk.query'
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
    }))
    .actions((self) => ({
        fetchUserInfo: flow(function* _fetchUserInfo() {
            const userInfo = yield fethUserByPk('f192b78e-399e-4fc5-9676-ce0bf65b220b')
            applySnapshot(self.user$, userInfo)
        }),
        fetchGoals: flow(function* _fetchGoals() {
            try {
                if (!self.user$.id) throw new Error('User id is undefined')
                const res: IGoalSnapshotIn[] = yield fetchGoalsByUserId(self.user$.id)
                applySnapshot(self.goals$.goals, res)
            } catch (e) {
                console.error('applySavedLocation error', e)
            }
        }),
    }))
