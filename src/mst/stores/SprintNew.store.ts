import { insertNewSprint } from '../../graphql/mutations/sprints/insertNewSprint.mutation'
import { cast, flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { Sprint$ } from './Sprint.store'
import { deleteSprintLogo, uploadNewSprintLogo } from './sprint.service'
import { processError } from '@/helpers/processError.helper'
import { add } from 'date-fns'
import { Sprints$ } from './Sprints.store'
import { getUserId } from '@/helpers/getUserId'
import { IEditSprintReq, IInsertNewSprint } from '@/graphql/mutations/sprints/helpers/interface'
import { last } from 'lodash-es'
import { updateSprint } from '@/graphql/mutations/sprints/updateSprint.mutation'

export const SprintNew$ = types
    .compose(
        Sprint$,
        types.model({
            edit_mode: false,
            img_src: '',
            img_cropped_src: '',
            loading: false,
        }),
    )
    .named('SprintNew$')

    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        addNewSprintGoal(): void {
            self.sprints_goals.push({ title: '' })
        },
    }))
    .actions((self) => ({
        activateNewSprint: flow(function* _activateNewSprint() {
            try {
                if (!self.started_at) {
                    throw new Error('activateNewSprint error')
                }

                if (self.img_cropped_src) {
                    const uploadedImgPath = yield* toGenerator(uploadNewSprintLogo(self.img_cropped_src))

                    if (!uploadedImgPath) throw new Error('activateNewSprint error')

                    self.img_path = uploadedImgPath
                }

                const successPointsArray: number[] = Array(self.duration).fill(0)

                const sprints_days = successPointsArray.map((_, index) => ({
                    date: add(self.started_at!, { days: index }),
                    status: null,
                }))

                self.onChangeField('sprints_days', cast(sprints_days))

                const newSprint: IInsertNewSprint = {
                    id: self.id,
                    title: self.title,
                    description: self.description,
                    duration: self.duration,
                    img_path: self.img_path,
                    achievement: self.achievement,
                    started_at: self.started_at,
                    sprints_days: { data: self.sprints_days },
                    sprints_goals: { data: self.sprints_goals },
                    owner_id: getUserId(),
                }

                self.loading = true
                const createdSprint = yield* toGenerator(insertNewSprint(newSprint))
                if (!createdSprint) throw new Error('activateNewSprint: creating sprint failed')

                const { pushNewSprint } = getParentOfType(self, Sprints$)
                self.loading = false
                pushNewSprint(createdSprint)
            } catch (e) {
                processError(e)
                self.loading = false
            }
        }),
        updateSprint: flow(function* _updateSprint() {
            try {
                if (!self.started_at) {
                    throw new Error('activateNewSprint error')
                }

                /* upsert image */
                const uploadImageTrigger = last(self.img_cropped_src.split('/')) !== self.img_path
                if (self.img_cropped_src && uploadImageTrigger) {
                    const uploadedImgPath = yield* toGenerator(uploadNewSprintLogo(self.img_cropped_src))

                    if (!uploadedImgPath) throw new Error('activateNewSprint error')

                    if (self.img_path && uploadImageTrigger) {
                        /* removing previous image */
                        deleteSprintLogo(self.img_path)
                    }

                    self.img_path = uploadedImgPath
                }
                //
                //
                /* generate sprint days */
                if (self.isStatusFuture) {
                    /* possible to change started_at only for isStatusFuture */
                    self.sprints_days.forEach((sprintDay, index) => {
                        sprintDay.onChangeField('date', add(self.started_at!, { days: index }))
                    })
                }

                const updatedSprint: IEditSprintReq = {
                    title: self.title,
                    description: self.description,
                    img_path: self.img_path,
                    achievement: self.achievement,
                    started_at: self.started_at,
                }

                const updatedDays = self.sprints_days.map((day) => ({ ...day, sprint_id: self.id }))

                const updatedGoals = self.sprints_goals
                    .filter((goal) => !goal.deleted_at)
                    .map((goal) => ({ id: goal.id, title: goal.title, status: goal.status, sprint_id: self.id }))

                const deletedGoalsIds = self.sprints_goals.filter((goal) => goal.deleted_at).map((goal) => goal.id)

                self.loading = true
                const updatedSprintRes = yield* toGenerator(
                    updateSprint({ sprintId: self.id, updatedSprint, updatedDays, updatedGoals, deletedGoalsIds }),
                )
                if (!updatedSprintRes) throw new Error('updateSprint: updating sprint failed')

                const { pushNewSprint } = getParentOfType(self, Sprints$)
                self.loading = false
                pushNewSprint(updatedSprintRes, self.edit_mode)
            } catch (e) {
                processError(e)
                self.loading = false
            }
        }),
    }))
