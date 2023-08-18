import { types, cast, flow, toGenerator, applySnapshot, destroy, detach } from 'mobx-state-tree'
import { SprintNew$ } from './SprintNew.store'
import { Sprint$ } from './Sprint.store'
import { ISprint$, ISprint$SnIn, ISprintNew$ } from '../types'
import { processError } from '@/helpers/processError.helper'
import { fetchSprints } from '@/graphql/queries/sprints/fetchSprints.query'
import { insertNewSprint } from '@/graphql/mutations/sprints/insertNewSprint.mutation'
import { add, set } from 'date-fns'
import { deletedAtSprint } from '@/graphql/mutations/sprints/deletedAtSprint.mutation'
import { cloneDeep, orderBy } from 'lodash-es'
import { IInsertNewSprint } from '@/graphql/mutations/sprints/helpers/interface'
import { SprintsFilter$ } from './SprintsFilter.store'
import { filterSprintByInput } from './sprints.helper'
import { SPRINT_STATUS_ENUM, SPRINT_FILTER_STATUS_TYPE } from '@/modules/sprints/helpers/sprints.enum'

export const Sprints$ = types
    .model('Sprints$', {
        new_sprint: types.maybe(SprintNew$),
        sprints: types.array(Sprint$),
        selected_sprint: types.safeReference(Sprint$),
        sprints_filter$: types.optional(SprintsFilter$, {}),
    })

    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        activateNewSprintCreator(): void {
            self.new_sprint = cast({ title: '', sprints_goals: [{ title: '', id: '' }] })
        },
        activateEditSprintCreator(sprint: ISprint$): void {
            const convertedSprint: ISprintNew$ = cloneDeep(sprint) as ISprintNew$
            self.new_sprint = convertedSprint
            self.new_sprint.onChangeField('edit_mode', true)
            sprint.img_path &&
                self.new_sprint.onChangeField(
                    'img_cropped_src',
                    `${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/sprints/${convertedSprint.img_path}`,
                )
            !self.new_sprint.sprints_goals.length && self.new_sprint.addNewSprintGoal()
        },
        selectSprintAndActivateMenuAction(sprint: ISprint$, menuAction: 'restart' | 'delete'): void {
            self.selected_sprint = sprint
            self.selected_sprint.onChangeField('menu_action', menuAction)
        },
        pushNewSprint(newSprint: ISprint$SnIn, editMode?: boolean): void {
            if (editMode) {
                const editedSprint = self.sprints.find((sprint) => sprint.id === newSprint.id)
                editedSprint && destroy(detach(editedSprint))
            }
            self.sprints.unshift(newSprint)
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
        get sprintsStatusRender() {
            const sprintsFilterStatuses: SPRINT_FILTER_STATUS_TYPE[] = [
                'all',
                'active',
                'completed',
                'finished',
                'future',
                'freezed',
                'checked',
            ]
            return sprintsFilterStatuses
        },
        get activeSprintsRender(): ISprint$[] {
            return orderBy(
                self.sprints.filter(
                    (sprint) =>
                        sprint.isStatusActive &&
                        !sprint.todayIsChecked &&
                        filterSprintByInput(sprint, self.sprints_filter$.sprints_input_filter),
                ),
                'started_at',
            )
        },
        get checkedSprintsRender(): ISprint$[] {
            return orderBy(
                self.sprints.filter(
                    (sprint) =>
                        sprint.todayIsChecked && filterSprintByInput(sprint, self.sprints_filter$.sprints_input_filter),
                ),
                'started_at',
            )
        },
        get freezedSprintsRender(): ISprint$[] {
            return orderBy(
                self.sprints.filter(
                    (sprint) =>
                        sprint.isStatusFreezed &&
                        filterSprintByInput(sprint, self.sprints_filter$.sprints_input_filter),
                ),
                'started_at',
            )
        },
        get futureSprintsRender(): ISprint$[] {
            return orderBy(
                self.sprints.filter(
                    (sprint) =>
                        sprint.isStatusFuture && filterSprintByInput(sprint, self.sprints_filter$.sprints_input_filter),
                ),
                'started_at',
            )
        },
        get completedSprintsRender(): ISprint$[] {
            return orderBy(
                self.sprints.filter(
                    (sprint) =>
                        sprint.isStatusCompleted &&
                        filterSprintByInput(sprint, self.sprints_filter$.sprints_input_filter),
                ),
                'started_at',
            )
        },
    }))
