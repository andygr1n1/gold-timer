import { types, flow, toGenerator, applySnapshot, destroy, detach, castToSnapshot } from 'mobx-state-tree'
import { SprintNew$ } from './SprintNew.store'
import { Sprint$ } from './Sprint.store'
import { ISprint$, ISprint$SnIn, ISprintNew$ } from '../types'
import { processError } from '@/helpers/processMessage'
import { query_fetchSprints } from '@/modules/sprints/graphql/query_fetchSprints'
import { add, set } from 'date-fns'
import { cloneDeep, last, orderBy } from 'lodash-es'
import { IInsertNewSprint } from '@/modules/sprints/graphql/helpers/interface'
import { SprintsFilter$ } from './SprintsFilter.store'
import { filterSprintByInput } from './sprints.helper'
import { SPRINT_FILTER_STATUS_ENUM } from '@/modules/sprints/helpers/sprints.enum'
import { mutation_toggleDeleteSprint } from '@/modules/sprints/graphql/mutation_toggleDeleteSprint'
import { mutation_insertNewSprint } from '@/modules/sprints/graphql/mutation_insertNewSprint'
import { mutation_cachedSprint } from '../../graphql/mutation_cachedSprint'

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
        openSprintCreateMode(): void {
            self.new_sprint = castToSnapshot({ title: '', id: '' })
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
            const res = yield* toGenerator(query_fetchSprints())
            applySnapshot(self.sprints, res)
        }),
        restartSelectedSprint: flow(function* _createNewInstance(sprint: ISprint$) {
            try {
                const successPointsArray: number[] = Array(sprint.duration).fill(0)
                const startedAt = add(set(new Date(Date.now()), { hours: 1, minutes: 1, seconds: 1 }), { days: 1 })
                const sprint_days = successPointsArray.map((_, index) => ({
                    id: crypto.randomUUID(),
                    date: add(startedAt, { days: index }),
                    status: null,
                }))

                const finished_at = last(sprint_days)?.date || null

                const newSprint: IInsertNewSprint = {
                    title: sprint.title,
                    description: sprint.description,
                    duration: sprint.duration,
                    img_path: sprint.img_path,
                    achievement: sprint.achievement,
                    started_at: startedAt,
                    finished_at,
                    sprint_days,
                    sprint_goals: sprint.sprint_goals,
                    owner_id: sprint.owner_id,
                    parent_sprint_id: sprint.parent_sprint_id || sprint.id,
                }

                const createdSprint = yield* toGenerator(mutation_insertNewSprint(newSprint))
                if (!createdSprint) throw new Error('createNewSprintInstance: creating sprint failed')
                const cachedSprint = yield* toGenerator(mutation_cachedSprint(sprint.id))
                if (!cachedSprint) throw new Error('createNewSprintInstance: deleting parent sprint failed')
                cachedSprint && destroy(detach(sprint))
                self.pushNewSprint(createdSprint)
            } catch (e) {
                processError(e)
            }
        }),
        deleteSelectedSprint: flow(function* _deleteSelectedSprint(sprint: ISprint$) {
            const deletedSprintDate = yield* toGenerator(
                mutation_toggleDeleteSprint(sprint.parent_sprint_id ? sprint.parent_sprint_id : sprint.id, true),
            )
            if (deletedSprintDate !== undefined) sprint.onChangeField('deleted_at', deletedSprintDate)
            self.selected_sprint = undefined
        }),
    }))
    .views((self) => ({
        get sprintsStatusRender() {
            return Object.values(SPRINT_FILTER_STATUS_ENUM)
        },
        get filteredSprints(): ISprint$[] {
            let filtered: ISprint$[] = self.sprints
            if (self.sprints_filter$.sprints_input_filter.length) {
                filtered = filtered.filter((sprint) =>
                    filterSprintByInput(sprint, self.sprints_filter$.sprints_input_filter),
                )
            }
            return filtered
        },
        get filteredNotDeletedSprints(): ISprint$[] {
            return this.filteredSprints.filter((sprint) => !sprint.deleted_at)
        },
        // ACTIVE
        get activeSprintsActiveStatus(): boolean {
            return (
                !self.sprints_filter$.sprints_selected_statuses.length ||
                self.sprints_filter$.sprints_selected_statuses.includes(SPRINT_FILTER_STATUS_ENUM.ACTIVE)
            )
        },
        get activeSprintsRender(): ISprint$[] {
            return this.activeSprintsActiveStatus
                ? orderBy(
                      this.filteredNotDeletedSprints.filter(
                          (sprint) => sprint.isStatusActive && !sprint.todayIsChecked,
                      ),
                      'started_at',
                  )
                : []
        },
        get checkedSprintsRender(): ISprint$[] {
            return this.activeSprintsActiveStatus
                ? orderBy(
                      this.filteredNotDeletedSprints.filter((sprint) => sprint.todayIsChecked),
                      'started_at',
                  )
                : []
        },
        get allActiveCheckedSprintsLength(): number {
            return this.activeSprintsRender.length + this.checkedSprintsRender.length
        },
        // FREEZED
        get freezedSprintsActiveStatus(): boolean {
            return (
                !self.sprints_filter$.sprints_selected_statuses.length ||
                self.sprints_filter$.sprints_selected_statuses.includes(SPRINT_FILTER_STATUS_ENUM.FREEZED)
            )
        },
        get freezedSprintsRender(): ISprint$[] {
            return this.freezedSprintsActiveStatus
                ? orderBy(
                      this.filteredNotDeletedSprints.filter((sprint) => sprint.isStatusFreezed),
                      'started_at',
                  )
                : []
        },
        // FUTURE
        get futureSprintsActiveStatus(): boolean {
            return (
                !self.sprints_filter$.sprints_selected_statuses.length ||
                self.sprints_filter$.sprints_selected_statuses.includes(SPRINT_FILTER_STATUS_ENUM.FUTURE)
            )
        },
        get futureSprintsRender(): ISprint$[] {
            return this.futureSprintsActiveStatus
                ? orderBy(
                      this.filteredNotDeletedSprints.filter((sprint) => sprint.isStatusFuture),
                      'started_at',
                  )
                : []
        },
        // FINISHED
        get finishedSprintsActiveStatus(): boolean {
            return (
                !self.sprints_filter$.sprints_selected_statuses.length ||
                self.sprints_filter$.sprints_selected_statuses.includes(SPRINT_FILTER_STATUS_ENUM.FINISHED)
            )
        },
        get finishedSprintsRender(): ISprint$[] {
            return this.finishedSprintsActiveStatus
                ? orderBy(
                      this.filteredNotDeletedSprints.filter((sprint) => sprint.isStatusFinished),
                      'started_at',
                  )
                : []
        },
    }))
