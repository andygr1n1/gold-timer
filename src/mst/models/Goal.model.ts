import { DIFFICULTY_ENUM, STATUS_ENUM } from './../../helpers/enums'
import { types } from 'mobx-state-tree'
import { v4 } from 'uuid'
import { toDate } from 'date-fns'

export const Goal = types
    .model('Goal', {
        id: types.snapshotProcessor(types.identifier, {
            preProcessor(sn: string | undefined) {
                if (!sn) return v4()

                return sn
            },
        }),
        owner_id: '',

        status: '',
        difficulty: types.optional(
            types.enumeration<DIFFICULTY_ENUM>(Object.values(DIFFICULTY_ENUM)),
            DIFFICULTY_ENUM.LIGHT,
        ),
        privacy: '',
        round: 0,

        title: '',
        slogan: '',
        description: '',

        created_at: types.snapshotProcessor(types.Date, {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return new Date()
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
        finished_at: types.snapshotProcessor(types.Date, {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return new Date()
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
    })
    .views((self) => ({
        get isFrozen(): boolean {
            return self.status === STATUS_ENUM.FROZEN
        },

        get remainingTime(): Date {
            var createdAt = Date.now()
            var finishedAt = toDate(self.finished_at).getTime()
            var diff = new Date(finishedAt - createdAt)
            return diff
        },
        get remainingTimeString(): string {
            const years_count = this.remainingTime?.getUTCFullYear() - 1970
            let years = `${years_count} years`
            //
            const months_count = this.remainingTime?.getUTCMonth()
            let months = `${months_count} months`
            //
            const days_count = this.remainingTime?.getUTCDate() - 1
            let days = `${days_count} days`
            //

            if (years_count <= 0) years = ''
            if (months_count <= 0) months = ''
            if (days_count <= 0) days = ''

            return `${years} ${months} ${days}`
        },
        get remainingTimeDaysCount(): number {
            return Math.floor(this.remainingTime.getTime() / (1000 * 3600 * 24))
        },
    }))
