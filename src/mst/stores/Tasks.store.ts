import { insertTask } from '@/graphql/mutations/tasks/insertTask.mutation'
import { fetchAllNotesByUserId } from '@/graphql/queries/notes/fetchNotes.query'
import { getUserId } from '@/helpers/getUserId'
import { applySnapshot, destroy, flow, types } from 'mobx-state-tree'
import { INote$SnapshotIn } from '../types'
import { Note$ } from './Note.store'
import { processError } from '@/helpers/processError.helper'

export const Notes$ = types
    .model({
        tasks: types.array(Note$),
        new_task$: types.optional(Note$, {}),
        new_task_dialog: false,
    })
    .views((self) => ({
        get notesLength(): number {
            return self.tasks.length
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        fetchNotes: flow(function* _fetchTasks() {
            try {
                const res: INote$SnapshotIn[] = yield fetchAllNotesByUserId(getUserId())
                if (!res) throw new Error('fetchTasks error')
                applySnapshot(self.tasks, res)
            } catch (e) {
                processError(e, 'fetchTasks error')
            }
        }),
        saveTask: flow(function* _saveTask() {
            try {
                const res: INote$SnapshotIn[] = yield insertTask({
                    description: self.new_task$.description,
                    tag: self.new_task$.tag,
                    user_id: getUserId(),
                })
                if (!res) throw new Error('saveTask error')
                self.tasks.push(res)
                destroy(self.new_task$)
            } catch (e) {
                processError(e, 'saveTask error')
            }
        }),
    }))
