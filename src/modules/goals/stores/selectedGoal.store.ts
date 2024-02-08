import { isDev } from '@/functions/isUnderDevelopment.helper'
import { formatISO } from 'date-fns'
import { Atom, atom, createStore } from 'jotai'
import { atomWithImmer } from 'jotai-immer'
import { goal_status_enum_enum } from '@/graphql/generated'

//*
// is_redirect_from_view_mode to understand if edit was clicked from view mode
export type ISelectedGoal = {
    id: string
    is_edit: boolean
    is_new: boolean
    is_redirect_from_view_mode?: boolean
    parent_goal_id?: string
    is_new_ritual?: boolean
}
export type IGoalsFilter = 'active'
export type ISelectedGoalState = 'view' | 'edit' | 'create' | 'create child goal' | 'ritualize'
//
//

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
    if (selectedGoal.is_edit && selectedGoal.is_new && selectedGoal.parent_goal_id) return 'create child goal'
    if (selectedGoal.is_edit && selectedGoal.is_new) return 'create'
    if (selectedGoal.is_edit && selectedGoal.is_new_ritual) return 'ritualize'
    if (selectedGoal.is_edit) return 'edit'
    return 'view'
})

// actions
export const selectGoalId = atom<null, [update: { id: string; is_edit: boolean; is_new: boolean }], void>(
    null,
    (get, set, update) => {
        set(selectedGoalAtom, { ...update })
    },
)
export const cancelEditMode = atom(null, (get, set) => {
    set(selectedGoalAtom, (store) => {
        return store?.is_new || !store?.is_redirect_from_view_mode ? null : { ...store, is_edit: false }
    })
})

export const cancelViewMode = atom(null, (get, set) => {
    set(selectedGoalAtom, () => {
        return null
    })
})

// export const ritualizeGoal = atomWithMutation(() => ({
//     mutationKey: ['ritualizeGoal'],
//     mutationFn: ({ goal }: { goal: IActiveGoalOptimized }) => {
//         console.log('editGoal', cloneDeep(goal))
//         return mutation_goalStatus(goal, 'completed')
//     },
//     onSuccess: (res) => {
//         if (!res) return
//         window.queryClient.setQueryData(['useFetchGoals', 'all', 8], (oldData: IActiveGoalOptimized[]) => {
//             const proxyArray = new Proxy(
//                 cloneDeep(oldData).map((g) => new Proxy(g, {})),
//                 {},
//             )
//             const selected = proxyArray.find((goal) => goal.id === res?.id)
//             if (selected) {
//                 selected.status = res.status
//             }
//             return proxyArray
//         })
//     },
// }))

// predefinedData

export const newGoalTemplate = (id: string, parent_goal_id?: string) => ({
    id: id,
    title: '',
    description: '',
    slogan: '',
    parent_goal_id,
    finished_at: formatISO(new Date(Date.now())),
    created_at: formatISO(new Date(Date.now())),
    status: 'active' as goal_status_enum_enum,
})
