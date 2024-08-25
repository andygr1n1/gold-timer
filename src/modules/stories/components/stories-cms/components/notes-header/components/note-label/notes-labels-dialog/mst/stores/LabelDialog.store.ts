import { Instance, types } from 'mobx-state-tree'

export const LabelDialog$ = types
    .model('LabelDialog$', {
        open: false,
        selectedLabel: types.maybeNull(types.string),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: (typeof self)[Key]) {
            self[field] = value
        },
        onCancel(): void {
            self.open = false
            self.selectedLabel = null
        },
        onOpen(): void {
            self.open = true
        },
        toggleEdit({ id }: { id: string }): void {
            if (self.selectedLabel === id) {
                self.selectedLabel = null
            } else if (self.selectedLabel !== id) {
                self.selectedLabel = id
            }
        },
    }))

export interface ILabelDialog$ extends Instance<typeof LabelDialog$> {}
