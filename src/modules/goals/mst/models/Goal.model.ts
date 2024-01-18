import { PRIVACY_ENUM } from '@/lib/enums'
import { DIFFICULTY_ENUM, GOAL_STATUS_ENUM } from '../../../../lib/enums'
import { types } from 'mobx-state-tree'
import { differenceInCalendarDays, set, toDate } from 'date-fns'
import { GoalRitual } from './GoalRitual.model'

export const Goal = types
    .model('Goal', {
        id: types.snapshotProcessor(types.identifier, {
            preProcessor(sn: string | undefined) {
                if (!sn) return crypto.randomUUID()

                return sn
            },
        }),
        owner_id: '',

        status: types.optional(types.enumeration(Object.values(GOAL_STATUS_ENUM)), GOAL_STATUS_ENUM.ACTIVE),
        difficulty: types.optional(
            types.enumeration<DIFFICULTY_ENUM>(Object.values(DIFFICULTY_ENUM)),
            DIFFICULTY_ENUM.LIGHT,
        ),
        privacy: types.optional(types.enumeration(Object.values(PRIVACY_ENUM)), PRIVACY_ENUM.PUBLIC),

        title: '',
        slogan: '',
        description: '',
        is_favorite: false,

        parent_goal_id: types.maybeNull(types.string),

        created_at: types.snapshotProcessor(types.maybe(types.Date), {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return undefined
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),

        finished_at: types.snapshotProcessor(types.maybe(types.Date), {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return set(new Date(Date.now()), { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 })
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
        deleted_at: types.maybeNull(
            types.snapshotProcessor(types.maybeNull(types.Date), {
                preProcessor: (sn: Date | undefined | string) => {
                    if (!sn) {
                        return null
                    }
                    if (typeof sn === 'string') {
                        return new Date(sn)
                    }
                    return sn
                },
            }),
        ),
        goal_ritual: types.maybeNull(GoalRitual),
    })
    .views((self) => ({
        get isValidForMutation(): boolean {
            return !!self.title.length
        },
        get remainingTime(): Date | undefined {
            if (!self.finished_at) return
            const createdAt = Date.now()
            const finishedAt = toDate(self.finished_at).getTime()
            const diff = new Date(finishedAt - createdAt)
            return diff
        },
        // getting remaining days only in current year
        get remainingDays(): number {
            if (!this.remainingTime) return 0
            return this.remainingTime?.getUTCDate() - 1
        },
        // getting all remaining days
        get totalRemainingDays(): number {
            if (!self.finished_at) return 0
            const result = differenceInCalendarDays(toDate(self.finished_at).getTime(), new Date(Date.now()))

            return result
        },
        get remainingTimeString(): string {
            if (!this.remainingTime) return ''
            const years_count = this.remainingTime?.getUTCFullYear() - 1970
            let years = `${years_count} years`
            //
            const months_count = this.remainingTime?.getUTCMonth()
            let months = `${months_count} months`
            //
            const days_count = this.remainingDays
            let days = `${days_count} day${days_count === 1 ? '' : 's'}`
            //
            const hours_count = this.remainingTime?.getUTCHours()
            let hours = `${hours_count} ${hours_count === 1 ? 'hour' : 'hours'}`
            //

            if (years_count <= 0) years = ''
            if (months_count <= 0) months = ''
            if (days_count <= 0) days = ''
            if (hours_count <= 0) hours = ''

            if (Math.floor(this.remainingTime.getTime() / (1000 * 3600 * 24)) < 0) return `expired`
            if (Math.floor(this.remainingTime.getTime() / (1000 * 3600 * 24)) === 0) return `${hours}`

            return `${years} ${months} ${days}`
        },
        get expiredDaysCount(): number {
            if (!this.remainingTime) return -1

            const remainingTimeDaysCount = Math.floor(this.remainingTime.getTime() / (1000 * 3600 * 24))
            return Math.abs(remainingTimeDaysCount)
        },

        get createdDaysAgo(): number {
            if (!self.created_at) return 0
            const today = Date.now()

            const createdAt = self.created_at.getTime()

            const diff = new Date(today - createdAt)

            return Math.floor(diff.getTime() / (1000 * 3600 * 24))
        },

        get createdInFuture(): boolean {
            return !!self.created_at && self.created_at > new Date(Date.now())
        },

        get isNewGoal(): boolean {
            return !!!self.created_at
        },
    }))
