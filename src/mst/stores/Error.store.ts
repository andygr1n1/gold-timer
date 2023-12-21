import { types } from 'mobx-state-tree'

export const Error$ = types
    .model('Error$', {
        title: '',
        description: '',
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        generateError(options: { title?: string; description: string }): void {
            const { title, description } = options

            title && (self.title = title)
            description && (self.description = description.toString())
        },
    }))
