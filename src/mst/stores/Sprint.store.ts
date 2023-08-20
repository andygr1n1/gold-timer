import { types } from 'mobx-state-tree'
import { SprintGoal } from '../models/SprintGoal.model'
import { generateMstId } from '../mst.helper'
import { SprintDay } from '../models/SprintDay.model'
import { ISprintDay } from '../types'
import { isFuture, isPast, isToday, set } from 'date-fns'
import { last } from 'lodash-es'
import { SPRINT_STATUS_ENUM } from '@/modules/sprints/helpers/sprints.enum'

export const Sprint$ = types
    .model('Sprint$', {
        id: generateMstId(),
        title: '',
        description: types.maybeNull(types.string),
        sprints_goals: types.array(SprintGoal),
        sprints_days: types.array(SprintDay),
        achievement: types.maybeNull(types.string),
        duration: 7,
        img_path: types.maybeNull(types.string),
        parent_sprint_id: types.maybeNull(types.string),
        owner_id: '',
        started_at: types.snapshotProcessor(types.maybe(types.Date), {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return new Date(Date.now())
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
        menu_action: types.maybeNull(types.union(types.literal('restart'), types.literal('delete'))),
    })
    .views((self) => ({
        get today(): Date {
            return set(new Date(Date.now()), { hours: 23, minutes: 59, seconds: 59 })
        },
        get finishedAt(): Date | undefined | null {
            return last(self.sprints_days)?.date
        },
        get progress(): number {
            let totalProgress = self.duration
            let currentProgress = self.sprints_days.filter((day) => day.status).length
            return Math.floor((currentProgress * 100) / totalProgress)
        },
        get focusSprintDayToday(): ISprintDay | undefined {
            return self.sprints_days.find((day) => day.date && isToday(day.date))
        },
        get focusSprintDay(): ISprintDay | undefined {
            let today = this.focusSprintDayToday

            if (!today) {
                today = self.sprints_days.find((day) => day.date && isFuture(day.date))
            }

            if (!today) {
                today = self.sprints_days.find((day) => day.date && isPast(day.date))
                today && (today = last(self.sprints_days))
            }

            return today
        },
        get allIsCheckedBeforeToday(): boolean {
            const today = this.today
            let result = self.sprints_days.find(
                (sprintDay) =>
                    sprintDay.date &&
                    !isToday(sprintDay.date) &&
                    sprintDay.date?.getTime() < today.getTime() &&
                    !sprintDay.status,
            )

            return !!!result
        },
        get todayIsChecked(): boolean {
            let result = self.sprints_days.find(
                (sprintDay) => sprintDay.date && isToday(sprintDay.date) && sprintDay.status,
            )

            return !!result
        },
        get status(): SPRINT_STATUS_ENUM {
            const today = this.today
            if (!this.finishedAt || !self.started_at) return SPRINT_STATUS_ENUM.ERROR
            if (today.getTime() <= this.finishedAt.getTime() && today.getTime() >= self.started_at.getTime()) {
                if (!this.allIsCheckedBeforeToday) return SPRINT_STATUS_ENUM.FREEZED
                // if (this.todayIsChecked) return SPRINT_STATUS.CHECKED
                return SPRINT_STATUS_ENUM.ACTIVE
            }

            if (today.getTime() > this.finishedAt.getTime()) return SPRINT_STATUS_ENUM.FINISHED
            if (today.getTime() < self.started_at.getTime()) return SPRINT_STATUS_ENUM.FUTURE
            return SPRINT_STATUS_ENUM.ERROR
        },
        get isStatusActive(): boolean {
            return this.status === SPRINT_STATUS_ENUM.ACTIVE
        },
        get isStatusFreezed(): boolean {
            return this.status === SPRINT_STATUS_ENUM.FREEZED
        },
        get isStatusFuture(): boolean {
            return this.status === SPRINT_STATUS_ENUM.FUTURE
        },
        get isStatusFinished(): boolean {
            return this.status === SPRINT_STATUS_ENUM.FINISHED
        },
    }))

    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
