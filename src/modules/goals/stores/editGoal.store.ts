import { atom } from 'jotai'
import { atomWithImmer } from 'jotai-immer'

import { isDev } from '@/functions/isUnderDevelopment.helper'
import { IGoal } from '@/modules/goals/service/types'
import { focusAtom } from 'jotai-optics'

import { RITUAL_TYPE_ENUM } from '@/helpers/globalEnums'
import { formatISO } from 'date-fns'

import { KEY_FetchGoalById } from '../service/keys'

export const editGoalAtom = atomWithImmer<IGoal | undefined>(undefined)
isDev() && (editGoalAtom.debugLabel = 'editGoalAtom')

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

export const editGoalAtom_is_favorite = focusAtom(editGoalAtom, (optic) => {
    return optic.optional().prop('is_favorite') || ''
})

export const editGoalAtom_goal_ritual___ritual_type = focusAtom<IGoal | undefined, RITUAL_TYPE_ENUM, void>(
    editGoalAtom,
    (optic) => {
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
    },
)

// *
// derived
export const goalHasTitle = atom((get) => !!get(editGoalAtom_title)?.length)
export const goalIsRitual = atom((get) => !!get(editGoalAtom)?.goal_ritual)

// *
// actions
export const onChangeGoalTitle = atom<null, [update: string], void>(null, (get, set, update) => {
    set(editGoalAtom, (store) => ({ ...store, title: update }))
})

// *
// helpers
export const getImmutableFinishedAt = (goalId: string): string | undefined =>
    window.queryClient.getQueryData<unknown, string[], { finished_at: string }>(KEY_FetchGoalById(goalId))?.finished_at

export const newGoalTemplate = (id: string, parent_goal_id?: string) => ({
    id: id,
    title: '',
    description: '',
    slogan: '',
    parent_goal_id,
    finished_at: formatISO(new Date(Date.now())),
    created_at: formatISO(new Date(Date.now())),
    status: 'active',
})
