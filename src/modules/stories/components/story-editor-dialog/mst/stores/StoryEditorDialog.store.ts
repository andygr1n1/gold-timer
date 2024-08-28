import { type Instance, types } from 'mobx-state-tree'

export const StoryEditorDialog$ = types
    .model('StoryEditorDialog$', {
        open: false,
        /* storyId === edit mode */
        storyId: types.maybe(types.string),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: (typeof self)[Key]) {
            self[field] = value
        },
        onClose() {
            self.open = false
            self.storyId = undefined
        },
        onOpen(props?: { storyId?: string }) {
            self.open = true
            self.storyId = props?.storyId
        },
    }))

export interface IStoryEditorDialog$ extends Instance<typeof StoryEditorDialog$> {}
