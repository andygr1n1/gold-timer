import { isDev } from '@/functions/isUnderDevelopment.helper'
import { atomWithImmer } from 'jotai-immer'
import { focusAtom } from 'jotai-optics'

interface IFilterGoal {
    search: string
}

export const filterGoalAtom = atomWithImmer<IFilterGoal>({ search: '' })
isDev() && (filterGoalAtom.debugLabel = 'filterGoalAtom')

export const filterGoalAtom_search = focusAtom(filterGoalAtom, (optic) => {
    return optic.optional().prop('search') || ''
})
