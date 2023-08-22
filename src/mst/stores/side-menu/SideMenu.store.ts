import { types } from 'mobx-state-tree'
import { SideMenuSprints$ } from './SideMenuSprints.store'

export const SideMenu$ = types.model('SideMenu$', {
    sprints_side_menu: types.optional(SideMenuSprints$, {}),
})
