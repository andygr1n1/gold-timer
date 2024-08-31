import { type Instance, types } from 'mobx-state-tree'

export const StoryMaker$ = types
    .model('StoryMaker$', {
        editSelectedMessageId: types.maybe(types.string),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: (typeof self)[Key]) {
            self[field] = value
        },
    }))

export interface IStoryMaker$ extends Instance<typeof StoryMaker$> {}
