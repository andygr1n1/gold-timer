import { types, cast } from 'mobx-state-tree'
import { SprintNew$ } from './SprintNew.store'
import { Sprint$ } from './Sprint.store'
import { ISprint$SnIn } from '../types'

export const Sprints$ = types
    .model('Sprints$', {
        new_sprint: types.maybe(SprintNew$),
        sprints: types.array(Sprint$),
    })

    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        activateNewSprintCreator(): void {
            self.new_sprint = cast({ title: '', sprints_goals: [{ title: '', id: '' }] })
        },
        pushNewSprint(newSPrint: ISprint$SnIn): void {
            self.sprints.push(newSPrint)
            self.new_sprint = undefined
        },
    }))
