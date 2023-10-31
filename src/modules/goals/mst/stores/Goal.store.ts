import { GOAL_TYPE_ENUM } from '../../../../helpers/enums'
import { RITUAL_TYPE_ENUM, GOAL_STATUS_ENUM } from '@/helpers/enums'
import { mutation_completeGoal } from '@/modules/goals/graphql/mutation_completeGoal'
import { cast, flow, getParentOfType, toGenerator, castToSnapshot } from 'mobx-state-tree'
import { Goal } from '../models/Goal.model'
import { Goals$ } from './Goals.store'
import { mutation_favoriteGoal } from '@/modules/goals/graphql/mutation_favoriteGoal'
import { message } from 'antd'
import { mutation_ritualizeGoal } from '@/modules/goals/graphql/mutation_ritualizeGoal'
import { generateNewRitualCircle } from '@/helpers/ritual-circle/generateNewRitualCircle'
import { mutation_deleteGoal } from '@/modules/goals/graphql/mutation_deleteGoal'
import { Root$ } from '../../../../mst/stores/Root.store'
import { addCoinsMutation } from '@/graphql/mutations/addCoins.mutation'
import { getCoinsFromRitual } from '@/helpers/getCoinsFromRitual'
import { getCoinsFromCompletedGoal } from '@/helpers/getCoinsFromCompletedGoal'
import { setMidnightTime } from '@/helpers/date.helpers'
import { IUser$ } from '@/mst/types'
import { IGoal$SnapshotIn } from '@/modules/goals/mst/types'
import { processError } from '@/helpers/processError.helper'

export const Goal$ = Goal.named('Goal$')
    .views((self) => ({
        get isChildGoal(): boolean {
            return !!self.parent_goal_id
        },
        get isCompleted(): boolean {
            return self.status === GOAL_STATUS_ENUM.COMPLETED
        },
        get hasRitualPower(): boolean {
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
            if (!self.created_at || !self.finished_at) return false

            return (
                !!(self.created_at > new Date(Date.now())) ||
                !!(setMidnightTime(self.finished_at).getTime() !== setMidnightTime(new Date(Date.now())).getTime())
            )
        },

        get goalType(): GOAL_TYPE_ENUM {
            if (this.isExpired) return GOAL_TYPE_ENUM.EXPIRED
            if (this.hasRitualPower) return GOAL_TYPE_ENUM.RITUALIZED

            return GOAL_TYPE_ENUM.ACTIVE
        },

        get daysEstimationCount(): number {
            if (this.isExpired) return self.expiredDaysCount
            return self.totalRemainingDays
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
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
                    mutation_ritualizeGoal(self.id, ritual_goal_created_at, ritual_goal_finished_at, newRitualPower),
                )
                if (!result) throw new Error('ritualize goal error')

                const { goals } = getParentOfType(self, Goals$)

                const selected = goals?.find((goal) => goal.id === self.id)

                if (!selected) throw new Error('ritualize goal error')

                selected.onChangeField('created_at', ritual_goal_created_at)
                selected.onChangeField('finished_at', ritual_goal_finished_at)
                selected.goal_ritual?.onChangeField('ritual_power', newRitualPower)
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
                processError('Server error, failed to ritualize goal')
            }
        }),
        deleteGoal: flow(function* _deleteGoal() {
            try {
                const toggleDelete = !!self.deleted_at
                const result = yield mutation_deleteGoal(self.id, !toggleDelete)
                if (result === undefined) throw new Error('deleteGoal error')
                const { goals } = getParentOfType(self, Goals$)
                const selected = goals?.find((goal) => goal.id === self.id)
                selected?.onChangeField('deleted_at', result)
                self.deleted_at = result
            } catch (e) {
                processError(e)
            }
        }),
        favoriteGoal: flow(function* _favoriteGoal(options?: { noRequest?: boolean }) {
            if (options?.noRequest) {
                self.is_favorite = !self.is_favorite
                return
            }
            const { goals } = getParentOfType(self, Goals$)
            const selected = goals?.find((goal) => goal.id === self.id)

            try {
                const result = yield* toGenerator(mutation_favoriteGoal(self.id, !self.is_favorite))
                if (result === undefined || !selected) throw new Error('favoriteGoal error')
                self.is_favorite = result ?? false
                selected.onChangeField('is_favorite', result ?? false)
            } catch (e) {
                processError(e)
            }
        }),
    }))
    .actions((self) => ({
        completeGoal: flow(function* _completeGoal() {
            const { goals, onChangeField } = getParentOfType(self, Goals$)
            try {
                if (self.hasRitualPower) {
                    yield self.enforceGoalRitual()
                    onChangeField('selected_goal', undefined)
                    return
                }

                const result = yield mutation_completeGoal(self.id)
                if (!result) throw new Error('completeGoal error')

                goals?.find((goal) => goal.id === self.id)?.onChangeField('status', result)

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

                onChangeField('selected_goal', undefined)
            } catch (e) {
                processError(e)

                message.error({
                    content: 'Server error, failed to complete goal',
                })
            }
        }),
        updateSelf(newData: IGoal$SnapshotIn | undefined): void {
            if (!newData) return
            self.title = castToSnapshot(newData.title)
            self.slogan = castToSnapshot(newData.slogan)
            self.description = castToSnapshot(newData.description)
            self.privacy = castToSnapshot(newData.privacy)
            self.status = castToSnapshot(newData.status)
            self.finished_at = castToSnapshot(newData.finished_at)
            self.deleted_at = castToSnapshot(newData.deleted_at)
            self.is_favorite = castToSnapshot(newData.is_favorite)
            self.goal_ritual && self.onChangeField('goal_ritual', castToSnapshot(newData.goal_ritual))
        },
    }))
