import { types } from 'mobx-state-tree'

export const Task = types.model('Task', {
    user_id: '',
    description: '',
    tag: '',
})
