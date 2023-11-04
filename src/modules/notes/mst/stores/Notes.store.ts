import { query_fetchNotes } from '@/modules/notes/graphql/query_fetchNotes'
import { getUserId } from '@/functions/getUserId'
import { applySnapshot, cast, destroy, detach, flow, toGenerator, types } from 'mobx-state-tree'
import { INote$SnapshotIn } from '../types'
import { Note$ } from './Note.store'
import { processError } from '@/functions/processError.helper'
import { NotesFilter$ } from './NotesFilter.store'
import { cloneDeep } from 'lodash-es'
import { NoteEdit$ } from './NoteEdit.store'
import { NoteNew$ } from './NoteNew.store'

export const Notes$ = types
    .model({
        notes: types.array(Note$),
        notes_filter$: types.optional(NotesFilter$, {}),
        new_note: types.maybe(NoteNew$),
        widget_new_note: types.optional(NoteNew$, {}),
        edit_note: types.maybe(NoteEdit$),
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
            const res: INote$SnapshotIn[] = yield query_fetchNotes(getUserId())
            applySnapshot(self.notes, res)
        }),
        openNoteCreateMode(): void {
            self.new_note = cast({})
            self.selected_note = undefined
            self.edit_note = undefined
        },
        openNoteViewMode(id: string | undefined): void {
            if (!id) return
            const selected = self.notes.find((item) => item.id === id)
            self.selected_note = selected
            self.new_note = undefined
            self.edit_note = undefined
        },
        openNoteEditMode(id: string | undefined, redirected?: boolean): void {
            if (!id) return
            const selected = self.notes.find((item) => item.id === id)
            self.edit_note = cast({ ...cloneDeep(selected), redirected })
            self.selected_note = undefined
        },
    }))
    .actions((self) => ({
        createNewNote: flow(function* _createNewNote() {
            if (!self.new_note) return
            const { createNewNote } = self.new_note

            try {
                const res = yield* toGenerator(createNewNote())
                res && self.notes.push(res)

                self.new_note = undefined
            } catch (e) {
                processError(e, 'createNewNote error')
            }
        }),
        createWidgetNewNote: flow(function* _createWidgetNewNote() {
            const { createNewNote } = self.widget_new_note

            try {
                const res = yield* toGenerator(createNewNote())
                res && self.notes.push(res)

                const destroyNote = detach(self.widget_new_note)
                const timeoutId = setTimeout(() => {
                    destroy(destroyNote)
                    clearTimeout(timeoutId)
                }, 500)
            } catch (e) {
                processError(e, 'createWidgetNewNote error')
            }
        }),
        updateNote: flow(function* _updateNote() {
            if (!self.edit_note) return
            const { updateNote, redirected, id } = self.edit_note

            try {
                yield updateNote()
                redirected && self.openNoteViewMode(id)
                self.edit_note = undefined
            } catch (e) {
                processError(e, 'updateNote error')
            }
        }),
    }))
