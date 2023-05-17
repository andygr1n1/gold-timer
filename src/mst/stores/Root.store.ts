import { fetchAchievementsByUserId } from '@/graphql/queries/fetchAchievementsByUserId.query'
import { fetchUserByPk } from '@/graphql/queries/fetchUserByPk.query'
import { types, flow, applySnapshot, toGenerator } from 'mobx-state-tree'
import { fetchGoalsByUserId } from '../../graphql/queries/fetchGoalsByUserId.query'
import { IGoal$SnapshotIn } from '../types'
import { Achievements$ } from './Achievements.store'
import { Goals$ } from './Goals.store'
import { User$ } from './User.store'
import { Tasks$ } from './Tasks.store'
import { ModalWindows$ } from './ModalWindows.store'

export const Root$ = types
    .model('Root$', {
        user$: types.optional(User$, {}),
        goals$: types.optional(Goals$, {}),
        achievements$: types.optional(Achievements$, {}),
        tasks$: types.optional(Tasks$, {}),
        loading: false,
        modal_windows$: types.optional(ModalWindows$, {}),
    })
    .views((self) => ({
        get isValidating(): boolean {
            return self.loading && !!!self.user$.id
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
    .actions((self) => ({
        fetchUserInfo: flow(function* _fetchUserInfo() {
            const userInfo = yield* toGenerator(fetchUserByPk('f192b78e-399e-4fc5-9676-ce0bf65b220b'))
            applySnapshot(self.user$, userInfo)
            return userInfo
        }),
        fetchGoals: flow(function* _fetchGoals(userId?: string) {
            try {
                if (!userId) throw new Error('User id is undefined')

                const res: IGoal$SnapshotIn[] = yield fetchGoalsByUserId(userId)
                if (!res) throw new Error('fetchGoals error')

                applySnapshot(self.goals$.goals, res)
            } catch (e) {
                console.error('fetchGoals error', e)
            }
        }),
        fetchAchievements: flow(function* _fetchGoals(userId?: string) {
            const uId = userId || self.user$.id
            try {
                if (!uId) throw new Error('User id is undefined')

                const res: IGoal$SnapshotIn[] = yield fetchAchievementsByUserId(uId)
                if (!res) throw new Error('fetchGoals error')
                applySnapshot(self.achievements$.achievements, res)
            } catch (e) {
                console.error('fetchAchievements error', e)
            }
        }),
        autoRitualizeExpiredRitualizedGoals(): void {
            const { expiredRitualGoals } = self.goals$
            if (!expiredRitualGoals.length) return
            expiredRitualGoals.forEach((goal) => {
                goal.enforceGoalRitual({ messageSuccess: false })
            })
        },
    }))
    .actions((self) => ({
        fetchAndStabilizeAppData: flow(function* _fetchAppData() {
            try {
                self.loading = true
                const userInfo = yield* toGenerator(self.fetchUserInfo())
                if (!userInfo) throw new Error('fetchAndStabilizeAppData error: user id')
                yield self.fetchGoals(userInfo?.id)
                yield self.fetchAchievements(userInfo?.id)
                //
                self.autoRitualizeExpiredRitualizedGoals()
                self.loading = false
            } catch (e) {
                self.loading = false
                console.error('fetchAppData error', e)
            }
        }),
    }))
