import { Instance, types } from 'mobx-state-tree'

export const LabelDialog$ = types
    .model('LabelDialog$', {
        open: false,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: (typeof self)[Key]) {
            self[field] = value
        },
        onCancel(): void {
            self.open = false
        },
        onOpen(): void {
            self.open = true
        },
    }))

export interface ILabelDialog$ extends Instance<typeof LabelDialog$> {}
