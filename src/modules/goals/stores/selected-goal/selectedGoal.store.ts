import { isDev } from '@/functions/isUnderDevelopment.helper'
import { Atom, atom, createStore } from 'jotai'
import { atomWithImmer } from 'jotai-immer'
import { cloneDeep } from 'lodash-es'
import { ISelectedGoal, ISelectedGoalState } from './types'

export const selectedGoalAtom$ = createStore()

export const selectedGoalAtom = atomWithImmer<ISelectedGoal | null>(null)
isDev && (selectedGoalAtom.debugLabel = 'selectedGoalAtom')

// derived
export const selectedGoalId = atom((get) => get(selectedGoalAtom)?.id)

export const selectedGoalState: Atom<ISelectedGoalState> = atom((get) => {
    const selectedGoal = get(selectedGoalAtom)
    // *
    // order matters
    if (!selectedGoal) return 'view'
    if (selectedGoal.is_edit && selectedGoal.is_new && selectedGoal.parent_goal_id) return 'create child'
    if (selectedGoal.is_edit && selectedGoal.is_new) return 'create'
    if (selectedGoal.is_edit && selectedGoal.is_new_ritual) return 'ritualize'
    if (selectedGoal.is_edit) return 'edit'
    return 'view'
})

export const cancelEditMode = atom(null, (get, set) => {
    set(selectedGoalAtom, (store) => {
        console.log('store', cloneDeep(store))
        if (store?.is_redirect_from_view_mode && store?.is_new && store?.parent_goal_id)
            return { id: store.parent_goal_id, is_edit: false, is_new: false }
        return store?.is_new || !store?.is_redirect_from_view_mode ? null : { ...store, is_edit: false }
    })
})

export const cancelViewMode = atom(null, (get, set) => {
    set(selectedGoalAtom, () => {
        return null
    })
})
