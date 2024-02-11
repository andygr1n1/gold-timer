import { GOAL_TYPE_ENUM } from '../../../lib/enums'
import { RITUAL_TYPE_ENUM, GOAL_STATUS_ENUM } from '@/lib/enums'
import { Goal } from './Goal.model'
import { setMidnightTime } from '@/functions/date.helpers'

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
    }))
