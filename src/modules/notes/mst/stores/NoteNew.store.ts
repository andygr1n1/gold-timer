import { flow } from 'mobx-state-tree'
import { Note$ } from './Note.store'
import { INote$SnapshotIn } from '../types'
import { upsertNote } from '@/modules/notes/graphql/mutation_insertNote'
import { compact } from 'lodash-es'
import { getOwnerId } from '@/functions/getUserId'
import { processError } from '@/functions/processMessage'

export const NoteNew$ = Note$.named('NoteNew$').actions((self) => ({
    onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
        self[key] = value
    },
    createNewNote: flow(function* _createNewNote() {
        try {
            if (!self.tag.length) {
                self.onChangeField('tag', self.new_tag)
            }

            const res: INote$SnapshotIn[] = yield upsertNote({
                description: self.description,
                tag: compact(self.tag.split(','))
                    .map((t) => t.trim().toLowerCase())
                    .toString(),
                owner_id: getOwnerId(),
            })

            return res
        } catch (e) {
            processError(e)
        }
    }),
}))
