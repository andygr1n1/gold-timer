import { insertGoal } from '@/graphql/mutations/insertGoal.mutation'
import { STATUS_ENUM } from '@/helpers/enums'
import { IGenerateGoalValues, IInsertNewGoal } from '@/helpers/interfaces/new_goal.interface'
import { setGoalDifficulty } from '@/helpers/set_goal_difficulty'
import { add } from 'date-fns'
import _ from 'lodash'
import { flow } from 'mobx'
import { getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { IGoal$ } from '../types'
import { Goal$ } from './Goal.store'
import { GoalCreator$ } from './GoalCreator.store'
import { Root$ } from './Root.store'

export const Goals$ = types
    .model('Goals$', {
        goals: types.array(Goal$),
        editable_goal: types.safeReference(Goal$),

        goal_creator$: types.optional(GoalCreator$, { id: '' }),
    })
    .views((self) => ({
        get goalCreatorIsOpen(): boolean {
            return !!self.goal_creator$.id
        },
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
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        goEditMode(editGoal: IGoal$): void {
            self.editable_goal = editGoal
            self.goal_creator$.is_open = true
        },
        generateGoal: flow(function* _generateGoal(values: IGenerateGoalValues) {
            const {
                user$: { user_id },
            } = getParentOfType(self, Root$)

            try {
                if (!user_id) throw new Error('user id is undefined')

                const finished_at = values.Days ? add(Date.now(), { days: values.Days }) : values.FinishDate

                const newGoal: IInsertNewGoal = {
                    title: values.Title,
                    slogan: values.Slogan,
                    description: values.Description,
                    owner_id: user_id,
                    privacy: values.Privacy,
                    status: values.Freeze ? STATUS_ENUM.FROZEN : STATUS_ENUM.ACTIVE,
                    difficulty: setGoalDifficulty(finished_at),
                    finished_at,
                }

                yield* toGenerator(insertGoal(newGoal))
            } catch (e) {
                alert(`generateGoal error, ${e}`)
            }
        }),
    }))
