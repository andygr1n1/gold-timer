import { insertTask } from '@/graphql/mutations/tasks/insertTask.mutation'
import { fetchTasks } from '@/graphql/queries/tasks/fetchTasks.query'
import { getUserId } from '@/helpers/getUserId'
import { applySnapshot, destroy, flow, types } from 'mobx-state-tree'
import { ITask$SnapshotIn } from '../types'
import { Task$ } from './Task.store'

export const Tasks$ = types
    .model({
        tasks: types.array(Task$),
        new_task$: types.optional(Task$, {}),
    })
    .views(() => ({}))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        fetchTasks: flow(function* _fetchTasks() {
            try {
                const res: ITask$SnapshotIn[] = yield fetchTasks(getUserId())
                if (!res) throw new Error('fetchTasks error')
                applySnapshot(self.tasks, res)
            } catch (e) {
                console.error('fetchTasks error', e)
                alert(e)
            }
        }),
        saveTask: flow(function* _saveTask() {
            try {
                const res: ITask$SnapshotIn[] = yield insertTask({
                    description: self.new_task$.description,
                    tag: self.new_task$.tag,
                    user_id: getUserId(),
                })
                if (!res) throw new Error('saveTask error')
                self.tasks.push(res)
                destroy(self.new_task$)
            } catch (e) {
                console.error('saveTask error', e)
                alert(e)
            }
        }),
    }))
