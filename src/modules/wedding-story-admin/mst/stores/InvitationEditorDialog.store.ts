import { type Instance, types } from 'mobx-state-tree'

export const InvitationEditorDialog = types
    .model('InvitationEditorDialog$', {
        open: false,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: (typeof self)[Key]) {
            self[field] = value
        },
        onClose() {
            self.open = false
        },
        onOpen() {
            self.open = true
        },
    }))

export interface IInvitationEditorDialog$ extends Instance<typeof InvitationEditorDialog> {}
