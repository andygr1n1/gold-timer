import { generateNewRitualCircle } from '../../../../helpers/ritual-circle/generateNewRitualCircle'
import { insertGoalMutation } from '@/graphql/mutations/insertGoal.mutation'
import { insertGoalsRituals } from '@/graphql/mutations/upsertGoalsRituals.mutation'
import { updateGoalStatusToCompleted } from '@/graphql/mutations/updateGoalStatus.mutation'
import { upsertGoalMutation } from '@/graphql/mutations/upsertGoal.mutation'
import { GOAL_STATUS_ENUM, STATUS_ENUM_FILTERS } from '@/helpers/enums'
import { IInsertNewGoal, IInsertRitual } from '@/helpers/interfaces/newGoal.interface'
import { setGoalDifficulty } from '@/helpers/setGoalDifficulty'
import { add, isPast, set, sub } from 'date-fns'
import { filter, orderBy, differenceWith, cloneDeep, compact } from 'lodash-es'
import { destroy, detach, getParentOfType, toGenerator, types, flow, castToSnapshot, cast } from 'mobx-state-tree'
import { Goal$ } from './Goal.store'
import { Root$ } from '../../../../mst/stores/Root.store'
import { getCoinsFromRitual } from '@/helpers/getCoinsFromRitual'
import { addCoinsMutation } from '@/graphql/mutations/addCoins.mutation'
import { Filter$ } from '../../../../mst/stores/Filter.store'
import { updateRitualInterval } from '@/graphql/mutations/updateRitualInterval.mutation'
import { processError } from '@/helpers/processError.helper'
import { GoalNew$ } from './GoalNew.store'
import { getUserId } from '@/helpers/getUserId'
import { IGoal$ } from '../types'

export const Goals$ = types
    .model('Goals$', {
        goals: types.array(Goal$),
        new_goal: types.maybe(GoalNew$),
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
            return this.activeExpiredGoals.filter((goal) => goal.isRitualGoal && !goal.deleted_at)
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
                (goal) => goal.status === GOAL_STATUS_ENUM.ACTIVE && !goal.isRitualGoal && !goal.deleted_at,
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
        cancelGoalCreator(options?: {
            redirectId: string
            redirectMode: 'view_mode' | 'edit_mode' | 'create_ritual_mode'
        }): void {
            this.onChangeField('new_goal', undefined)

            if (options?.redirectId) {
                const isViewMode = options.redirectMode === 'view_mode'
                const isEditMode = options.redirectMode === 'edit_mode'
                const isCreateRitualMode = options.redirectMode === 'create_ritual_mode'
                const goal = self.goals.find((goal) => goal.id === options.redirectId)
                if (!self.new_goal && goal) {
                    isViewMode && this.openGoalCreator({ selectedGoal: goal, view_mode: true })
                    isEditMode && this.openGoalCreator({ selectedGoal: goal, edit_mode: true })
                    isCreateRitualMode &&
                        this.openGoalCreator({
                            selectedGoal: goal,
                            create_ritual_mode: true,
                            redirectMode: isViewMode ? 'view_mode' : 'edit_mode',
                        })
                }
            }
        },
        openGoalCreator(options: IGoalCreator = {}): void {
            const parentGoalId = options?.parentGoalId
            if (self.new_goal?.view_mode || self.new_goal?.edit_mode || self.new_goal?.create_ritual_mode) {
                const goalToDestroy = detach(self.new_goal)

                setTimeout(() => {
                    destroy(goalToDestroy)
                }, 1000)
            }
            self.new_goal = cast(options?.selectedGoal ? cloneDeep(options.selectedGoal) : {})
            self.new_goal && parentGoalId && (self.new_goal.parent_goal_id = parentGoalId)
            options.edit_mode && self.new_goal?.onChangeField('edit_mode', true)

            if (options.view_mode) {
                self.new_goal?.onChangeField('view_mode', true)
                self.new_goal?.onChangeField('edit_mode', false)
            }

            if (options.create_ritual_mode) {
                self.new_goal?.onChangeField('create_ritual_mode', true)
                self.new_goal?.onChangeField('deleted_at', null)
                self.new_goal?.onChangeField('goal_ritual', cast({}))
                self.new_goal?.onChangeField('redirect_mode', options.redirectMode)
            }
            if (options.create_child_mode) {
                self.new_goal?.onChangeField('create_child_mode', true)
                self.new_goal?.onChangeField('redirect_mode', options.redirectMode)
            }
        },
        destroyGoal(goal_id: string): void {
            const destroyGoal = self.goals.find((goal) => goal_id === goal.id)
            destroyGoal && destroy(detach(destroyGoal))
        },
    }))
    .actions((self) => ({
        ritualizeGoal: flow(function* _ritualizeGoal() {
            const user_id = getUserId()
            if (!self.new_goal || !user_id) return

            try {
                if (!self.new_goal?.goal_ritual) return

                const ritualData: IInsertRitual = {
                    goal_id: self.new_goal.id,
                    ritual_id: self.new_goal.goal_ritual.ritual_id || crypto.randomUUID(),
                    ritual_power: self.new_goal.goal_ritual.ritual_power + 1,
                    ritual_interval: self.new_goal.goal_ritual.ritual_interval,
                    ritual_type: self.new_goal.goal_ritual.ritual_type,
                }

                const insertRitualGoalId = yield* toGenerator(insertGoalsRituals(ritualData))

                if (!insertRitualGoalId) throw new Error('insertGoalsRitualsRes error')

                // to add ritual type
                const { ritual_goal_created_at, ritual_goal_finished_at } = generateNewRitualCircle({
                    ritual_type: self.new_goal.goal_ritual.ritual_type,
                    new_ritual_interval: self.new_goal.goal_ritual.ritual_interval,
                    goal_created_at: self.new_goal.created_at,
                    goal_finished_at: self.new_goal.finished_at,
                    edit: true,
                })

                const goalData = {
                    id: self.new_goal.id,
                    title: self.new_goal.title,
                    slogan: self.new_goal.slogan,
                    description: self.new_goal.description,
                    owner_id: self.new_goal.owner_id,
                    privacy: self.new_goal.privacy,
                    status: self.new_goal.status,
                    difficulty: self.new_goal.difficulty,
                    created_at: ritual_goal_created_at,
                    finished_at: ritual_goal_finished_at,
                    deleted_at: null,
                    is_favorite: self.new_goal.is_favorite,
                }
                const updatedGoalResponse = yield* toGenerator(upsertGoalMutation(goalData))

                if (!updatedGoalResponse) throw new Error('failed to update goal data')

                const updatedGoal = self.goals.find((goal) => goal.id === updatedGoalResponse.id)

                if (!updatedGoal) return

                updatedGoal.onChangeField('title', updatedGoalResponse.title)
                updatedGoal.onChangeField('slogan', updatedGoalResponse.slogan)
                updatedGoal.onChangeField('description', updatedGoalResponse.description)
                updatedGoal.onChangeField('privacy', updatedGoalResponse.privacy)
                updatedGoal.onChangeField('status', updatedGoalResponse.status)
                updatedGoal.onChangeField('created_at', updatedGoalResponse.created_at)
                updatedGoal.onChangeField('finished_at', updatedGoalResponse.finished_at)
                updatedGoal.onChangeField('goal_ritual', castToSnapshot(updatedGoalResponse.goal_ritual))
                updatedGoal.onChangeField('deleted_at', updatedGoalResponse.deleted_at)
                updatedGoal.onChangeField('is_favorite', updatedGoalResponse.is_favorite)

                // ritual coins
                const {
                    user$: { onChangeField: userOnChangeField, coins, total_ritual_power },
                } = getParentOfType(self, Root$)

                const mPoints = getCoinsFromRitual(self.new_goal.ritualGoalPower, coins)

                const resGoalCoins = yield* toGenerator(addCoinsMutation(mPoints))

                if (resGoalCoins === undefined) throw new Error('addMPointsMutation error')

                userOnChangeField('coins', resGoalCoins)
                userOnChangeField('total_ritual_power', total_ritual_power + 1)

                self.cancelGoalCreator()
            } catch (e) {
                processError(e, 'ritualizeGoal error')
            }
        }),
    }))
    .actions((self) => ({
        generateGoal: flow(function* _generateGoal() {
            const user_id = getUserId()
            if (!self.new_goal || !user_id) return

            if (self.new_goal?.create_ritual_mode) {
                self.ritualizeGoal()
                return
            }

            try {
                // goal exists
                if (self.new_goal?.created_at && self.new_goal?.finished_at) {
                    // goal exists
                    let finished_at = self.new_goal.finished_at

                    if (self.new_goal.isRitualGoal) {
                        const { ritual_goal_finished_at } = generateNewRitualCircle({
                            ritual_type: self.new_goal.ritualGoalType,
                            new_ritual_interval: self.new_goal.ritualGoalInterval,
                            goal_created_at: self.new_goal.created_at,
                            goal_finished_at: self.new_goal.finished_at,
                            edit: true,
                        })

                        finished_at = ritual_goal_finished_at
                    }
                    const goalData = {
                        id: self.new_goal.id,
                        title: self.new_goal.title,
                        slogan: self.new_goal.slogan,
                        description: self.new_goal.description,
                        owner_id: self.new_goal.owner_id,
                        privacy: self.new_goal.privacy,
                        status: self.new_goal.status,
                        difficulty: self.new_goal.difficulty,
                        finished_at: set(finished_at, { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 }),
                        is_favorite: self.new_goal.is_favorite,
                    }

                    const updatedGoalResponse = yield* toGenerator(upsertGoalMutation(goalData))

                    if (!updatedGoalResponse) throw new Error('failed to update goal data')

                    const updatedGoal = self.goals.find((goal) => goal.id === updatedGoalResponse.id)

                    if (!updatedGoal) return
                    updatedGoal.onChangeField('title', updatedGoalResponse.title)
                    updatedGoal.onChangeField('slogan', updatedGoalResponse.slogan)
                    updatedGoal.onChangeField('description', updatedGoalResponse.description)
                    updatedGoal.onChangeField('privacy', updatedGoalResponse.privacy)
                    updatedGoal.onChangeField('status', updatedGoalResponse.status)
                    updatedGoal.onChangeField('finished_at', updatedGoalResponse.finished_at)
                    updatedGoal.onChangeField('is_favorite', updatedGoalResponse.is_favorite)

                    // update ritual interval if is ritual goal
                    if (self.new_goal.goal_ritual?.ritual_interval !== undefined) {
                        const goalRitualIntervalRes = yield updateRitualInterval(
                            updatedGoalResponse.id,
                            self.new_goal.goal_ritual?.ritual_interval,
                            self.new_goal.goal_ritual?.ritual_type,
                        )

                        updatedGoal.goal_ritual?.onChangeField('ritual_interval', goalRitualIntervalRes)
                        updatedGoal.goal_ritual?.onChangeField('ritual_type', self.new_goal.goal_ritual?.ritual_type)
                    }
                } else {
                    // new goal

                    const newGoal: IInsertNewGoal = {
                        title: self.new_goal.title,
                        slogan: self.new_goal.slogan,
                        description: self.new_goal.description,
                        owner_id: user_id,
                        privacy: self.new_goal.privacy,
                        status: self.new_goal.status,
                        difficulty: setGoalDifficulty(self.new_goal.finished_at),
                        finished_at:
                            self.new_goal.finished_at &&
                            set(self.new_goal.finished_at, { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 }),
                        parent_goal_id: self.new_goal.parent_goal_id ?? null,
                        is_favorite: self.new_goal.is_favorite,
                    }

                    const newGoalResult = yield* toGenerator(insertGoalMutation(newGoal))
                    if (!newGoalResult || !newGoalResult.id) throw new Error('newGoalResult error')

                    console.warn('parent_goal_id', self.new_goal.parent_goal_id)
                    console.warn('newGoalResult_id', newGoalResult.id)

                    if (self.new_goal.parent_goal_id) {
                        const parentGoal = self.goals.find((goal) => goal.id === self.new_goal?.parent_goal_id)
                        if (!parentGoal) throw new Error("error: can't find parent goal")

                        if (parentGoal?.goal_new_status) {
                            yield* toGenerator(updateGoalStatusToCompleted(self.new_goal.parent_goal_id))
                            parentGoal.onChangeField('status', GOAL_STATUS_ENUM.COMPLETED)
                        }
                    }

                    self.goals.push(newGoalResult)
                }
                self.cancelGoalCreator()
            } catch (e) {
                processError(e, 'generateGoal error')
            }
        }),
    }))

type IGoalCreatorViewMode = {
    view_mode?: boolean
    edit_mode?: never
    create_child_mode?: never
    create_ritual_mode?: never
    redirectMode?: never
}
type IGoalCreatorEditMode = {
    view_mode?: never
    edit_mode?: boolean
    create_child_mode?: never
    create_ritual_mode?: never
    redirectMode?: never
}
type IGoalCreatorCreateRitualMode = {
    view_mode?: never
    edit_mode?: never
    create_child_mode?: never
    create_ritual_mode?: boolean
    redirectMode?: 'view_mode' | 'edit_mode' | 'create_ritual_mode'
}

type IGoalCreatorCreateNewChildMode = {
    view_mode?: never
    edit_mode?: never
    create_ritual_mode?: never
    create_child_mode?: boolean
    redirectMode?: 'view_mode' | 'edit_mode' | 'create_ritual_mode'
}

type IGoalCreatorMode =
    | IGoalCreatorViewMode
    | IGoalCreatorEditMode
    | IGoalCreatorCreateRitualMode
    | IGoalCreatorCreateNewChildMode

type IGoalCreator = { selectedGoal?: IGoal$; parentGoalId?: string } & IGoalCreatorMode
