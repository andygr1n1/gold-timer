import { GOAL_STATUS_ENUM } from '@/helpers/enums'
import { add, isPast, sub } from 'date-fns'
import { filter, orderBy, differenceWith, cloneDeep, compact } from 'lodash-es'
import { destroy, detach, toGenerator, types, flow, cast, castToSnapshot } from 'mobx-state-tree'
import { Goal$ } from './Goal.store'
import { GoalsFilter$ } from './GoalsFilter.store'
import { processError } from '@/functions/processMessage'
import { GoalNew$ } from './GoalNew.store'
import { IGoal$ } from '../types'
import { GoalEdit$ } from './GoalEdit.store'

export const Goals$ = types
    .model('Goals$', {
        goals: types.array(Goal$),
        new_goal: types.maybe(GoalNew$),
        edit_goal: types.maybe(GoalEdit$),
        selected_goal: types.safeReference(Goal$),
        goals_filter$: types.optional(GoalsFilter$, {
            goals_estimation_filter: add(new Date(Date.now()), { days: 60 }),
        }),
        selected_widget_goals: types.array(types.safeReference(Goal$, { acceptsUndefined: false })),
    })
    .views((self) => ({
        get activeExpiredGoals(): IGoal$[] {
            const goals = filter(
                self.goals_filter$.allGoalsFilteredBy,
                (goal) => goal.status === GOAL_STATUS_ENUM.ACTIVE,
            ).filter((goal) => goal.finished_at && isPast(goal.finished_at) && !goal.deleted_at)
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get expiredRitualGoals(): IGoal$[] {
            return this.activeExpiredGoals.filter((goal) => goal.isRitualGoal && !goal.deleted_at)
        },
        get activeGoals(): IGoal$[] {
            const goals: IGoal$[] = compact(
                differenceWith(
                    filter(self.goals_filter$.allGoalsFilteredBy, (goal) => {
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

        get completedGoals(): IGoal$[] {
            const goals = filter(
                self.goals_filter$.allGoalsFilteredBy,
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

        get favoriteGoals(): IGoal$[] {
            const goals = filter(
                self.goals_filter$.allGoalsFilteredBy,
                (goal) => goal.is_favorite && goal.status === GOAL_STATUS_ENUM.ACTIVE,
            )
            return orderBy(goals, ['finished_at'], ['asc'])
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
        applySelectedWidgetGoals(goals: IGoal$[]): void {
            self.selected_widget_goals = castToSnapshot(goals)
        },
        openGoalCreateMode(options?: { parentGoalId?: string }): void {
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
    //
    //
    //
    // dashboard widget goals
    // dashboard widget goals
    // dashboard widget goals
    .views((self) => ({
        get activeDashboardGoals(): IGoal$[] {
            const allActive = self.goals.filter(
                (goal) =>
                    !!goal.created_at &&
                    !!goal.finished_at &&
                    !goal.deleted_at &&
                    !goal.isRitualGoal &&
                    !goal.isExpired &&
                    !goal.isCompleted,
            )
            return orderBy(allActive, ['finished_at'], ['asc'])
        },
        get expiredDashboardGoals(): IGoal$[] {
            const expiredGoals = filter(
                self.goals,
                (goal) => goal.status === GOAL_STATUS_ENUM.ACTIVE && !goal.isRitualGoal && !goal.deleted_at,
            ).filter((goal) => goal.finished_at && isPast(goal.finished_at))
            return orderBy(expiredGoals, ['finished_at'], ['asc'])
        },
        get ritualDashboardGoals(): IGoal$[] {
            const allRituals = self.goals.filter(
                (goal) =>
                    !!goal.created_at && !!goal.finished_at && !goal.isExpired && !goal.deleted_at && goal.isRitualGoal,
                //    && !goal.isFromFuture,
            )
            return orderBy(allRituals, ['finished_at'], ['asc'])
        },
        get favoriteDashboardGoals(): IGoal$[] {
            const allFavorite = self.goals.filter((goal) => !!goal.created_at && !goal.deleted_at && goal.isFavorite)
            return orderBy(allFavorite, ['finished_at'], ['asc'])
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
        fetchAndApplyCompletedGoals: flow(function* _fetchAndApplyCompletedGoals() {
            console.log('fetch And apply completed goals')
            // if (!self.edit_goal) return
            // const { updateGoal, redirected, id } = self.edit_goal
            // try {
            //     yield updateGoal()
            //     redirected && self.openViewMode(id)
            //     self.edit_goal = undefined
            // } catch (e) {
            //     processError(e, 'updateGoal error')
            // }
        }),
    }))
