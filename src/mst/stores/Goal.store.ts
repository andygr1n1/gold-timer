import { completeGoalMutation } from '@/graphql/mutations/completeGoal.mutation'
import { cast, flow, getParentOfType, types } from 'mobx-state-tree'
import { Goal } from '../models/Goal.model'
import { Goals$ } from './Goals.store'

export const Goal$ = types
    .compose(
        Goal,
        types.model({
            estimation_days: 30,
        }),
    )
    .named('Goal$')
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        goGoalViewMode(): void {
            const { goGoalViewMode } = getParentOfType(self, Goals$)

            goGoalViewMode(cast(self))
        },
        completeGoal: flow(function* _completeGoal() {
            try {
                const result = yield completeGoalMutation(self.id)
                if (!result) throw new Error('completeGoal error')
                self.status = result
            } catch (e) {}
        }),
    }))
