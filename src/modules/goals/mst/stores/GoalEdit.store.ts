import { castToSnapshot, flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { Goal$ } from './Goal.store'
import { getUserId } from '@/helpers/getUserId'
import { processError } from '@/helpers/processError.helper'
import { generateNewRitualCircle } from '@/helpers/ritual-circle/generateNewRitualCircle'
import { set } from 'date-fns'
import { upsertGoalMutation } from '@/graphql/mutations/upsertGoal.mutation'
import { Goals$ } from './Goals.store'
import { IGoal$ } from '../types'
import { IInsertRitual } from '@/helpers/interfaces/newGoal.interface'
import { upsertGoalsRituals } from '@/graphql/mutations/upsertGoalsRituals.mutation'
import { Root$ } from '@/mst/stores/Root.store'
import { getCoinsFromRitual } from '@/helpers/getCoinsFromRitual'
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
            const user_id = getUserId()
            if (!user_id) return

            try {
                if (!self.created_at || !self.finished_at) return

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

                    const ritualData: IInsertRitual = {
                        goal_id: self.id,
                        ritual_id: self.goal_ritual.ritual_id || crypto.randomUUID(),
                        ritual_power: self.goal_ritual.ritual_power + 1,
                        ritual_interval: self.goal_ritual.ritual_interval,
                        ritual_type: self.goal_ritual.ritual_type,
                    }

                    const insertRitualGoalId = yield* toGenerator(upsertGoalsRituals(ritualData))

                    if (!insertRitualGoalId) throw new Error('insertGoalsRitualsRes error')
                }
                const goalData = {
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
                }

                const updatedGoalResponse = yield* toGenerator(upsertGoalMutation(goalData))

                if (!updatedGoalResponse) throw new Error('failed to update goal data')

                if (!self.selectedGoal) return
                self.selectedGoal.onChangeField('title', updatedGoalResponse.title)
                self.selectedGoal.onChangeField('slogan', updatedGoalResponse.slogan)
                self.selectedGoal.onChangeField('description', updatedGoalResponse.description)
                self.selectedGoal.onChangeField('privacy', updatedGoalResponse.privacy)
                self.selectedGoal.onChangeField('status', updatedGoalResponse.status)
                self.selectedGoal.onChangeField('finished_at', updatedGoalResponse.finished_at)
                updatedGoalResponse.goal_ritual &&
                    self.selectedGoal.onChangeField('goal_ritual', castToSnapshot(updatedGoalResponse.goal_ritual))
                self.selectedGoal.onChangeField('deleted_at', updatedGoalResponse.deleted_at)
                self.selectedGoal.onChangeField('is_favorite', updatedGoalResponse.is_favorite)
            } catch (e) {
                processError(e, 'updateGoal error')
            }
        }),
    }))
