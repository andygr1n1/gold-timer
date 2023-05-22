import { GOAL_TYPE_ENUM } from './../../helpers/enums'
import { LOG_TYPE_ENUM, RITUAL_TYPE_ENUM, STATUS_ENUM } from '@/helpers/enums'
import { completeGoalMutation } from '@/graphql/mutations/completeGoal.mutation'
import { failGoalMutation } from '@/graphql/mutations/failGoal.mutation'
import { cast, flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { Goal } from '../models/Goal.model'
import { Goals$ } from './Goals.store'
import { generateLog } from '@/graphql/mutations/generateLog.mutation'
import { favoriteGoalMutation } from '@/graphql/mutations/favoriteGoal.mutation'
import { message } from 'antd'
import { ritualizeGoalMutation } from '@/graphql/mutations/ritualizeGoal.mutation'
import { generateNewRitualCircle } from '@/helpers/generate_new_ritual_circle'
import { deleteGoalMutation } from '@/graphql/mutations/deleteGoal.mutation'

export const Goal$ = types
    .compose(
        Goal,
        types.model({
            /* just for goal create mode */
            /*  */
            estimation_days: 0,
            //
            // to understand how to update goal, when a child is creating
            // parent goal can be failed, completed or deprecated if was frozen
            goal_new_status: types.maybe(types.enumeration(Object.values(STATUS_ENUM))),
            //
            goal_ritualized_mode: false,
        }),
    )
    .named('Goal$')
    .views((self) => ({
        get isChildGoal(): boolean {
            return !!self.parent_goal_id
        },
        get isFrozen(): boolean {
            return self.status === STATUS_ENUM.FROZEN
        },
        get isCompleted(): boolean {
            return self.status === STATUS_ENUM.COMPLETED
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

        get goalType(): GOAL_TYPE_ENUM {
            if (this.isFrozen) return GOAL_TYPE_ENUM.FROZEN
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
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        goGoalViewMode(): void {
            const { goGoalViewMode } = getParentOfType(self, Goals$)

            goGoalViewMode(cast(self))
        },
        goActivateFreezedGoal(): void {
            const { goFreezedGoalViewMode } = getParentOfType(self, Goals$)
            goFreezedGoalViewMode(cast(self))
        },
        goEditFrozenGoal(): void {
            const { goGoalViewMode } = getParentOfType(self, Goals$)
            goGoalViewMode(cast(self))
        },
        goGoalRitualizedMode(): void {
            const { goCreateEditMode } = getParentOfType(self, Goals$)

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
            goCreateEditMode(cast(self))
        },

        completeGoal: flow(function* _completeGoal() {
            try {
                const result = yield completeGoalMutation(self.id)
                if (!result) throw new Error('completeGoal error')

                self.status = result

                const completeLog = generateLog(self.id, LOG_TYPE_ENUM.COMPLETED)
                if (!completeLog) throw new Error('completeLog error')

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
            const { goCreateNewChildGoal } = getParentOfType(self, Goals$)
            goCreateNewChildGoal(self.id)
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
