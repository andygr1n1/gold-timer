import { PRIVACY_ENUM } from '@/helpers/enums'
import { DIFFICULTY_ENUM, STATUS_ENUM } from './../../helpers/enums'
import { types } from 'mobx-state-tree'
import { v4 } from 'uuid'
import { add, toDate } from 'date-fns'
import { GoalRitual } from './GoalRitual.model'

export const Goal = types
    .model('Goal', {
        id: types.snapshotProcessor(types.identifier, {
            preProcessor(sn: string | undefined) {
                if (!sn) return v4()

                return sn
            },
        }),
        owner_id: '',

        status: types.optional(types.enumeration(Object.values(STATUS_ENUM)), STATUS_ENUM.ACTIVE),
        difficulty: types.optional(
            types.enumeration<DIFFICULTY_ENUM>(Object.values(DIFFICULTY_ENUM)),
            DIFFICULTY_ENUM.LIGHT,
        ),
        privacy: types.optional(types.enumeration(Object.values(PRIVACY_ENUM)), PRIVACY_ENUM.PUBLIC),

        title: '',
        slogan: '',
        description: '',
        is_favorite: false,

        freeze: false,

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
                    return add(new Date(Date.now()), { days: 30 })
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
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
        get remainingDays(): number {
            if (!this.remainingTime) return 0
            return this.remainingTime?.getUTCDate() - 1
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
            let days = `${days_count} days`
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
            return (!!self.created_at && !!self.freeze) || !!!self.created_at
        },
    }))
