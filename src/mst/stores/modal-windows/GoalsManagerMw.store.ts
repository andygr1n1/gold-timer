import { types } from 'mobx-state-tree'

export const GoalsManager$ = types
    .model('GoalsManager$', {
        visible: false,
        // if force mode is true
        // will be triggered closing of modal asap
        force_mode: false,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        forceClose(): void {
            if (self.force_mode) {
                this.onChangeField('visible', false)
                this.onChangeField('force_mode', false)
            }
        },
    }))
