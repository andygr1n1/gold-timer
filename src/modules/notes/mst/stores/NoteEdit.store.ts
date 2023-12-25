import { flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { Note$ } from './Note.store'
import { INote$ } from '../types'
import { upsertNote } from '@/modules/notes/graphql/mutation_insertNote'
import { compact } from 'lodash-es'
import { getOwnerId } from '@/functions/getUserId'
import { processError } from '@/functions/processMessage'
import { Notes$ } from './Notes.store'

export const NoteEdit$ = types
    .compose(
        Note$,
        types.model({
            redirected: false,
        }),
    )
    .named('NoteEdit$')
    .views((self) => ({
        get selectedNote(): INote$ | undefined {
            return getParentOfType(self, Notes$)?.notes.find((note) => note.id === self.id)
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        updateNote: flow(function* _editNewNote() {
            try {
                if (!self.tag.length) {
                    self.onChangeField('tag', self.new_tag)
                }
                const res = yield* toGenerator(
                    upsertNote({
                        description: self.description,
                        tag: compact(self.tag.split(','))
                            .map((t) => t.trim().toLowerCase())
                            .toString(),
                        owner_id: getOwnerId(),
                        id: self.id,
                    }),
                )

                if (!self.selectedNote || !res) return
                self.selectedNote.onChangeField('description', res.description)
                self.selectedNote.onChangeField('tag', res.tag)
            } catch (e) {
                processError(e)
            }
        }),
    }))
