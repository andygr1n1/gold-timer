import { atom } from 'jotai'
import { atomWithImmer } from 'jotai-immer'

import { isDev } from '@/functions/isUnderDevelopment.helper'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { focusAtom } from 'jotai-optics'
import { atomWithMutation } from 'jotai-tanstack-query'
import { mutation_upsertGoal } from '../service/upsert-goal/mutation_upsertGoal'
import { getUserId } from '@/functions/universalCookie.helper'
import { IInsertNewGoal } from '@/modules/goals/interfaces/types'
import { parseISO } from 'date-fns'

import { setGoalDifficulty } from '@/functions/setGoalDifficulty'
import { cloneDeep } from 'lodash-es'
import { RITUAL_TYPE_ENUM } from '@/lib/enums'
import { convertStringToDate, setMidnightTime } from '@/functions/date.helpers'

export const editGoalAtom = atomWithImmer<IActiveGoalOptimized | undefined>(undefined)
isDev && (editGoalAtom.debugLabel = 'editGoalAtom')

// *
// optics
export const editGoalAtom_title = focusAtom(editGoalAtom, (optic) => {
    return optic.optional().prop('title') || ''
})

export const editGoalAtom_slogan = focusAtom(editGoalAtom, (optic) => {
    return optic.optional().prop('slogan') || ''
})

export const editGoalAtom_description = focusAtom(editGoalAtom, (optic) => {
    return optic.optional().prop('description') || ''
})
export const editGoalAtom_finished_at = focusAtom(editGoalAtom, (optic) => {
    return optic.optional().prop('finished_at') || ''
})

export const editGoalAtom_goal_ritual___ritual_type = focusAtom<
    IActiveGoalOptimized | undefined,
    RITUAL_TYPE_ENUM,
    void
>(editGoalAtom, (optic) => {
    const goal_ritual = optic
        .optional()
        .prop('goal_ritual')
        .when((value) => {
            return value !== null
        })
        .optional()
        .path('ritual_type')

    // as never to avoid ts error
    return goal_ritual as never
})

// *
// derived
export const goalHasTitle = atom((get) => !!get(editGoalAtom_title)?.length)
export const goalIsRitual = atom((get) => !!get(editGoalAtom)?.goal_ritual)

// *
// actions
export const onChangeGoalTitle = atom<null, [update: string], void>(null, (get, set, update) => {
    set(editGoalAtom, (store) => ({ ...store, title: update }))
})

export const upsertGoal = atomWithMutation(() => ({
    mutationKey: ['upsertGoal'],
    mutationFn: ({ editGoal }: { editGoal: IActiveGoalOptimized }) => {
        const { title, slogan, description, finished_at, id } = editGoal
        const goalData: IInsertNewGoal = {
            id,
            owner_id: getUserId(),
            title,
            slogan,
            description,
            finished_at: setMidnightTime(convertStringToDate(finished_at)),
            status: editGoal.status || 'active',
            difficulty: setGoalDifficulty(parseISO(editGoal.finished_at)),
            parent_goal_id: editGoal.parent_goal_id ?? null,
            is_favorite: !!editGoal.is_favorite,
        }
        const ritualData = editGoal.goal_ritual ? { ...editGoal.goal_ritual, goal_id: editGoal.id } : undefined
        return mutation_upsertGoal(goalData, ritualData)
    },
    onSuccess: (res) => {
        const resGoal = res?.[0]
        if (!resGoal) return
        window.queryClient.setQueryData(['useFetchGoals', 'all', 8], (oldData: IActiveGoalOptimized[]) => {
            let proxyArray = new Proxy(cloneDeep(oldData), {})
            proxyArray = proxyArray.filter((goal) => goal.id !== resGoal.id)
            proxyArray.push(resGoal)
            return proxyArray
        })
        window.queryClient.setQueryData(['useFetchGoal', resGoal.id], (oldData: IActiveGoalOptimized[]) => {
            if (!oldData) return oldData

            console.log('oldData', oldData)
            console.log('resGoal', resGoal)

            return cloneDeep({ ...oldData, ...resGoal })
        })
    },
}))

// *
// helpers
export const getImmutableFinishedAt = (goalId: string): string | undefined =>
    window.queryClient.getQueryData<unknown, string[], { finished_at: string }>(['useFetchGoal', goalId])?.finished_at

//  updateGoal: flow(function* updateGoal() {
//         try {
//             const ritualData: IInsertRitual[] = []
//             let finished_at = self.finished_at

//             if (self.goal_ritual) {
//                 if (!self.isRitualGoal) {
//                     const {
//                         user$: { onChangeField: userOnChangeField, coins, total_ritual_power },
//                     } = getParentOfType(self, Root$)

//                     const mPoints = getCoinsFromRitual(self.ritualGoalPower, coins)

//                     const resGoalCoins = yield* toGenerator(addCoinsMutation(mPoints))

//                     if (resGoalCoins === undefined) throw new Error('addMPointsMutation error')

//                     userOnChangeField('coins', resGoalCoins)
//                     userOnChangeField('total_ritual_power', total_ritual_power + 1)
//                 }

//                 const { ritual_goal_finished_at } = generateNewRitualCircle({
//                     ritual_type: self.ritualGoalType,
//                     new_ritual_interval: self.ritualGoalInterval,
//                     goal_created_at: self.created_at,
//                     goal_finished_at: self.finished_at,
//                     edit: true,
//                 })

//                 finished_at = ritual_goal_finished_at

//                 ritualData.push({
//                     goal_id: self.id,
//                     ritual_id: self.goal_ritual.ritual_id || crypto.randomUUID(),
//                     ritual_power: self.isRitualGoal
//                         ? self.goal_ritual.ritual_power
//                         : self.goal_ritual.ritual_power + 1,
//                     ritual_interval: self.goal_ritual.ritual_interval,
//                     ritual_type: self.goal_ritual.ritual_type,
//                 })
//             }
//             const goalData: IInsertNewGoal = {
// id: self.id,
// title: self.title,
// slogan: self.slogan,
// description: self.description,
// owner_id: self.owner_id,
// privacy: self.privacy,
// status: self.status,
// difficulty: self.difficulty,
// finished_at: set(finished_at, { hours: 23, minutes: 59, seconds: 59, milliseconds: 59 }),
// deleted_at: self.deleted_at,
// is_favorite: self.is_favorite,
// parent_goal_id: self.parent_goal_id,
//             }

//             const updatedGoalResponse = yield* toGenerator(mutation_upsertGoal(goalData, ritualData))
//             const updatedGoalRitualResponse = updatedGoalResponse?.insert_goals_rituals?.returning?.[0]
//             console.info('updatedGoalRitualResponse', updatedGoalRitualResponse)
//             // if (!self.selectedGoal) return
//             // self.selectedGoal.updateSelf(updatedGoalResponse?.insert_goals_one)
//             // if (updatedGoalRitualResponse) {
//             // self.onChangeField('goal_ritual', cast(updatedGoalRitualResponse))
//             // self.selectedGoal.onChangeField('goal_ritual', cast(updatedGoalRitualResponse))
//             // }
//         } catch (e) {
//             processError(e, 'updateGoal error')
//         }
//     }),
