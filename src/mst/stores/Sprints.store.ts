import { types, cast, flow, toGenerator, applySnapshot } from 'mobx-state-tree'
import { SprintNew$ } from './SprintNew.store'
import { Sprint$ } from './Sprint.store'
import { ISprint$SnIn } from '../types'
import { processError } from '@/helpers/processError.helper'
import { fetchSprints } from '@/graphql/queries/sprints/fetchSprints.query'

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
            self.sprints.unshift(newSPrint)
            self.new_sprint = undefined
        },
    }))
    .actions((self) => ({
        fetchSprints: flow(function* _fetchNewSprints() {
            try {
                const res = yield* toGenerator(fetchSprints())
                if (!res) throw new Error('fetchSprints error')
                applySnapshot(self.sprints, res)
            } catch (e) {
                processError(e)
            }
        }),
    }))
