import { type NotificationInstance } from 'antd/es/notification/interface'
import { types, flow, applySnapshot, toGenerator, cast } from 'mobx-state-tree'
import { fetchGoalsByUserId } from '../../graphql/queries/fetchGoalsByUserId.query'
import { IGoal$SnapshotIn, IGoalRitual, IGoalRitualSnapshotIn } from '../types'
import { Achievements$ } from './Achievements.store'
import { Goals$ } from './Goals.store'
import { User$ } from './User.store'
import { ModalWindows$ } from './ModalWindows.store'
import { fetchRitualPowerInfo } from '@/graphql/queries/fetchRitualPowerInfo.query'
import { IUserByPkResponse, fetchUserByPk } from '@/graphql/queries/fetchUserByPk.query'
import { processError } from '@/helpers/processError.helper'
import { SideMenu$ } from './side-menu/SideMenu.store'
import { Notes$ } from '@/modules/notes/mst/stores/Notes.store'
import { Sprints$ } from '@/modules/sprints/mst/stores/Sprints.store'

export const Root$ = types
    .model('Root$', {
        user$: types.optional(User$, {}),
        goals$: types.optional(Goals$, {}),
        achievements$: types.optional(Achievements$, {}),
        notes$: types.optional(Notes$, {}),
        sprints$: types.optional(Sprints$, {}),
        loading: false,
        //
        modal_windows$: types.optional(ModalWindows$, {}),
        side_menu$: types.optional(SideMenu$, {}),
        notificationApi: types.maybe(types.frozen<NotificationInstance>()),
        //
        theme: types.maybeNull(types.enumeration(['night', 'day'])),
    })
    .views((self) => ({
        get isValidating(): boolean {
            return self.loading && !!!self.user$.id
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
    .actions((self) => ({
        fetchUserInfo: flow(function* _fetchUserInfo() {
            try {
                if (!self.user$.id) throw new Error('fetchUserInfo::: no userId')
                const userInfo = yield* toGenerator(fetchUserByPk(self.user$.id))
                console.log('userInfo', userInfo)
                applySnapshot(self.user$, userInfo)
            } catch (e) {
                processError(e)
            }
        }) as () => Promise<IUserByPkResponse | undefined>,
        fetchRitualPowerInfo: flow(function* _fetchRitualPowerInfo() {
            try {
                if (!self.user$.id) throw new Error('User id is undefined')

                const fetchRitualPowerInfoResponse = yield* toGenerator(fetchRitualPowerInfo(self.user$.id))
                if (!fetchRitualPowerInfoResponse) throw new Error('fetchGoals error')
                const allRitualsCount = fetchRitualPowerInfoResponse.length
                const maxPoweredGoal: IGoalRitualSnapshotIn = {
                    ritual_power: fetchRitualPowerInfoResponse[0]?.ritual_power || 0,
                    goal_title: fetchRitualPowerInfoResponse[0]?.goal.title || '',
                }
                const totalRitualPower = fetchRitualPowerInfoResponse.reduce(
                    (acc: number, item: IGoalRitual) => acc + item.ritual_power,
                    0,
                )
                self.user$.onChangeField('total_ritual_power', totalRitualPower)
                self.user$.onChangeField('number_of_rituals', allRitualsCount)
                self.user$.onChangeField('most_powerful_ritual', cast(maxPoweredGoal))
            } catch (e) {
                processError(e, 'fetchRitualPowerInfo error')
            }
        }),
        fetchGoals: flow(function* _fetchGoals() {
            try {
                if (!self.user$.id) throw new Error('User id is undefined')

                const res: IGoal$SnapshotIn[] = yield fetchGoalsByUserId(self.user$.id)

                if (!res) throw new Error('fetchGoals error')

                applySnapshot(self.goals$.goals, res)
            } catch (e) {
                processError(e, 'fetchGoals error')
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
                const userId = self.user$.id
                if (!userId) throw new Error('fetchAndStabilizeAppData error: user id')

                // fetch details related to user
                yield self.fetchUserInfo()
                // fetch ritual power info
                yield self.fetchRitualPowerInfo()
                //
                yield self.fetchGoals()
                // yield self.fetchAchievements()
                yield self.notes$.fetchNotes()
                //
                // TODO to fetch only sprints that are not finished and already started
                yield self.sprints$.fetchSprints()
                //
                //
                self.autoRitualizeExpiredRitualizedGoals()
                self.loading = false
            } catch (e) {
                self.loading = false
                processError(e, 'fetchAndStabilizeAppData error')
            }
        }),
    }))
