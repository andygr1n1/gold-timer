import { cast, flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { Goal$ } from './Goal.store'
import { processError } from '@/functions/processError.helper'
import { generateNewRitualCircle } from '@/functions/generateNewRitualCircle'
import { set } from 'date-fns'
import { mutation_upsertGoal } from '@/modules/goals/graphql/mutation_upsertGoal'
import { Goals$ } from './Goals.store'
import { IGoal$ } from '../types'
import { IInsertNewGoal, IInsertRitual } from '@/modules/goals/interfaces/newGoal.interface'
import { Root$ } from '@/mst/stores/Root.store'
import { getCoinsFromRitual } from '@/functions/getCoinsFromRitual'
import { addCoinsMutation } from '@/graphql/mutations/addCoins.mutation'

export const GoalEdit$ = types
    .compose(
        Goal$,
        types.model({
            redirected: false,
        }),
    )
    .named('GoalEdit$')
    .views((self) => ({
        get goalDataValidator(): boolean {
            return !!self.title.length && !!self.finished_at
        },
        get selectedGoal(): IGoal$ | undefined {
            return getParentOfType(self, Goals$)?.goals.find((goal) => goal.id === self.id)
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        updateGoal: flow(function* updateGoal() {
            try {
                if (!self.created_at || !self.finished_at) return
                let ritualData: IInsertRitual[] = []
                let finished_at = self.finished_at

                if (self.goal_ritual) {
                    if (!self.hasRitualPower) {
                        const {
                            user$: { onChangeField: userOnChangeField, coins, total_ritual_power },
                        } = getParentOfType(self, Root$)

                        const mPoints = getCoinsFromRitual(self.ritualGoalPower, coins)

                        const resGoalCoins = yield* toGenerator(addCoinsMutation(mPoints))

                        if (resGoalCoins === undefined) throw new Error('addMPointsMutation error')

                        userOnChangeField('coins', resGoalCoins)
                        userOnChangeField('total_ritual_power', total_ritual_power + 1)
                    }

                    const { ritual_goal_finished_at } = generateNewRitualCircle({
                        ritual_type: self.ritualGoalType,
                        new_ritual_interval: self.ritualGoalInterval,
                        goal_created_at: self.created_at,
                        goal_finished_at: self.finished_at,
                        edit: true,
                    })

                    finished_at = ritual_goal_finished_at

                    ritualData.push({
                        goal_id: self.id,
                        ritual_id: self.goal_ritual.ritual_id || crypto.randomUUID(),
                        ritual_power: self.hasRitualPower
                            ? self.goal_ritual.ritual_power
                            : self.goal_ritual.ritual_power + 1,
                        ritual_interval: self.goal_ritual.ritual_interval,
                        ritual_type: self.goal_ritual.ritual_type,
                    })
                }
                const goalData: IInsertNewGoal = {
                    id: self.id,
                    title: self.title,
                    slogan: self.slogan,
                    description: self.description,
                    owner_id: self.owner_id,
                    privacy: self.privacy,
                    status: self.status,
                    difficulty: self.difficulty,
                    finished_at: set(finished_at, { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 }),
                    deleted_at: self.deleted_at,
                    is_favorite: self.is_favorite,
                    parent_goal_id: self.parent_goal_id,
                }

                const updatedGoalResponse = yield* toGenerator(mutation_upsertGoal(goalData, ritualData))
                const updatedGoalRitualResponse = updatedGoalResponse?.insert_goals_rituals?.returning?.[0]
                if (!self.selectedGoal) return
                console.log('updatedGoalResponse', updatedGoalResponse)
                self.selectedGoal.updateSelf(updatedGoalResponse?.insert_goals_one)
                if (updatedGoalRitualResponse) {
                    self.onChangeField('goal_ritual', cast(updatedGoalRitualResponse))
                    self.selectedGoal.onChangeField('goal_ritual', cast(updatedGoalRitualResponse))
                }
            } catch (e) {
                processError(e, 'updateGoal error')
            }
        }),
    }))
