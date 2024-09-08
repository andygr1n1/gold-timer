import { type Instance, types } from 'mobx-state-tree'

export const AchEditorDialog$ = types
    .model('AchEditorDialog$', {
        open: false,
        /* storyId === edit mode */
        edit_id: types.maybe(types.string),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: (typeof self)[Key]) {
            self[field] = value
        },
        onClose() {
            self.open = false
            self.edit_id = undefined
        },
        onOpen(props?: { edit_id?: string }) {
            self.open = true
            self.edit_id = props?.edit_id
        },
        onOpenEditMode(props?: { edit_id?: string }) {
            self.open = true
            self.edit_id = props?.edit_id
        },
    }))

export interface IAchEditorDialog$ extends Instance<typeof AchEditorDialog$> {}
