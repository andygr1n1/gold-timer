import { LOG_TYPE_ENUM, RITUAL_TYPE_ENUM, STATUS_ENUM } from '@/helpers/enums'
import { completeGoalMutation } from '@/graphql/mutations/completeGoal.mutation'
import { failGoalMutation } from '@/graphql/mutations/failGoal.mutation'
import { cast, castToSnapshot, flow, getParentOfType, types } from 'mobx-state-tree'
import { Goal } from '../models/Goal.model'
import { Goals$ } from './Goals.store'
import { generateLog } from '@/graphql/mutations/generateLog.mutation'

export const Goal$ = types
    .compose(
        Goal,
        types.model({
            estimation_days: 30,
            //
            // to understand how to update goal, when a child is creating
            // parent goal can be failed, completed or deprecated if was frozen
            goal_new_status: types.maybe(types.enumeration(Object.values(STATUS_ENUM))),
            //
            goal_ritualized_mode: false,
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
        goActivateFreezedGoal(): void {
            const { goFreezedGoalViewMode } = getParentOfType(self, Goals$)
            goFreezedGoalViewMode(cast(self))
        },
        goEditFrozenGoal(): void {
            const { goGoalViewMode } = getParentOfType(self, Goals$)
            goGoalViewMode(cast(self))
        },
        goGoalRitualizedMode(): void {
            const { goGoalViewMode, goGoalEditMode } = getParentOfType(self, Goals$)

            self.goal_ritualized_mode = true

            if (!self.goal_ritual) {
                this.onChangeField(
                    'goal_ritual',
                    castToSnapshot({
                        ritual_id: '',
                        ritual_goal: '',
                        ritual_type: RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
                        ritual_power: 0,
                        ritual_interval: 7,
                    }),
                )
            }

            goGoalViewMode(cast(self))
            goGoalEditMode()
        },

        completeGoal: flow(function* _completeGoal() {
            try {
                const result = yield completeGoalMutation(self.id)
                if (!result) throw new Error('completeGoal error')
                self.status = result

                const completeLog = generateLog(self.id, LOG_TYPE_ENUM.COMPLETED)
                if (!completeLog) throw new Error('completeLog error')
            } catch (e) {
                alert(e)
            }
        }),

        completeGoalAndCreateNewChild(): void {
            const { goCreateNewChildGoal } = getParentOfType(self, Goals$)
            goCreateNewChildGoal(self.id)
            self.goal_new_status = STATUS_ENUM.COMPLETED
        },
        failGoal: flow(function* _completeGoal() {
            try {
                const result = yield failGoalMutation(self.id)
                if (!result) throw new Error('failGoal error')
                const { destroyGoal } = getParentOfType(self, Goals$)
                destroyGoal(self.id)
            } catch (e) {
                alert(e)
            }
        }),
    }))
