import { fetchAchievementsByUserId } from '@/graphql/queries/fetchAchievementsByUserId.query'
import { fethUserByPk } from '@/graphql/queries/fethUserByPk.query'
import { types, flow, applySnapshot } from 'mobx-state-tree'
import { fetchGoalsByUserId } from '../../graphql/queries/fetchGoalsByUserId.query'
import { IGoal$SnapshotIn } from '../types'
import { Achievements$ } from './Achievements.store'
import { Goals$ } from './Goals.store'
import { User$ } from './User.store'
import { Tasks$ } from './Tasks.store'

export const Root$ = types
    .model('Root$', {
        user$: types.optional(User$, {}),
        goals$: types.optional(Goals$, {}),
        achievements$: types.optional(Achievements$, {}),
        tasks$: types.optional(Tasks$, {}),
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

                const res: IGoal$SnapshotIn[] = yield fetchGoalsByUserId(self.user$.id)
                if (!res) throw new Error('fetchGoals error')

                applySnapshot(self.goals$.goals, res)
            } catch (e) {
                console.error('applySavedLocation error', e)
            }
        }),
        fetchAchievements: flow(function* _fetchGoals() {
            try {
                if (!self.user$.id) throw new Error('User id is undefined')

                const res: IGoal$SnapshotIn[] = yield fetchAchievementsByUserId(self.user$.id)
                if (!res) throw new Error('fetchGoals error')
                applySnapshot(self.achievements$.achievements, res)
            } catch (e) {
                console.error('applySavedLocation error', e)
            }
        }),
    }))
