import { upsertNote } from '@/graphql/mutations/notes/insertNote.mutation'
import { fetchAllNotesByUserId } from '@/graphql/queries/notes/fetchNotes.query'
import { getUserId } from '@/helpers/getUserId'
import { applySnapshot, cast, destroy, detach, flow, types } from 'mobx-state-tree'
import { INote$SnapshotIn } from '../types'
import { Note$ } from './Note.store'
import { processError } from '@/helpers/processError.helper'
import { NotesFilter$ } from './NotesFilter.store'
import { deleteNote } from '@/graphql/mutations/notes/deleteNote.mutation'
import { INote$ } from '@/modules/notes/mst/types'
import { compact, cloneDeep } from 'lodash-es'
import { CreateEditNote$ } from './CreateEditNote.store'

export const Notes$ = types
    .model({
        notes: types.array(Note$),
        notes_filter$: types.optional(NotesFilter$, {}),
        create_edit_note$: types.optional(CreateEditNote$, {}),
        selected_note: types.safeReference(Note$),
    })
    .views((self) => ({
        get notesLength(): number {
            return self.notes.length
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        fetchNotes: flow(function* _fetchNotes() {
            const res: INote$SnapshotIn[] = yield fetchAllNotesByUserId(getUserId())
            applySnapshot(self.notes, res)
        }),
        selectNoteAndSetDeleteMode(note: INote$): void {
            self.selected_note = note
            self.selected_note?.onChangeField('dialog_action', 'delete')
        },
        deleteNote: flow(function* _deleteNote() {
            try {
                if (!self.selected_note) return
                const res: string = yield deleteNote(self.selected_note.id)
                if (!res) throw new Error('deleteNote error')
                destroy(detach(self.selected_note))
            } catch (e) {
                processError(e, 'saveTask error')
            }
        }),
        cancelNoteCreateEditMode(): void {
            destroy(self.create_edit_note$)
        },
        activateCreateEditMode(options: { note: INote$ | null }): void {
            this.cancelNoteCreateEditMode()
            const { note } = options
            if (note) {
                self.create_edit_note$ = cast({ ...cloneDeep(note), create_edit_note_id: note.id, id: '' })
            } else {
                self.create_edit_note$.create_edit_note_id = self.create_edit_note$.id
            }
            self.create_edit_note$?.onChangeField('dialog_action', 'create-edit')
        },
    }))
    .actions((self) => ({
        saveNote: flow(function* _saveNote() {
            try {
                const res: INote$SnapshotIn[] = yield upsertNote({
                    description: self.create_edit_note$.description,
                    tag: compact(self.create_edit_note$.tag.split(','))
                        .map((t) => t.trim().toLowerCase())
                        .toString(),
                    owner_id: getUserId(),
                    id: self.create_edit_note$.create_edit_note_id,
                })

                if (!self.create_edit_note$?.created_at) {
                    // new note
                    self.notes.push(res)
                } else {
                    // update note
                    const updateNote = self.notes.find((note) => note.id === self.create_edit_note$.create_edit_note_id)
                    if (!updateNote) return
                    updateNote.onChangeField('description', self.create_edit_note$.description)
                    updateNote.onChangeField('tag', self.create_edit_note$.tag)
                }
                //
                // clear creatorStore
                self.cancelNoteCreateEditMode()
            } catch (e) {
                processError(e)
            }
        }),
    }))
