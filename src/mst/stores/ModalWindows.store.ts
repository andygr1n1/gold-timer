import { types } from 'mobx-state-tree'
import { GoalsManager$ } from './modal-windows/GoalsManagerMw.store'

export const ModalWindows$ = types.model('ModalsWindows$', {
    goals_manager_mw$: types.optional(GoalsManager$, {}),
})
