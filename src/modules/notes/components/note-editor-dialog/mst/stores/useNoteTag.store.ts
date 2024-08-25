import { Instance, types } from 'mobx-state-tree'

export const NoteEditorDialog$ = types
    .model('NoteEditorDialog$', {
        tagInput: '',
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: (typeof self)[Key]) {
            self[field] = value
        },
    }))

export interface INoteEditorDialog$ extends Instance<typeof NoteEditorDialog$> {}
