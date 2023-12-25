import { compact, filter, orderBy, uniq } from 'lodash-es'
import { format, isPast, sub } from 'date-fns'
import { types, getParentOfType, cast } from 'mobx-state-tree'
import { Goals$ } from './Goals.store'
import { GOAL_STATUS_ENUM, GOAL_STATUS_ENUM_FILTERS } from '@/helpers/enums'
import { IGoal$ } from '@/modules/goals/mst/types'

export const GoalsFilter$ = types
    .model('GoalsFilter$', {
        goals_input_filter: '',
        goals_selected_statuses: types.array(types.enumeration(Object.values(GOAL_STATUS_ENUM_FILTERS))),
        goals_estimation_filter: types.snapshotProcessor(types.maybe(types.Date), {
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

        show_deleted: false,
        show_favorites: false,
        show_archived: false,
    })
    .views((self) => ({
        get goals(): IGoal$[] {
            return getParentOfType(self, Goals$).goals
        },
        get goalsTimeFrame(): Date[] {
            return compact(uniq(this.goals.map((goal) => goal.finished_at)))
        },
        get hasDeletedGoals(): boolean {
            return !!this.goals.filter((goal) => goal.deleted_at).length
        },
        get goalsStatusRender() {
            return Object.values(GOAL_STATUS_ENUM_FILTERS).filter(
                (goalStatus) => goalStatus !== GOAL_STATUS_ENUM_FILTERS.FAVORITE,
            )
        },
        get hasAnyFIlters(): boolean {
            return (
                self.show_archived || self.show_deleted || self.show_favorites || !!self.goals_selected_statuses.length
            )
        },
        // ACTIVE
        isStatusActive(status: GOAL_STATUS_ENUM_FILTERS): boolean {
            return !!self.goals_selected_statuses.includes(status)
        },
        get activeGoalsActiveStatus(): boolean {
            return (
                !self.goals_selected_statuses.length ||
                self.goals_selected_statuses.includes(GOAL_STATUS_ENUM_FILTERS.ACTIVE)
            )
        },
        get activeGoalsRitualizedStatus(): boolean {
            return self.goals_selected_statuses.includes(GOAL_STATUS_ENUM_FILTERS.RITUALIZED)
        },
        get activeGoalsExpiredStatus(): boolean {
            return (
                !self.goals_selected_statuses.length ||
                self.goals_selected_statuses.includes(GOAL_STATUS_ENUM_FILTERS.EXPIRED)
            )
        },
        get activeGoalsCompletedStatus(): boolean {
            return (
                !self.goals_selected_statuses.length ||
                self.goals_selected_statuses.includes(GOAL_STATUS_ENUM_FILTERS.COMPLETED)
            )
        },

        get allGoalsFilteredBy(): IGoal$[] {
            let goalsList = this.goals.filter((g) => g.status !== GOAL_STATUS_ENUM.COMPLETED)

            if (self.goals_selected_statuses.length) {
                goalsList = []

                if (this.activeGoalsActiveStatus) {
                    goalsList = uniq(
                        goalsList.concat(
                            this.goals.filter(
                                (goal) =>
                                    !!!goal.goal_ritual?.ritual_power &&
                                    goal.finished_at &&
                                    !isPast(goal.finished_at) &&
                                    goal.status !== GOAL_STATUS_ENUM.COMPLETED,
                            ),
                        ),
                    )
                }

                if (this.activeGoalsRitualizedStatus) {
                    goalsList = uniq(
                        goalsList.concat(
                            this.goals.filter(
                                (goal) =>
                                    !!goal.goal_ritual?.ritual_power && goal.status !== GOAL_STATUS_ENUM.COMPLETED,
                            ),
                        ),
                    )
                }

                if (this.activeGoalsExpiredStatus) {
                    goalsList = uniq(
                        goalsList.concat(
                            this.goals.filter(
                                (goal) =>
                                    !!!goal.goal_ritual?.ritual_power &&
                                    goal.finished_at &&
                                    isPast(goal.finished_at) &&
                                    goal.status !== GOAL_STATUS_ENUM.COMPLETED,
                            ),
                        ),
                    )
                }

                if (this.activeGoalsCompletedStatus) {
                    goalsList = goalsList.concat(
                        this.goals.filter((goal) => goal.status === GOAL_STATUS_ENUM.COMPLETED),
                    )
                }
            }

            goalsList = goalsList.filter((goal) => !!goal.deleted_at === self.show_deleted)

            return goalsList.filter(
                (goal) =>
                    goal.title
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.goals_input_filter.trim().toLocaleLowerCase()) ||
                    goal.slogan
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.goals_input_filter.trim().toLocaleLowerCase()) ||
                    goal.description
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.goals_input_filter.trim().toLocaleLowerCase()),
            )
        },
        // TODO get the idea
        get goalsListConstructor(): {
            generateGoals: (gtf: string, goals: IGoal$[]) => IGoal$[]
            timeFrame: string[]
            goals: IGoal$[]
        } {
            let goals: IGoal$[] = compact(
                filter(this.allGoalsFilteredBy, (goal) => {
                    return !!goal.created_at && isPast(sub(goal.created_at, { seconds: 3 }))
                }),
            )

            goals = orderBy(goals, ['finished_at'], ['asc'])

            const timeFrame = compact(
                uniq(goals.map((goal) => goal.finished_at && format(goal.finished_at, 'do MMMM yyyy'))),
            )

            const generateGoals = (gtf: string, goals: IGoal$[]) => {
                return goals.filter((goal) => goal.finished_at && format(goal.finished_at, 'do MMMM yyyy') === gtf)
            }

            return { generateGoals, timeFrame, goals }
        },
    }))
    .views((self) => ({
        get activeGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(GOAL_STATUS_ENUM_FILTERS.ACTIVE)
        },
        get expiredGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(GOAL_STATUS_ENUM_FILTERS.EXPIRED)
        },
        get completedGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(GOAL_STATUS_ENUM_FILTERS.COMPLETED)
        },
        get ritualGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(GOAL_STATUS_ENUM_FILTERS.RITUALIZED)
        },
        get favoriteGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(GOAL_STATUS_ENUM_FILTERS.FAVORITE)
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        addStatusFilter(newStatus: GOAL_STATUS_ENUM_FILTERS): void {
            const activeStatus = self.goals_selected_statuses.find((status) => status === newStatus)

            if (activeStatus) {
                // remove status
                const indexOfActiveFilter = self.goals_selected_statuses.indexOf(activeStatus)
                self.goals_selected_statuses.splice(indexOfActiveFilter, 1)
            } else {
                // add status
                self.goals_selected_statuses.push(newStatus)
            }
        },
        clearAllFilters(): void {
            if (!self.hasAnyFIlters) return
            self.show_archived = false
            self.show_deleted = false
            self.show_favorites = false
            self.goals_selected_statuses = cast([])
        },
    }))
