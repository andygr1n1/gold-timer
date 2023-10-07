import { GOAL_TYPE_ENUM } from './../../helpers/enums'
import { RITUAL_TYPE_ENUM, GOAL_STATUS_ENUM } from '@/helpers/enums'
import { completeGoalMutation } from '@/graphql/mutations/completeGoal.mutation'
import { failGoalMutation } from '@/graphql/mutations/failGoal.mutation'
import { cast, flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { Goal } from '../models/Goal.model'
import { Goals$ } from './Goals.store'
import { favoriteGoalMutation } from '@/graphql/mutations/favoriteGoal.mutation'
import { message } from 'antd'
import { ritualizeGoalMutation } from '@/graphql/mutations/ritualizeGoal.mutation'
import { generateNewRitualCircle } from '@/helpers/ritual-circle/generateNewRitualCircle'
import { deleteGoalMutation } from '@/graphql/mutations/deleteGoal.mutation'
import { Root$ } from './Root.store'
import { IUser$ } from '../types'
import { addCoinsMutation } from '@/graphql/mutations/addCoins.mutation'
import { getCoinsFromRitual } from '@/helpers/getCoinsFromRitual'
import { getCoinsFromCompletedGoal } from '@/helpers/getCoinsFromCompletedGoal'

export const Goal$ = types
    .compose(
        Goal,
        types.model({
            //
            // to understand how to update goal, when a child is creating
            // parent goal can be failed, completed or deprecated if was frozen
            goal_new_status: types.maybe(types.enumeration(Object.values(GOAL_STATUS_ENUM))),
            //
            goal_ritualized_mode: false,
        }),
    )
    .named('Goal$')
    .views((self) => ({
        get isChildGoal(): boolean {
            return !!self.parent_goal_id
        },
        get isCompleted(): boolean {
            return self.status === GOAL_STATUS_ENUM.COMPLETED
        },
        get isRitualGoal(): boolean {
            return !!self.goal_ritual?.ritual_power
        },
        get isExpired(): boolean {
            if (!self.finished_at) return false
            return !!(self.finished_at < new Date(Date.now()))
        },
        get isFavorite(): boolean {
            return self.is_favorite
        },
        get ritualGoalPower(): number {
            return self.goal_ritual?.ritual_power ?? 0
        },
        get ritualGoalInterval(): number {
            return self.goal_ritual?.ritual_interval ?? 0
        },
        get ritualGoalType(): RITUAL_TYPE_ENUM {
            return self.goal_ritual?.ritual_type || RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS
        },
        get isFromFuture(): boolean {
            if (!self.created_at) return false
            return !!(self.created_at > new Date(Date.now()))
        },

        get goalType(): GOAL_TYPE_ENUM {
            if (this.isExpired) return GOAL_TYPE_ENUM.EXPIRED
            if (this.isRitualGoal) return GOAL_TYPE_ENUM.RITUALIZED

            return GOAL_TYPE_ENUM.ACTIVE
        },

        get daysEstimationCount(): number {
            if (this.isExpired) return self.expiredDaysCount
            return self.remainingDays
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        goGoalViewMode(): void {
            const { openGoalCreator } = getParentOfType(self, Goals$)

            openGoalCreator({ selectedGoal: cast(self), view_mode: true })
        },
        goGoalRitualizedMode(): void {
            const { openGoalCreator } = getParentOfType(self, Goals$)

            self.goal_ritualized_mode = true

            if (!self.goal_ritual) {
                self.goal_ritual = cast({
                    goal_id: self.id,
                    ritual_id: '',
                    ritual_type: RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
                    ritual_power: 0,
                    ritual_interval: 7,
                })
            }
            openGoalCreator({ selectedGoal: cast(self), edit_mode: true })
        },

        completeGoal: flow(function* _completeGoal() {
            try {
                const result = yield completeGoalMutation(self.id)
                if (!result) throw new Error('completeGoal error')

                self.status = result

                // >> coins
                const user$: IUser$ = getParentOfType(self, Root$).user$

                const mPoints = getCoinsFromCompletedGoal(cast(self), user$.coins)

                const resGoalCoins = yield* toGenerator(addCoinsMutation(mPoints))

                if (resGoalCoins === undefined) throw new Error('addMPointsMutation error')

                user$.onChangeField('coins', resGoalCoins)

                // << coins

                message.success({
                    content: 'Goal successfully completed',
                })
            } catch (e) {
                alert(e)

                message.error({
                    content: 'Server error, failed to complete goal',
                })
            }
        }),
        // autoRitualize
        enforceGoalRitual: flow(function* _ritualizeGoal(
            options: { messageSuccess: boolean } = { messageSuccess: true },
        ) {
            try {
                if (!self.finished_at) throw new Error('Goal has no estimation endpoint')

                const newRitualPower = self.isExpired ? self.ritualGoalPower : self.ritualGoalPower + 1
                const { ritual_goal_created_at, ritual_goal_finished_at } = generateNewRitualCircle({
                    ritual_type: self.ritualGoalType,
                    new_ritual_interval: self.ritualGoalInterval,
                    goal_created_at: self.created_at,
                    goal_finished_at: self.finished_at,
                })
                const result = yield* toGenerator(
                    ritualizeGoalMutation(self.id, ritual_goal_created_at, ritual_goal_finished_at, newRitualPower),
                )
                if (!result) throw new Error('ritualize goal error')

                self.created_at = ritual_goal_created_at
                self.finished_at = ritual_goal_finished_at
                self.goal_ritual?.onChangeField('ritual_power', newRitualPower)
                //

                // >> coins
                if (!self.isExpired) {
                    const user$: IUser$ = getParentOfType(self, Root$).user$

                    const mPoints = getCoinsFromRitual(newRitualPower, user$.coins)

                    const resGoalCoins = yield* toGenerator(addCoinsMutation(mPoints))

                    if (resGoalCoins === undefined) throw new Error('addMPointsMutation error')

                    user$.onChangeField('coins', resGoalCoins)
                    user$.onChangeField('total_ritual_power', user$.total_ritual_power + 1)
                }

                // << coins

                options.messageSuccess &&
                    message.success({
                        content: 'Goal successfully ritualized',
                    })
            } catch (e) {
                alert(e)

                message.error({
                    content: 'Server error, failed to ritualize goal',
                })
            }
        }),
        createNewChild(): void {
            const { openGoalCreator } = getParentOfType(self, Goals$)
            openGoalCreator({ parentGoalId: self.id })
        },
        failGoal: flow(function* _failGoal() {
            try {
                const result = yield failGoalMutation(self.id)
                if (!result) throw new Error('failGoal error')
                const { destroyGoal } = getParentOfType(self, Goals$)
                destroyGoal(self.id)
            } catch (e) {
                alert(e)
            }
        }),
        deleteGoal: flow(function* _deleteGoal() {
            try {
                const result = yield deleteGoalMutation(self.id)
                if (!result) throw new Error('deleteGoal error')
                const { destroyGoal } = getParentOfType(self, Goals$)
                destroyGoal(self.id)
            } catch (e) {
                alert(e)
            }
        }),
        favoriteGoal: flow(function* _favoriteGoal() {
            try {
                const result = yield* toGenerator(favoriteGoalMutation(self.id, !self.is_favorite))
                if (result === undefined) throw new Error('favoriteGoal error')
                self.is_favorite = result ?? false
            } catch (e) {
                alert(e)
            }
        }),
    }))
