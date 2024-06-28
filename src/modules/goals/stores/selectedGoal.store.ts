import { isDev } from '@/helpers/isUnderDevelopment.helper'
import { atom, createStore } from 'jotai'
import { atomWithImmer } from 'jotai-immer'
import { ISelectedGoal } from './types'

export const selectedGoalAtom$ = createStore()

export const selectedGoalAtom = atomWithImmer<ISelectedGoal | null>(null)
isDev() && (selectedGoalAtom.debugLabel = 'selectedGoalAtom')

export const cancelViewMode = atom(null, (get, set) => {
    set(selectedGoalAtom, () => {
        return null
    })
})
