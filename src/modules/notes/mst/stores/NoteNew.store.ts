import { flow } from 'mobx-state-tree'
import { Note$ } from './Note.store'
import { INote$SnapshotIn } from '../types'
import { upsertNote } from '@/modules/notes/graphql/mutation_insertNote'
import { compact } from 'lodash-es'

import { processError } from '@/helpers/processMessage'
import { getUserId } from '@/helpers/getUserId'
import { rootStore$ } from '@/modules/app/mst/StoreProvider'

export const NoteNew$ = Note$.named('NoteNew$').actions((self) => ({
    onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
        self[key] = value
    },
    createNewNote: flow(function* _createNewNote() {
        try {
            if (!self.tag.length) {
                self.onChangeField('tag', self.new_tag)
            }

            rootStore$.onChangeField('loading', true)
            const res: INote$SnapshotIn[] = yield upsertNote({
                description: self.description,
                tag: compact(self.tag.split(','))
                    .map((t) => t.trim().toLowerCase())
                    .toString(),
                owner_id: getUserId(),
            })
            rootStore$.onChangeField('loading', false)

            return res
        } catch (e) {
            processError(e)
        }
    }),
}))
