import { GOAL_STATUS_ENUM } from '@/lib/enums'
import { add, isPast, sub } from 'date-fns'
import { filter, orderBy, differenceWith, compact } from 'lodash-es'
import { destroy, detach, toGenerator, types, flow, cast, castToSnapshot } from 'mobx-state-tree'
import { Goal$ } from './Goal.store'
import { GoalsFilter$ } from './GoalsFilter.store'
import { processError } from '@/functions/processMessage'
import { GoalNew$ } from './GoalNew.store'
import { IGoal$ } from '../types'
import { query_fetchGoalById } from '../../components/goal-crud/service/query_fetchGoalById'

export const Goals$ = types
    .model('Goals$', {
        goals: types.array(Goal$),
        new_goal: types.maybe(GoalNew$),
        selected_goal: types.maybe(GoalNew$),
        goals_filter$: types.optional(GoalsFilter$, {
            goals_estimation_filter: add(new Date(Date.now()), { days: 60 }),
        }),
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
        openGoalCreateMode(options?: { parentGoalId?: string }): void {
            self.new_goal = cast({
                parent_goal_id: options?.parentGoalId ? options?.parentGoalId : null,
            })
            self.selected_goal = undefined
        },
        openViewMode: flow(function* _openViewMode(id: string | undefined) {
            if (!id) return
            self.selected_goal = castToSnapshot(yield query_fetchGoalById(id))
            self.new_goal = undefined
        }),
        openCreateRitualMode: flow(function* _openCreateRitualMode(id: string | undefined) {
            if (!id) return
            const redirectFromViewMode = self.selected_goal

            if (redirectFromViewMode) {
                self.selected_goal = cast({
                    ...(yield query_fetchGoalById(id)),
                    goal_ritual: {},
                    deleted_at: null,
                    redirected: true,
                })
            } else {
                // self.selected_goal?.onChangeField('goal_ritual', cast({}))
                // self.selected_goal?.onChangeField('deleted_at', null)
            }
        }),
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
    }))
