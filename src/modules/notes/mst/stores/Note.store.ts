import { cast, getParentOfType, types } from 'mobx-state-tree'
import { Note } from '../models/Note.model'
import { Notes$ } from './Notes.store'
import { compact } from 'lodash-es'

export const Note$ = types
    .compose(
        Note,
        types.model({
            created_at: types.snapshotProcessor(types.maybe(types.Date), {
                preProcessor: (sn: Date | undefined | string) => {
                    if (!sn) {
                        return undefined
                    }
                    if (typeof sn === 'string') {
                        return new Date(sn)
                    }
                    return sn
                },
            }),
            dialog_action: types.maybe(types.union(types.literal('delete'), types.literal('create-edit'))),
            new_tag: '',
        }),
    )
    .named('Task$')
    .views((self) => ({
        get deleteMode(): boolean {
            return !!self.dialog_action && self.dialog_action === 'delete'
        },
        get creatorMode(): boolean {
            return !!self.dialog_action && self.dialog_action === 'create-edit'
        },
        get newTagIsValid(): boolean {
            const tagsOptimized = compact(self.tag.split(',').map((t) => t.trim().toLowerCase())).slice()
            return !!self.new_tag.length && !tagsOptimized.includes(self.new_tag.trim().toLowerCase())
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        selectAndSetDeleteMode(): void {
            const { selectNoteAndSetDeleteMode } = getParentOfType(self, Notes$)
            selectNoteAndSetDeleteMode(cast(self))
        },
        selectAndSetEditMode(): void {
            const { selectAndSetEditMode } = getParentOfType(self, Notes$)
            selectAndSetEditMode(cast(self))
        },
    }))
