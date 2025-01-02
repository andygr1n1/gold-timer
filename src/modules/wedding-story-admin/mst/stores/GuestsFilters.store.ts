import { type Instance, types } from 'mobx-state-tree'

export const GuestsFilters$ = types
    .model('GuestsFilters$', {
        textValue: '',
        registered: false,
        notRegistered: false,
        checkedIn: false,
        notCheckedIn: false,
        hidden: false,
        visible: false,
        tablesView: false,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: (typeof self)[Key]) {
            self[field] = value
        },
    }))

export interface IGuestsFilters$ extends Instance<typeof GuestsFilters$> {}
