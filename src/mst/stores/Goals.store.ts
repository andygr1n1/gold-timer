import { insertGoal } from '@/graphql/mutations/insertGoal.mutation'
import { STATUS_ENUM } from '@/helpers/enums'
import { IGenerateGoalValues, IInsertNewGoal } from '@/helpers/interfaces/new_goal.interface'
import { setGoalDifficulty } from '@/helpers/set_goal_difficulty'
import { add } from 'date-fns'
import { flow } from 'mobx'
import { getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { IGoal$ } from '../types'
import { Goal$ } from './Goal.store'
import { NewGoal$ } from './NewGoal.store'
import { Root$ } from './Root.store'

export const Goals$ = types
    .model('Goals$', {
        goals: types.array(Goal$),
        new_goal$: types.optional(NewGoal$, { id: '' }),
        editable_goal: types.safeReference(Goal$),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        toggleEditableGoal(goal?: IGoal$): void {
            console.log('click', goal?.id)
            self.editable_goal = goal
            console.log('self.editable_goal', self.editable_goal?.id)
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
