import { upsertNote } from '@/graphql/mutations/notes/insertNote.mutation'
import { fetchAllNotesByUserId } from '@/graphql/queries/notes/fetchNotes.query'
import { getUserId } from '@/helpers/getUserId'
import { applySnapshot, destroy, detach, flow, types } from 'mobx-state-tree'
import { INote$SnapshotIn } from '../types'
import { Note$ } from './Note.store'
import { processError } from '@/helpers/processError.helper'
import { NotesFilter$ } from './NotesFilter.store'
import { deleteNote } from '@/graphql/mutations/notes/deleteNote.mutation'
import { INote$ } from '@/modules/notes/mst/types'
import { compact } from 'lodash-es'

export const Notes$ = types
    .model({
        notes: types.array(Note$),
        notes_filter$: types.optional(NotesFilter$, {}),
        new_note$: types.optional(Note$, {}),
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
        activateCreateMode(): void {
            self.selected_note = self.new_note$
            self.selected_note?.onChangeField('dialog_action', 'create-edit')
        },
        selectAndSetEditMode(note: INote$): void {
            self.selected_note = note
            self.selected_note?.onChangeField('dialog_action', 'create-edit')
        },
        cancelNoteCreateEditMode(): void {
            self.selected_note = undefined
            destroy(self.new_note$)
        },
        selectNoteAndSetDeleteMode(note: INote$): void {
            self.selected_note = note
            self.selected_note?.onChangeField('dialog_action', 'delete')
        },

        fetchNotes: flow(function* _fetchTasks() {
            try {
                const res: INote$SnapshotIn[] = yield fetchAllNotesByUserId(getUserId())
                if (!res) throw new Error('fetchTasks error')
                applySnapshot(self.notes, res)
            } catch (e) {
                processError(e, 'fetchTasks error')
            }
        }),

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
    }))
    .actions((self) => ({
        saveNote: flow(function* _saveNote() {
            try {
                if (!self.selected_note) return
                const res: INote$SnapshotIn[] = yield upsertNote({
                    description: self.selected_note.description,
                    tag: compact(self.selected_note.tag.split(','))
                        .map((t) => t.trim().toLowerCase())
                        .toString(),
                    user_id: getUserId(),
                    id: self.selected_note.id,
                })
                if (!res) throw new Error('saveNote error')
                // new note
                !self.selected_note?.created_at && self.notes.push(res)
                //
                self.cancelNoteCreateEditMode()
            } catch (e) {
                processError(e)
            }
        }),
    }))
