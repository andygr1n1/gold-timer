import { flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { Sprint$ } from './Sprint.store'
import { deleteSprintLogo, uploadNewSprintLogo } from './sprint.service'
import { processError } from '@/helpers/processError.helper'
import { add } from 'date-fns'
import { Sprints$ } from './Sprints.store'
import { getUserId } from '@/helpers/getUserId'
import { IEditSprintReq, IInsertNewSprint } from '@/modules/sprints/graphql/helpers/interface'
import { compact, last } from 'lodash-es'
import { insertNewSprint } from '@/modules/sprints/graphql/insertNewSprint.mutation'
import { updateSprint } from '@/modules/sprints/graphql/updateSprint.mutation'

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
                if (self.img_cropped_src) {
                    const uploadedImgPath = yield* toGenerator(uploadNewSprintLogo(self.img_cropped_src))

                    if (!uploadedImgPath) throw new Error('activateNewSprint error')

                    self.img_path = uploadedImgPath
                }

                const successPointsArray: number[] = Array(self.duration).fill(0)

                const sprint_days = successPointsArray.map((_, index) => ({
                    id: crypto.randomUUID(),
                    date: add(self.started_at!, { days: index }),
                    status: null,
                }))

                const lastSprintDate = last(sprint_days)?.date || null

                const newSprint: IInsertNewSprint = {
                    id: self.id,
                    title: self.title,
                    description: self.description,
                    duration: self.duration,
                    img_path: self.img_path,
                    achievement: self.achievement,
                    started_at: self.started_at,
                    finished_at: lastSprintDate,
                    sprint_days,
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
                let finished_at: Date | null = self.finished_at
                if (self.isStatusFuture) {
                    /* possible to change started_at only for isStatusFuture */
                    self.sprint_days.forEach((sprintDay, index) => {
                        sprintDay.onChangeField('date', add(self.started_at, { days: index }))
                        sprintDay.onChangeField('status', null)
                    })

                    finished_at = last(self.sprint_days)?.date || null
                }

                const updatedSprint: IEditSprintReq = {
                    title: self.title,
                    description: self.description,
                    img_path: self.img_path,
                    achievement: self.achievement,
                    started_at: self.started_at,
                    finished_at,
                    sprint_goals: compact(self.sprint_goals?.split('#,#')).join('#,#'),
                    sprint_days: self.sprint_days,
                }

                self.loading = true
                const updatedSprintRes = yield* toGenerator(updateSprint({ sprintId: self.id, updatedSprint }))
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
