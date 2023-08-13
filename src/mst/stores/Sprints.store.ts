import { types, cast, flow, toGenerator, applySnapshot, destroy, detach } from 'mobx-state-tree'
import { SprintNew$ } from './SprintNew.store'
import { Sprint$ } from './Sprint.store'
import { ISprint$, ISprint$SnIn } from '../types'
import { processError } from '@/helpers/processError.helper'
import { fetchSprints } from '@/graphql/queries/sprints/fetchSprints.query'
import { IInsertNewSprint, insertNewSprint } from '@/graphql/mutations/sprints/insertNewSprint.mutation'
import { add, set } from 'date-fns'
import { deletedAtSprint } from '@/graphql/mutations/sprints/deletedAtSprint.mutation'

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
        restartSelectedSprint: flow(function* _createNewInstance(sprint: ISprint$) {
            try {
                const successPointsArray: number[] = Array(sprint.duration).fill(0)
                const startedAt = add(set(new Date(Date.now()), { hours: 1, minutes: 1, seconds: 1 }), { days: 1 })
                const sprints_days = successPointsArray.map((_, index) => ({
                    date: add(startedAt, { days: index }),
                    status: null,
                }))

                const newSprint: IInsertNewSprint = {
                    title: sprint.title,
                    description: sprint.description,
                    duration: sprint.duration,
                    img_path: sprint.img_path,
                    achievement: sprint.achievement,
                    started_at: startedAt,
                    sprints_days: { data: sprints_days },
                    owner_id: sprint.owner_id,
                    parent_sprint_id: sprint.parent_sprint_id || sprint.id,
                }

                const createdSprint = yield* toGenerator(insertNewSprint(newSprint))
                if (!createdSprint) throw new Error('createNewSprintInstance: creating sprint failed')

                const deletedParent = yield* toGenerator(deletedAtSprint(sprint.id))
                if (!deletedParent) throw new Error('createNewSprintInstance: deleting parent sprint failed')

                deletedParent && destroy(detach(sprint))
                console.log('createdSprint', createdSprint)
                self.pushNewSprint(createdSprint)
            } catch (e) {
                processError(e)
            }
        }),
        deleteSelectedSprint: flow(function* _deleteSelectedSprint(sprint: ISprint$) {
            const deletedSprint = yield* toGenerator(deletedAtSprint(sprint.id))
            deletedSprint && destroy(detach(sprint))
        }),
    }))
    .views((self) => ({
        get sprintsRender(): ISprint$[] {
            const activeNotChecked: ISprint$[] = []
            const freezed: ISprint$[] = []
            const sprints: ISprint$[] = []
            self.sprints.forEach((sprint) => {
                if (sprint.isStatusActive && !sprint.todayIsChecked) {
                    activeNotChecked.push(sprint)
                } else if (sprint.isStatusFreezed) {
                    freezed.push(sprint)
                } else {
                    sprints.push(sprint)
                }
            })
            return [...activeNotChecked, ...freezed, ...sprints]
        },
    }))
