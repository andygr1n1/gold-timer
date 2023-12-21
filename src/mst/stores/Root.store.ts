import { types, flow, applySnapshot, toGenerator, cast } from 'mobx-state-tree'
import { query_fetchGoalsByUserId } from '../../modules/goals/graphql/query_fetchGoalsByUserId'
import { Achievements$ } from './Achievements.store'
import { Goals$ } from '../../modules/goals/mst/stores/Goals.store'
import { User$ } from './User.store'
import { fetchRitualPowerInfo } from '@/graphql/queries/fetchRitualPowerInfo.query'
import { IUserByPkResponse, fetchUserByPk } from '@/graphql/queries/fetchUserByPk.query'
import { processError } from '@/functions/processError.helper'
import { SideMenu$ } from './side-menu/SideMenu.store'
import { Notes$ } from '@/modules/notes/mst/stores/Notes.store'
import { Sprints$ } from '@/modules/sprints/mst/stores/Sprints.store'
import { IGoal$SnapshotIn, IGoalRitual, IGoalRitualSnapshotIn } from '@/modules/goals/mst/types'
import { GoalsSlides$ } from '@/modules/goals-slides/mst/stores/GoalsSlides.store'
import { GOAL_STATUS_ENUM } from '@/helpers/enums'
import { uniqBy } from 'lodash-es'
import { Error$ } from './Error.store'

export const Root$ = types
    .model('Root$', {
        user$: types.optional(User$, {}),
        goals$: types.optional(Goals$, {}),
        goals_slides$: types.optional(GoalsSlides$, {}),
        achievements$: types.optional(Achievements$, {}),
        notes$: types.optional(Notes$, {}),
        sprints$: types.optional(Sprints$, {}),
        loading: false,
        //
        side_menu$: types.optional(SideMenu$, {}),
        //
        theme: types.maybeNull(types.enumeration(['night', 'day'])),
        //
        error$: types.optional(Error$, {}),
    })
    .views((self) => ({
        get isValidating(): boolean {
            return self.loading && !!!self.user$.id
        },
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
            self.achievements$ = cast({})
            self.notes$ = cast({})
            self.sprints$ = cast({})
            self.user$ = cast({})
        },
        fetchUserInfo: flow(function* _fetchUserInfo() {
            try {
                if (!self.user$.id) throw new Error('fetchUserInfo::: no userId')
                const userInfo = yield* toGenerator(fetchUserByPk(self.user$.id))
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
                yield self.fetchGoals([GOAL_STATUS_ENUM.ACTIVE])
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
