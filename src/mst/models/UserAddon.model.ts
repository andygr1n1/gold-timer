import { ADDONS_ENUM } from '@/helpers/enums'
import { types } from 'mobx-state-tree'

export const UserAddon = types
    .model('UserAddon', {
        addon: '',
    })
    .views((self) => ({
        get isGoalsOfWeek(): boolean {
            return self.addon === ADDONS_ENUM.GOALS_OF_WEEK
        },
    }))
