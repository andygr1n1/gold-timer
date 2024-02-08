import { GOAL_TYPE_ENUM } from '../../../../lib/enums'
import { RITUAL_TYPE_ENUM, GOAL_STATUS_ENUM } from '@/lib/enums'
import { flow, getParentOfType, toGenerator } from 'mobx-state-tree'
import { Goal } from '../models/Goal.model'
import { Goals$ } from './Goals.store'
import { mutation_favoriteGoal } from '@/modules/goals/graphql/mutation_favoriteGoal'
import { mutation_deleteGoal } from '@/modules/goals/graphql/mutation_deleteGoal'
import { setMidnightTime } from '@/functions/date.helpers'
import { processError } from '@/functions/processMessage'

export const Goal$ = Goal.named('Goal$')
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
            if (!self.created_at || !self.finished_at) return false

            return (
                !!(self.created_at > new Date(Date.now())) ||
                !!(setMidnightTime(self.finished_at).getTime() > setMidnightTime(new Date(Date.now())).getTime())
            )
        },

        get goalType(): GOAL_TYPE_ENUM {
            if (this.isExpired) return GOAL_TYPE_ENUM.EXPIRED
            if (this.isRitualGoal) return GOAL_TYPE_ENUM.RITUALIZED

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
