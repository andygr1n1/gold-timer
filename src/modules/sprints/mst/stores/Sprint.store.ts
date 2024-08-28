import { flow, toGenerator, types } from 'mobx-state-tree'
import { SprintDay } from '../models/SprintDay.model'
import { type ISprintDay } from '../types'
import { isFuture, isPast, isToday, set } from 'date-fns'
import { compact, last } from 'lodash-es'
import { SPRINT_STATUS_ENUM } from '@/modules/sprints/helpers/sprints.enum'
import { mutation_updateSprintDays } from '@/modules/sprints/graphql/mutation_updateSprintDays'

export const Sprint$ = types
    .model('Sprint$', {
        id: types.snapshotProcessor(types.identifier, {
            preProcessor(sn: string | undefined) {
                if (!sn) return crypto.randomUUID()

                return sn
            },
        }),
        title: '',
        description: types.maybeNull(types.string),
        sprint_goals: types.maybeNull(types.string),
        sprint_days: types.array(SprintDay),
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
        finished_at: types.snapshotProcessor(types.maybeNull(types.Date), {
            preProcessor: (sn: Date | string) => {
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
        menu_action: types.maybeNull(types.union(types.literal('restart'), types.literal('delete'))),
        created_at: types.snapshotProcessor(types.maybe(types.Date), {
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
        deleted_at: types.snapshotProcessor(types.maybeNull(types.Date), {
            preProcessor: (sn: Date | string) => {
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
    })
    .views((self) => ({
        get goals(): string[] {
            return self.sprint_goals?.length ? compact(self.sprint_goals.split('#,#')) : []
        },
        get today(): Date {
            return set(new Date(Date.now()), { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 })
        },
        get progress(): number {
            if (!self.sprint_days) return 0
            const totalProgress = self.duration
            const currentProgress = self.sprint_days.filter((day) => day.status).length
            return Math.floor((currentProgress * 100) / totalProgress)
        },
        get focusSprintDayToday(): ISprintDay | undefined {
            return self.sprint_days.find((day) => day.date && isToday(day.date))
        },
        get focusSprintDay(): ISprintDay | undefined {
            let today = this.focusSprintDayToday

            if (!today) {
                today = self.sprint_days.find((day) => day.date && isFuture(day.date))
            }

            if (!today) {
                today = self.sprint_days.find((day) => day.date && isPast(day.date))
                today && (today = last(self.sprint_days))
            }

            return today
        },
        get allIsCheckedBeforeToday(): boolean {
            const today = this.today
            const result = self.sprint_days.find(
                (sprintDay) =>
                    sprintDay.date &&
                    !isToday(sprintDay.date) &&
                    sprintDay.date?.getTime() < today.getTime() &&
                    !sprintDay.status,
            )

            return !!!result
        },
        get todayIsChecked(): boolean {
            const result = self.sprint_days.find(
                (sprintDay) => sprintDay.date && isToday(sprintDay.date) && sprintDay.status,
            )

            return !!result
        },
        get status(): SPRINT_STATUS_ENUM {
            const today = this.today
            if (!self.finished_at || !self.started_at) return SPRINT_STATUS_ENUM.ERROR
            if (
                today.getTime() <=
                    set(self.finished_at, { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 }).getTime() &&
                today.getTime() >= self.started_at.getTime()
            ) {
                if (!this.allIsCheckedBeforeToday) return SPRINT_STATUS_ENUM.FREEZED
                return SPRINT_STATUS_ENUM.ACTIVE
            }

            if (
                today.getTime() >
                set(self.finished_at, { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 }).getTime()
            ) {
                return SPRINT_STATUS_ENUM.FINISHED
            }

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
        updateSprintDays: flow(function* _updateSprintDays() {
            yield* toGenerator(mutation_updateSprintDays({ id: self.id, sprintDays: self.sprint_days }))
        }),
    }))
