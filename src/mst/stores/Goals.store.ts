import { generateLog } from '@/graphql/mutations/generateLogCreatedGoal.mutation'
import { insertGoal } from '@/graphql/mutations/insertGoal.mutation'
import { updateGoalStatus } from '@/graphql/mutations/updateGoalStatus.mutation'
import { upsertGoal } from '@/graphql/mutations/upsertGoal.mutation'
import { LOG_TYPE_ENUM, STATUS_ENUM } from '@/helpers/enums'
import { IInsertNewGoal } from '@/helpers/interfaces/new_goal.interface'
import { setGoalDifficulty } from '@/helpers/set_goal_difficulty'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { add } from 'date-fns'
import _ from 'lodash'
import { flow } from 'mobx'
import { destroy, detach, getParentOfType, toGenerator, types, cast, applySnapshot } from 'mobx-state-tree'
import { IGoal$ } from '../types'
import { Goal$ } from './Goal.store'
import { Root$ } from './Root.store'

export const Goals$ = types
    .model('Goals$', {
        goals: types.array(Goal$),
        new_goal: types.optional(Goal$, {}),

        editable_goal: types.safeReference(Goal$),

        is_creator_mode: false,

        goals_checked_list: types.array(types.enumeration(Object.values(STATUS_ENUM))),
    })
    .views((self) => ({
        get activeGoalsChecked(): boolean {
            return self.goals_checked_list.includes(STATUS_ENUM.ACTIVE)
        },
        get activeGoals(): IGoal$[] {
            return _.filter(self.goals, (goal) => goal.status === STATUS_ENUM.ACTIVE)
        },
        get frozenGoalsChecked(): boolean {
            return self.goals_checked_list.includes(STATUS_ENUM.FROZEN)
        },
        get frozenGoals(): IGoal$[] {
            return _.filter(self.goals, (goal) => goal.status === STATUS_ENUM.FROZEN)
        },
        get completedGoals(): IGoal$[] {
            return _.filter(self.goals, (goal) => goal.status === STATUS_ENUM.COMPLETED)
        },
        get completedGoalsCount(): number {
            return this.completedGoals.length
        },
        get isNotValidToSaveGoalData(): boolean {
            return !!!self.editable_goal?.title.length
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        onCheckAllGoalsChange(e: CheckboxChangeEvent): void {
            if (e.target.checked) {
                applySnapshot(self.goals_checked_list, Object.values(STATUS_ENUM))
            } else {
                applySnapshot(self.goals_checked_list, [])
            }
        },
        onChangeCheckGoals(list: CheckboxValueType[]): void {
            applySnapshot(self.goals_checked_list, list as STATUS_ENUM[])
        },
        goCreateNewGoalMode(): void {
            self.is_creator_mode = true
            self.editable_goal = self.new_goal
        },
        goGoalViewMode(editGoal: IGoal$): void {
            self.editable_goal = editGoal
            self.new_goal = { ...self.editable_goal, id: '' }
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
            self.editable_goal = self.new_goal
        },
        goGoalEditMode(): void {
            if (!self.editable_goal) return
            self.is_creator_mode = true
        },
        exitGoalEditMode(): void {
            self.is_creator_mode = false
        },

        closeGoalCreator(): void {
            self.is_creator_mode = false
            self.editable_goal = undefined
            destroy(detach(self.new_goal))
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
                    }
                    const updatedGoalResponse = yield* toGenerator(upsertGoal(goalData))
                    if (!updatedGoalResponse) throw new Error('failed to update goal data')
                    self.editable_goal.onChangeField('title', updatedGoalResponse.title)
                    self.editable_goal.onChangeField('slogan', updatedGoalResponse.slogan)
                    self.editable_goal.onChangeField('description', updatedGoalResponse.description)
                    self.editable_goal.onChangeField('privacy', updatedGoalResponse.privacy)
                    self.editable_goal.onChangeField('status', updatedGoalResponse.status)
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
                        parent_goal_id: self.new_goal.parent_goal_id,
                    }

                    const newGoalResult = yield* toGenerator(insertGoal(newGoal))
                    if (!newGoalResult || !newGoalResult.id) throw new Error('newGoalResult error')
                    const generateLogCreatedGoalRes = yield* toGenerator(
                        generateLog(newGoalResult.id, LOG_TYPE_ENUM.CREATED),
                    )
                    if (!generateLogCreatedGoalRes) throw new Error('generateLogCreatedGoalRes error')

                    if (self.new_goal.parent_goal_id) {
                        const deprecatedParentGoalStatusRes = yield* toGenerator(
                            updateGoalStatus(self.new_goal.parent_goal_id, STATUS_ENUM.DEPRECATED),
                        )
                        const generateLogForDeprecatedGoalRes = yield* toGenerator(
                            generateLog(self.new_goal.parent_goal_id, LOG_TYPE_ENUM.DEPRECATED),
                        )

                        if (!deprecatedParentGoalStatusRes) throw new Error('deprecatedParentGoalStatus error')
                        if (!generateLogForDeprecatedGoalRes) throw new Error('generateLogForDeprecatedGoalRes error')

                        self.destroyGoal(self.new_goal.parent_goal_id)
                    }

                    self.onChangeField('goals', cast([cast(newGoalResult), ...self.goals]))
                }
                self.closeGoalCreator()
            } catch (e) {
                alert(`generateGoal error, ${e}`)
                console.error(`generateGoal error, ${e}`)
            }
        }),
    }))
