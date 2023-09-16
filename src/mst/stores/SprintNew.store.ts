import { insertNewSprint } from '../../graphql/mutations/sprints/insertNewSprint.mutation'
import { cast, flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { Sprint$ } from './Sprint.store'
import { deleteSprintLogo, uploadNewSprintLogo } from './sprint.service'
import { processError } from '@/helpers/processError.helper'
import { add } from 'date-fns'
import { Sprints$ } from './Sprints.store'
import { getUserId } from '@/helpers/getUserId'
import { IEditSprintReq, IInsertNewSprint } from '@/graphql/mutations/sprints/helpers/interface'
import { compact, last } from 'lodash-es'
import { updateSprint } from '@/graphql/mutations/sprints/updateSprint.mutation'

export const SprintNew$ = types
    .compose(
        Sprint$,
        types.model({
            edit_mode: false,
            img_src: '',
            img_cropped_src: '',
            loading: false,
            new_sprint_goal: '',
        }),
    )
    .named('SprintNew$')
    .views((self) => ({
        get addNewGoalValidation(): boolean {
            const optimized = compact(self.goals.map((t) => t.trim().toLowerCase())).slice()
            const newSprintGoalsIsValid = !optimized.includes(self.new_sprint_goal.trim().toLowerCase())
            if (!newSprintGoalsIsValid) return false
            return !!self.new_sprint_goal.length
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        addNewSprintGoal(): void {
            if (!self.sprint_goals) {
                self.sprint_goals = self.new_sprint_goal
            } else {
                self.sprint_goals = `${self.new_sprint_goal}#,#${self.sprint_goals}`
            }
            self.new_sprint_goal = ''
        },
        deleteSprintGoal(objToDelete: string): void {
            const newGoals = self.goals.filter((g) => g !== objToDelete)
            self.onChangeField('sprint_goals', newGoals.join('#,#'))
            if (!self.sprint_goals) {
                self.sprint_goals = self.new_sprint_goal
            } else {
                self.sprint_goals = `${self.new_sprint_goal}#,#${self.sprint_goals}`
            }
            self.new_sprint_goal = ''
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
                    sprint_goals: compact(self.sprint_goals?.split('#,#')).join('#,#'),
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
                    sprint_goals: compact(self.sprint_goals?.split('#,#')).join('#,#'),
                }

                const updatedDays = self.sprints_days.map((day) => ({ ...day, sprint_id: self.id }))

                self.loading = true
                const updatedSprintRes = yield* toGenerator(
                    updateSprint({ sprintId: self.id, updatedSprint, updatedDays }),
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
