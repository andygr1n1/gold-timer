import { artifactStatusSchema } from '@/services/types'
import { type Instance, types } from 'mobx-state-tree'

export const Stories$ = types
    .model('Stories$', {
        searchInput: '',
        serverSearchInput: '',
        status: types.optional(types.enumeration('ArtifactStatus', artifactStatusSchema.options), 'active'),
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

export interface IStories$ extends Instance<typeof Stories$> {}
