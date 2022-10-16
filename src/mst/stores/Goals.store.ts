import { insertGoal } from '@/graphql/mutations/insertGoal.mutation'
import { upsertGoal } from '@/graphql/mutations/upsertGoal.mutation'
import { STATUS_ENUM } from '@/helpers/enums'
import { IInsertNewGoal } from '@/helpers/interfaces/new_goal.interface'
import { setGoalDifficulty } from '@/helpers/set_goal_difficulty'
import { add } from 'date-fns'
import _ from 'lodash'
import { flow } from 'mobx'
import { destroy, detach, getParentOfType, toGenerator, types, cast } from 'mobx-state-tree'
import { IGoal$ } from '../types'
import { Goal$ } from './Goal.store'
import { Root$ } from './Root.store'

export const Goals$ = types
    .model('Goals$', {
        goals: types.array(Goal$),
        new_goal: types.optional(Goal$, {}),

        editable_goal: types.safeReference(Goal$),

        is_creator_mode: false,
    })
    .views((self) => ({
        get activeGoals(): IGoal$[] {
            return _.filter(self.goals, (goal) => goal.status === STATUS_ENUM.ACTIVE)
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
        goCreateNewGoalMode(): void {
            self.is_creator_mode = true
            self.editable_goal = self.new_goal
        },
        goGoalViewMode(editGoal: IGoal$): void {
            self.editable_goal = editGoal
            self.new_goal = { ...self.editable_goal, id: '' }
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
                        title: self.editable_goal.title,
                        slogan: self.editable_goal.slogan,
                        description: self.editable_goal.description,
                        owner_id: user_id,
                        privacy: self.editable_goal.privacy,
                        status: self.editable_goal.freeze ? STATUS_ENUM.FROZEN : STATUS_ENUM.ACTIVE,
                        difficulty: setGoalDifficulty(self.editable_goal.finished_at),
                        finished_at: self.editable_goal.finished_at,
                    }
                    const newGoalResult = yield* toGenerator(insertGoal(newGoal))

                    if (!newGoalResult) throw new Error('newGoalResult error')
                    console.log('newGoalResult', newGoalResult)
                    self.onChangeField('goals', cast([cast(newGoalResult), ...self.goals]))
                }
                self.closeGoalCreator()
            } catch (e) {
                alert(`generateGoal error, ${e}`)
                console.error(`generateGoal error, ${e}`)
            }
        }),
    }))
