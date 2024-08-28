import { noteStatusSchema } from '@/modules/notes/shared-services/types'
import { type Instance, types } from 'mobx-state-tree'

export const Notes$ = types
    .model('Notes$', {
        searchInput: '',
        serverSearchInput: '',
        status: types.optional(types.enumeration('NoteStatus', noteStatusSchema.options), 'active'),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: (typeof self)[Key]) {
            self[field] = value
        },
        onChangeSSI({ value }: { value: string }): void {
            self.searchInput = value
            self.serverSearchInput = value
        },
        onChangeInput({ value }: { value: string }): void {
            self.searchInput = value
        },
    }))

export interface INotes$ extends Instance<typeof Notes$> {}
