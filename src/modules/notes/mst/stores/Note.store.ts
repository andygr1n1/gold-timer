import { flow, getParentOfType, types } from 'mobx-state-tree'
import { Note } from '../models/Note.model'
import { compact } from 'lodash-es'
import { Notes$ } from './Notes.store'
import { processError } from '@/functions/processMessage'
import { mutation_deleteNote } from '@/modules/notes/graphql/mutation_deleteNote'
import { mutation_archiveNote } from '../../graphql/mutation_archiveNote'

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
            new_tag: '',
        }),
    )
    .named('Note$')
    .views((self) => ({
        get newTagIsValid(): boolean {
            const tagsOptimized = compact(self.tag.split(',').map((t) => t.trim().toLowerCase())).slice()
            return !!self.new_tag.length && !tagsOptimized.includes(self.new_tag.trim().toLowerCase())
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        deleteTag(objToDelete: string): void {
            if (!self.noteTags.length) return
            const newTag = self.noteTags.filter((noteTag) => noteTag !== objToDelete)
            self.tag = newTag.toString()
        },
        deleteNote: flow(function* _deleteNote() {
            try {
                const toggleDelete = !!self.deleted_at
                const result = yield mutation_deleteNote(self.id, !toggleDelete)
                if (result === undefined) throw new Error('deleteNote error')
                const { notes } = getParentOfType(self, Notes$)
                const selected = notes?.find((note) => note.id === self.id)
                selected?.onChangeField('deleted_at', result)
                self.deleted_at = result
            } catch (e) {
                processError(e)
            }
        }),
        archiveNote: flow(function* _archiveNote() {
            try {
                const toggleArchive = !!self.archived
                const result = yield mutation_archiveNote(self.id, !toggleArchive)
                if (result === undefined) throw new Error('deleteNote error')
                const { notes } = getParentOfType(self, Notes$)
                const selected = notes?.find((note) => note.id === self.id)
                selected?.onChangeField('archived', result)
                self.archived = result
            } catch (e) {
                processError(e)
            }
        }),
    }))
