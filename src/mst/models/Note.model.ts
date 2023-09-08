import { types } from 'mobx-state-tree'

export const Note = types.model('Note', {
    user_id: '',
    description: '',
    tag: '',
})
