import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { types } from 'mobx-state-tree'

export const SideMenu$ = types
    .model('SideMenu$', {
        visible: false,
        state: types.optional(types.enumeration(Object.values(APP_ROUTES_ENUM)), APP_ROUTES_ENUM.DASHBOARD),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
