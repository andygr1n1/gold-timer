import { types } from 'mobx-state-tree'
import { Note$ } from './Note.store'

export const CreateEditNote$ = types
    .compose(
        Note$,
        types.model({
            create_edit_note_id: types.maybe(types.string),
        }),
    )
    .views((self) => ({
        get isOpen(): boolean {
            return !!self.create_edit_note_id
        },
        get saveEnabled(): boolean {
            return !!self.description.length
        },
    }))
