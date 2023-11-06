import { filter } from 'lodash-es'
import { isBefore } from 'date-fns'
import { types, getParentOfType } from 'mobx-state-tree'
import { Goals$ } from './Goals.store'
import { ACTIVE_GOAL_TYPE_ENUM, STATUS_ENUM_FILTERS } from '@/helpers/enums'
import { IGoal$ } from '@/modules/goals/mst/types'

export const GoalsFilter$ = types
    .model('GoalsFilter$', {
        goals_input_filter: '',
        goals_selected_statuses: types.array(types.enumeration(Object.values(STATUS_ENUM_FILTERS))),
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
        goals_collapse_type: types.optional(
            types.enumeration(Object.values(ACTIVE_GOAL_TYPE_ENUM)),
            ACTIVE_GOAL_TYPE_ENUM.ACTIVE,
        ),
        show_deleted: false,
        show_favorites: false,
        show_archived: false,
    })
    .views((self) => ({
        get goals(): IGoal$[] {
            return getParentOfType(self, Goals$).goals
        },
        get allGoalsFilteredByTitle(): IGoal$[] {
            return this.goals.filter(
                (goal) =>
                    !goal.deleted_at &&
                    (goal.title
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
                            .includes(self.goals_input_filter.trim().toLocaleLowerCase())),
            )
        },
        get goalsByCollapseType(): IGoal$[] {
            const { activeGoalsWithoutRitualPower, ritualGoals, activeExpiredGoals, favoriteGoals } = getParentOfType(
                self,
                Goals$,
            )

            switch (self.goals_collapse_type) {
                case ACTIVE_GOAL_TYPE_ENUM.ACTIVE:
                    return activeGoalsWithoutRitualPower
                case ACTIVE_GOAL_TYPE_ENUM.RITUALIZED:
                    return ritualGoals
                case ACTIVE_GOAL_TYPE_ENUM.EXPIRED:
                    return activeExpiredGoals
                case ACTIVE_GOAL_TYPE_ENUM.FAVORITE:
                    return favoriteGoals
                default:
                    return activeGoalsWithoutRitualPower
            }
        },
        get filteredGoals(): IGoal$[] {
            let filtered = this.goalsByCollapseType

            filtered = filtered.filter(
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

            self.goals_estimation_filter &&
                (filtered = filter(
                    filtered,
                    (goal) => !!goal.finished_at && isBefore(goal.finished_at, self.goals_estimation_filter!),
                ))

            return filtered
        },
        get goalsCollapseData(): { title: string; data: IGoal$[]; isFavorite: boolean } {
            let title = 'Active Goals'
            switch (self.goals_collapse_type) {
                case ACTIVE_GOAL_TYPE_ENUM.RITUALIZED:
                    title = 'Ritual Goals'
                    break
                case ACTIVE_GOAL_TYPE_ENUM.EXPIRED:
                    title = 'Expired Goals'
                    break
                case ACTIVE_GOAL_TYPE_ENUM.FAVORITE:
                    title = 'Favorite Goals'
                    break
                default:
                    title = 'Active Goals'
                    break
            }

            const isFavorite = self.goals_collapse_type === ACTIVE_GOAL_TYPE_ENUM.FAVORITE
            return { title, data: this.filteredGoals, isFavorite }
        },
    }))
    .views((self) => ({
        get activeGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(STATUS_ENUM_FILTERS.ACTIVE)
        },
        get expiredGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(STATUS_ENUM_FILTERS.EXPIRED)
        },
        get frozenGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(STATUS_ENUM_FILTERS.FROZEN)
        },
        get completedGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(STATUS_ENUM_FILTERS.COMPLETED)
        },
        get ritualGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(STATUS_ENUM_FILTERS.RITUALIZED)
        },
        get favoriteGoalsFilter(): boolean {
            return self.goals_selected_statuses.includes(STATUS_ENUM_FILTERS.FAVORITE)
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
