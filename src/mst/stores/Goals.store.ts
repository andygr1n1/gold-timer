import { generateNewRitualCircle } from './../../helpers/generate_new_ritual_circle'
import { generateLog } from '@/graphql/mutations/generateLog.mutation'
import { insertGoalMutation } from '@/graphql/mutations/insertGoal.mutation'
import { insertGoalsRituals } from '@/graphql/mutations/upsertGoalsRituals.mutation'
import { updateGoalStatusToCompleted } from '@/graphql/mutations/updateGoalStatus.mutation'
import { upsertGoalMutation } from '@/graphql/mutations/upsertGoal.mutation'
import { LOG_TYPE_ENUM, STATUS_ENUM, STATUS_ENUM_FILTERS } from '@/helpers/enums'
import { IInsertNewGoal, IInsertRitual } from '@/helpers/interfaces/new_goal.interface'
import { setGoalDifficulty } from '@/helpers/set_goal_difficulty'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { add, isPast, sub } from 'date-fns'
import { filter, orderBy, differenceWith, cloneDeep, compact } from 'lodash'
import {
    destroy,
    detach,
    getParentOfType,
    toGenerator,
    types,
    cast,
    applySnapshot,
    flow,
    castToSnapshot,
} from 'mobx-state-tree'
import { IGoal$ } from '../types'
import { Goal$ } from './Goal.store'
import { Root$ } from './Root.store'
import { v4 } from 'uuid'
import { getCoinsFromRitual } from '@/helpers/get_coins_from_ritual'
import { addCoinsMutation } from '@/graphql/mutations/addCoins.mutation'

export const Goals$ = types
    .model('Goals$', {
        goals: types.array(Goal$),
        new_goal: types.optional(Goal$, {}),

        editable_goal: types.safeReference(Goal$),
        is_creator_mode: false,

        complete_goal_modal: types.safeReference(Goal$),

        goals_checked_list_filter: types.array(types.enumeration(Object.values(STATUS_ENUM_FILTERS))),
        global_filtered_title_value: '',
        //
        achievements_edit_mode: false,
    })
    .views((self) => ({
        get globalFilteredGoals(): IGoal$[] {
            return self.goals.filter(
                (goal) =>
                    goal.title
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.global_filtered_title_value.trim().toLocaleLowerCase()) ||
                    goal.slogan
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.global_filtered_title_value.trim().toLocaleLowerCase()),
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
            const goals = filter(self.globalFilteredGoals, (goal) => goal.status === STATUS_ENUM.ACTIVE).filter(
                (goal) => goal.finished_at && isPast(goal.finished_at),
            )
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        /*         get activeHotGoals(): IGoal$[] {
            const tommorowDate = () =>
                add(Date.now(), {
                    days: 1,
                })

            const goals = filter(self.goals, (goal) => goal.status === STATUS_ENUM.ACTIVE).filter(
                (goal) => goal.finished_at && isFuture(goal.finished_at) && goal.finished_at < tommorowDate(),
            )
            return orderBy(goals, ['finished_at'], ['asc'])
        }, */
        // get activeGoals(): IGoal$[] {
        //     const goals: IGoal$[] = compact(
        //         differenceWith(
        //             filter(
        //                 self.goals,
        //                 (goal) =>
        //                     goal.status === STATUS_ENUM.ACTIVE &&
        //                     !!(goal.created_at && goal.created_at <= new Date(Date.now())),
        //             ),
        //             this.activeExpiredGoals,
        //         ),
        //     )
        //     return orderBy(goals, ['finished_at'], ['asc'])
        // },
        get activeGoals(): IGoal$[] {
            const goals: IGoal$[] = compact(
                differenceWith(
                    filter(self.goals, (goal) => {
                        return (
                            !!goal.created_at &&
                            isPast(sub(goal.created_at, { seconds: 3 })) &&
                            goal.status === STATUS_ENUM.ACTIVE
                        )
                    }),
                    this.activeExpiredGoals,
                ),
            )
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get topActiveGoals(): IGoal$[] {
            const today = new Date(Date.now())
            const goals = filter(
                this.activeGoals,
                (goal) =>
                    goal.ritualGoalPower === 0 && !!goal.finished_at && goal.finished_at < add(today, { days: 1 }),
            )

            return goals.slice(0, 4)
        },

        get frozenGoals(): IGoal$[] {
            const goals = filter(self.globalFilteredGoals, (goal) => goal.status === STATUS_ENUM.FROZEN)
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get completedGoals(): IGoal$[] {
            const goals = filter(self.globalFilteredGoals, (goal) => goal.status === STATUS_ENUM.COMPLETED)
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get ritualGoals(): IGoal$[] {
            const goals = filter(
                self.globalFilteredGoals,
                (goal) => goal.ritualGoalPower > 0 && goal.status === STATUS_ENUM.ACTIVE,
            )
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get favoriteGoals(): IGoal$[] {
            const goals = filter(self.globalFilteredGoals, (goal) => goal.is_favorite)
            return orderBy(goals, ['finished_at'], ['asc'])
        },
        get topRitualGoals(): IGoal$[] {
            const today = new Date(Date.now())
            const goals = filter(
                this.activeGoals,
                (goal) => goal.ritualGoalPower > 0 && !!goal.finished_at && goal.finished_at < add(today, { days: 1 }),
            )
            return orderBy(goals, ['finished_at'], ['asc']).slice(0, 4)
        },
        get topExpiredGoals(): IGoal$[] {
            const goals = filter(self.goals, (goal) => goal.status === STATUS_ENUM.ACTIVE).filter(
                (goal) => goal.finished_at && isPast(goal.finished_at),
            )
            return orderBy(goals, ['finished_at'], ['asc']).slice(0, 4)
        },

        get noGoalsForToday(): boolean {
            return !this.topActiveGoals.length && !this.topRitualGoals.length && !this.topExpiredGoals.length
        },
        get noActiveSprints(): boolean {
            return true
        },
    }))
    .views((self) => ({
        get completedGoalsCount(): number {
            return self.completedGoals.length
        },
        get isNotValidToSaveGoalData(): boolean {
            if (!self.editable_goal || !self.editable_goal.finished_at) return false
            return !!!self.editable_goal?.title.length || self.editable_goal.finished_at < new Date(Date.now())
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        onCheckAllGoalsChange(e: CheckboxChangeEvent): void {
            if (e.target.checked) {
                applySnapshot(self.goals_checked_list_filter, Object.values(STATUS_ENUM_FILTERS))
            } else {
                applySnapshot(self.goals_checked_list_filter, [])
            }
        },
        onChangeCheckGoals(list: CheckboxValueType[]): void {
            applySnapshot(self.goals_checked_list_filter, list as STATUS_ENUM_FILTERS[])
        },
        goCreateNewGoalMode(): void {
            self.is_creator_mode = true
            self.editable_goal = self.new_goal
        },
        goCreateNewChildGoal(parentGoalId: string): void {
            self.is_creator_mode = true
            self.new_goal.parent_goal_id = parentGoalId
            self.editable_goal = self.new_goal
        },
        goGoalViewMode(editGoal: IGoal$): void {
            self.editable_goal = editGoal
            self.new_goal = cloneDeep({ ...self.editable_goal, id: '' })
        },
        goFreezedGoalViewMode(editGoal: IGoal$): void {
            self.is_creator_mode = true
            self.new_goal = {
                ...editGoal,
                id: '',
                created_at: undefined,
                finished_at: undefined,
                status: STATUS_ENUM.ACTIVE,
                parent_goal_id: editGoal.id,
            }

            editGoal.onChangeField('goal_new_status', STATUS_ENUM.DEPRECATED)
            self.editable_goal = self.new_goal
        },
        goGoalEditMode(): void {
            if (!self.editable_goal) return
            self.is_creator_mode = true
        },
        exitGoalEditMode(): void {
            if (self.editable_goal && self.editable_goal?.goal_ritualized_mode) {
                self.editable_goal.onChangeField('goal_ritualized_mode', false)
            }
            self.is_creator_mode = false
        },

        closeGoalCreator(): void {
            self.is_creator_mode = false
            self.editable_goal = undefined
            self.complete_goal_modal = undefined
            destroy(detach(self.new_goal))
        },
        goCompleteGoalMode(goal: IGoal$): void {
            self.complete_goal_modal = goal
        },
        closeGoalCompleteMode(): void {
            self.complete_goal_modal = undefined
        },

        destroyGoal(goal_id: string): void {
            const destroyGoal = self.goals.find((goal) => goal_id === goal.id)
            destroyGoal && destroy(detach(destroyGoal))
        },
    }))
    .actions((self) => ({
        generateGoal: flow(function* _generateGoal() {
            const {
                user$: { id: user_id },
            } = getParentOfType(self, Root$)

            try {
                if (!user_id) throw new Error('user id is undefined')

                if (self.editable_goal?.created_at) {
                    // goal exists
                    const goalData = {
                        id: self.editable_goal.id,
                        title: self.new_goal.title,
                        slogan: self.new_goal.slogan,
                        description: self.new_goal.description,
                        owner_id: self.new_goal.owner_id,
                        privacy: self.new_goal.privacy,
                        status: self.new_goal.status,
                        difficulty: self.new_goal.difficulty,
                        finished_at: self.new_goal.finished_at,
                    }
                    const updatedGoalResponse = yield* toGenerator(upsertGoalMutation(goalData))
                    if (!updatedGoalResponse) throw new Error('failed to update goal data')
                    self.editable_goal.onChangeField('title', updatedGoalResponse.title)
                    self.editable_goal.onChangeField('slogan', updatedGoalResponse.slogan)
                    self.editable_goal.onChangeField('description', updatedGoalResponse.description)
                    self.editable_goal.onChangeField('privacy', updatedGoalResponse.privacy)
                    self.editable_goal.onChangeField('status', updatedGoalResponse.status)
                    self.editable_goal.onChangeField('finished_at', updatedGoalResponse.finished_at)
                } else {
                    if (!self.editable_goal) return

                    const finishEstimation = self.editable_goal?.estimation_days
                        ? add(Date.now(), { days: self.editable_goal?.estimation_days })
                        : self.editable_goal?.finished_at

                    self.editable_goal.onChangeField('finished_at', finishEstimation)
                    // new goal

                    const newGoal: IInsertNewGoal = {
                        title: self.new_goal.title,
                        slogan: self.new_goal.slogan,
                        description: self.new_goal.description,
                        owner_id: user_id,
                        privacy: self.new_goal.privacy,
                        status: self.new_goal.status,
                        difficulty: setGoalDifficulty(self.new_goal.finished_at),
                        finished_at: self.new_goal.finished_at,
                        parent_goal_id: self.new_goal.parent_goal_id ?? null,
                    }

                    const newGoalResult = yield* toGenerator(insertGoalMutation(newGoal))
                    if (!newGoalResult || !newGoalResult.id) throw new Error('newGoalResult error')

                    console.warn('parent_goal_id', self.new_goal.parent_goal_id)
                    console.warn('newGoalResult_id', newGoalResult.id)

                    const generateLogCreatedGoalRes = yield* toGenerator(
                        generateLog(newGoalResult.id, LOG_TYPE_ENUM.CREATED),
                    )
                    if (!generateLogCreatedGoalRes) throw new Error('generateLogCreatedGoalRes error')

                    if (self.new_goal.parent_goal_id) {
                        const parentGoal = self.goals.find((goal) => goal.id === self.new_goal.parent_goal_id)

                        if (!parentGoal) throw new Error("error: can't find parent goal")

                        if (parentGoal?.goal_new_status) {
                            const parentGoalStatusRes = yield* toGenerator(
                                updateGoalStatusToCompleted(self.new_goal.parent_goal_id),
                            )
                            const generateLogForParentGoalRes = yield* toGenerator(
                                generateLog(
                                    self.new_goal.parent_goal_id,
                                    parentGoal.goal_new_status as unknown as LOG_TYPE_ENUM,
                                ),
                            )

                            if (!parentGoalStatusRes) throw new Error('deprecatedParentGoalStatus error')
                            if (!generateLogForParentGoalRes) throw new Error('generateLogForDeprecatedGoalRes error')

                            if (parentGoal.goal_new_status !== STATUS_ENUM.COMPLETED) {
                                self.destroyGoal(self.new_goal.parent_goal_id)
                            } else if (parentGoal.goal_new_status === STATUS_ENUM.COMPLETED) {
                                parentGoal.onChangeField('status', STATUS_ENUM.COMPLETED)
                            }
                        }
                    }

                    self.goals.push(newGoalResult)
                }
                self.closeGoalCreator()
            } catch (e) {
                alert(`generateGoal error, ${e}`)
                console.error(`generateGoal error, ${e}`)
            }
        }),
        ritualizeGoal: flow(function* _() {
            const {
                user$: { id: user_id },
            } = getParentOfType(self, Root$)

            try {
                if (!user_id) throw new Error('user id is undefined')
                if (!self.editable_goal || !self.editable_goal?.goal_ritual || !self.new_goal.goal_ritual) return

                const ritualData: IInsertRitual = {
                    goal_id: self.editable_goal.id,
                    ritual_id: self.editable_goal.goal_ritual.ritual_id || v4(),
                    ritual_power: self.editable_goal.goal_ritual.ritual_power + 1,
                    ritual_interval: self.new_goal.goal_ritual.ritual_interval,
                    ritual_type: self.new_goal.goal_ritual.ritual_type,
                }

                const insertRitualGoalId = yield* toGenerator(insertGoalsRituals(ritualData))

                if (!insertRitualGoalId) throw new Error('insertGoalsRitualsRes error')

                yield generateLog(insertRitualGoalId, LOG_TYPE_ENUM.RITUALIZED)

                const { ritual_goal_created_at, ritual_goal_finished_at } = generateNewRitualCircle(
                    self.editable_goal,
                    self.new_goal.goal_ritual.ritual_interval,
                )

                const goalData = {
                    id: self.editable_goal.id,
                    title: self.new_goal.title,
                    slogan: self.new_goal.slogan,
                    description: self.new_goal.description,
                    owner_id: self.new_goal.owner_id,
                    privacy: self.new_goal.privacy,
                    status: self.new_goal.status,
                    difficulty: self.new_goal.difficulty,
                    created_at: ritual_goal_created_at,
                    finished_at: ritual_goal_finished_at,
                }
                const updatedGoalResponse = yield* toGenerator(upsertGoalMutation(goalData))

                if (!updatedGoalResponse) throw new Error('failed to update goal data')

                self.editable_goal.onChangeField('title', updatedGoalResponse.title)
                self.editable_goal.onChangeField('slogan', updatedGoalResponse.slogan)
                self.editable_goal.onChangeField('description', updatedGoalResponse.description)
                self.editable_goal.onChangeField('privacy', updatedGoalResponse.privacy)
                self.editable_goal.onChangeField('status', updatedGoalResponse.status)
                self.editable_goal.onChangeField('created_at', updatedGoalResponse.created_at)
                self.editable_goal.onChangeField('finished_at', updatedGoalResponse.finished_at)
                self.editable_goal.onChangeField('goal_ritual', castToSnapshot(updatedGoalResponse.goals_rituals))

                self.editable_goal.onChangeField('goal_ritualized_mode', false)

                // ritual coins
                const {
                    user$: { onChangeField: userOnChangeField, coins },
                } = getParentOfType(self, Root$)

                const mPoints = getCoinsFromRitual(self.editable_goal.ritualGoalPower, coins)

                const resGoalCoins = yield* toGenerator(addCoinsMutation(mPoints))

                if (resGoalCoins === undefined) throw new Error('addMPointsMutation error')

                userOnChangeField('coins', resGoalCoins)

                self.closeGoalCreator()
            } catch (e) {
                alert(`generateGoal error, ${e}`)
                console.error(`generateGoal error, ${e}`)
            }
        }),
    }))
