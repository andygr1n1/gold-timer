import { GOAL_STATUS_ENUM, STATUS_ENUM_FILTERS } from '@/helpers/enums'
import { add, isPast, sub } from 'date-fns'
import { filter, orderBy, differenceWith, cloneDeep, compact } from 'lodash-es'
import { destroy, detach, toGenerator, types, flow, cast } from 'mobx-state-tree'
import { Goal$ } from './Goal.store'
import { Filter$ } from '../../../../mst/stores/Filter.store'
import { processError } from '@/helpers/processError.helper'
import { GoalNew$ } from './GoalNew.store'
import { IGoal$ } from '../types'
import { GoalEdit$ } from './GoalEdit.store'

export const Goals$ = types
    .model('Goals$', {
        goals: types.array(Goal$),
        new_goal: types.maybe(GoalNew$),
        edit_goal: types.maybe(GoalEdit$),
        selected_goal: types.safeReference(Goal$),
        //
        filter$: types.optional(Filter$, { goals_estimation_filter: add(new Date(Date.now()), { days: 60 }) }),
        goals_checked_list_filter: types.array(types.enumeration(Object.values(STATUS_ENUM_FILTERS))),
        active_collapse_key: types.maybe(types.string),
    })
    .views((self) => ({
        get globalFilteredGoals(): IGoal$[] {
            return self.goals.filter(
                (goal) =>
                    goal.title
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.filter$.global_filtered_title_value.trim().toLocaleLowerCase()) ||
                    goal.slogan
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.filter$.global_filtered_title_value.trim().toLocaleLowerCase()) ||
                    goal.description
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.filter$.global_filtered_title_value.trim().toLocaleLowerCase()),
            )
        },
        get activeGoalsFilter(): boolean {
            return self.goals_checked_list_filter.includes(STATUS_ENUM_FILTERS.ACTIVE)
        },
        get expiredGoalsFilter(): boolean {
            return self.goals_checked_list_filter.includes(STATUS_ENUM_FILTERS.EXPIRED)
        },
        get frozenGoalsFilter(): boolean {
            return self.goals_checked_list_filter.includes(STATUS_ENUM_FILTERS.FROZEN)
        },
        get completedGoalsFilter(): boolean {
            return self.goals_checked_list_filter.includes(STATUS_ENUM_FILTERS.COMPLETED)
        },
        get ritualGoalsFilter(): boolean {
            return self.goals_checked_list_filter.includes(STATUS_ENUM_FILTERS.RITUALIZED)
        },
        get favoriteGoalsFilter(): boolean {
            return self.goals_checked_list_filter.includes(STATUS_ENUM_FILTERS.FAVORITE)
        },
    }))
    .views((self) => ({
        get activeExpiredGoals(): IGoal$[] {
            const goals = filter(self.globalFilteredGoals, (goal) => goal.status === GOAL_STATUS_ENUM.ACTIVE).filter(
                (goal) => goal.finished_at && isPast(goal.finished_at) && !goal.deleted_at,
            )
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get expiredRitualGoals(): IGoal$[] {
            return this.activeExpiredGoals.filter((goal) => goal.hasRitualPower && !goal.deleted_at)
        },
        get activeGoals(): IGoal$[] {
            const goals: IGoal$[] = compact(
                differenceWith(
                    filter(self.globalFilteredGoals, (goal) => {
                        return (
                            !!goal.created_at &&
                            isPast(sub(goal.created_at, { seconds: 3 })) &&
                            goal.status === GOAL_STATUS_ENUM.ACTIVE &&
                            !goal.deleted_at
                        )
                    }),
                    this.activeExpiredGoals,
                ),
            )

            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get activeGoalsWithoutRitualPower(): IGoal$[] {
            return filter(this.activeGoals, (goal) => goal.ritualGoalPower === 0)
        },
        get topActiveGoals(): { topFour: IGoal$[]; all: IGoal$[] } {
            const today = new Date(Date.now())
            const goals = filter(
                this.activeGoals,
                (goal) =>
                    goal.ritualGoalPower === 0 && !!goal.finished_at && goal.finished_at < add(today, { days: 3 }),
            )

            const all = filter(this.activeGoals, (goal) => goal.ritualGoalPower === 0)

            return {
                topFour: goals.slice(0, 4),
                all,
            }
        },

        get completedGoals(): IGoal$[] {
            const goals = filter(
                self.globalFilteredGoals,
                (goal) => goal.status === GOAL_STATUS_ENUM.COMPLETED && !goal.deleted_at,
            )
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get ritualGoals(): IGoal$[] {
            const goals = filter(
                this.activeGoals,
                (goal) => goal.ritualGoalPower > 0 && goal.status === GOAL_STATUS_ENUM.ACTIVE,
            )
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get topRitualGoals(): IGoal$[] {
            const goals = filter(this.activeGoals, (goal) => goal.ritualGoalPower > 0 && !goal.isFromFuture)
            return orderBy(goals, ['finished_at'], ['asc']).slice(0, 4)
        },
        get favoriteGoals(): IGoal$[] {
            const goals = filter(
                self.globalFilteredGoals,
                (goal) => goal.is_favorite && goal.status === GOAL_STATUS_ENUM.ACTIVE,
            )
            return orderBy(goals, ['finished_at'], ['asc'])
        },

        get topExpiredGoals(): IGoal$[] {
            const goals = filter(
                self.goals,
                (goal) => goal.status === GOAL_STATUS_ENUM.ACTIVE && !goal.hasRitualPower && !goal.deleted_at,
            ).filter((goal) => goal.finished_at && isPast(goal.finished_at))
            return orderBy(goals, ['finished_at'], ['asc']).slice(0, 4)
        },

        get topFavoriteGoals(): IGoal$[] {
            return this.favoriteGoals.slice(0, 4)
        },

        get notCompletedGoalsCount(): number {
            return filter(self.goals, (goal) => goal.status !== GOAL_STATUS_ENUM.COMPLETED).length
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        destroyGoal(goal_id: string): void {
            const destroyGoal = self.goals.find((goal) => goal_id === goal.id)
            destroyGoal && destroy(detach(destroyGoal))
        },
    }))
    .actions((self) => ({
        openCreateMode(options?: { parentGoalId?: string }): void {
            self.new_goal = cast({
                parent_goal_id: options?.parentGoalId ? options?.parentGoalId : null,
            })
            self.selected_goal = undefined
            self.edit_goal = undefined
        },
        openViewMode(id: string | undefined): void {
            if (!id) return
            const selectedGoal = self.goals.find((goal) => goal.id === id)
            self.selected_goal = selectedGoal
            self.new_goal = undefined
            self.edit_goal = undefined
        },
        openEditMode(id: string | undefined, redirected?: boolean): void {
            if (!id) return
            const selectedGoal = self.goals.find((goal) => goal.id === id)
            self.edit_goal = cast({ ...cloneDeep(selectedGoal), redirected })
            self.selected_goal = undefined
        },
        openCreateRitualMode(id: string | undefined): void {
            if (!id) return
            const redirectFromViewMode = self.selected_goal

            if (redirectFromViewMode) {
                const selectedGoal = self.goals.find((goal) => goal.id === id)
                self.edit_goal = cast({
                    ...cloneDeep(selectedGoal),
                    goal_ritual: {},
                    deleted_at: null,
                    redirected: true,
                })
                self.selected_goal = undefined
            } else {
                self.edit_goal?.onChangeField('goal_ritual', cast({}))
                self.edit_goal?.onChangeField('deleted_at', null)
            }
        },
    }))
    .actions((self) => ({
        createNewGoal: flow(function* _createNewGoal() {
            if (!self.new_goal) return
            const { createNewGoal } = self.new_goal

            try {
                const res = yield* toGenerator(createNewGoal())
                res && self.goals.push(res)
                if (res?.parent_goal_id) {
                    self.openViewMode(res?.parent_goal_id)
                }
                self.new_goal = undefined
            } catch (e) {
                processError(e, 'createNewGoal error')
            }
        }),
        updateGoal: flow(function* _updateGoal() {
            if (!self.edit_goal) return
            const { updateGoal, redirected, id } = self.edit_goal

            try {
                yield updateGoal()
                redirected && self.openViewMode(id)
                self.edit_goal = undefined
            } catch (e) {
                processError(e, 'updateGoal error')
            }
        }),
    }))
