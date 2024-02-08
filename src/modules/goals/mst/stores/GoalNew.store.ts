import { flow, toGenerator } from 'mobx-state-tree'
import { Goal$ } from './Goal.store'
import { getOwnerId } from '@/functions/getUserId'
import { IInsertNewGoal } from '@/modules/goals/interfaces/types'
import { setGoalDifficulty } from '@/functions/setGoalDifficulty'
import { set } from 'date-fns'
import { processError } from '@/functions/processMessage'
import { mutation_upsertGoal } from '../../graphql/mutation_upsertGoal'

export const GoalNew$ = Goal$.named('GoalNew$')
    .views((self) => ({
        get goalDataValidator(): boolean {
            return !!self.title.length && !!self.finished_at
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        createNewGoal: flow(function* _createNewGoal() {
            const user_id = getOwnerId()
            if (!user_id || !self.finished_at) return

            try {
                const newGoal: IInsertNewGoal = {
                    title: self.title,
                    slogan: self.slogan,
                    description: self.description,
                    owner_id: user_id,
                    privacy: self.privacy,
                    status: self.status,
                    difficulty: setGoalDifficulty(self.finished_at),
                    finished_at:
                        self.finished_at &&
                        set(self.finished_at, { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 }),
                    parent_goal_id: self.parent_goal_id ?? null,
                    is_favorite: self.is_favorite,
                }

                const newGoalResult = yield* toGenerator(mutation_upsertGoal(newGoal, []))
                if (!newGoalResult) throw new Error('newGoalResult error')

                return newGoalResult.insert_goals_one
            } catch (e) {
                processError(e, 'generateGoal error')
            }
        }),
    }))
