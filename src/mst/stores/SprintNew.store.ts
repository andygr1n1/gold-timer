import { IInsertNewSprint, insertNewSprint } from './../../graphql/mutations/insertNewSprint.mutation'
import { cloneDeep } from 'lodash-es'
import { cast, flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { Sprint$ } from './Sprint.store'
import { uploadNewSprintLogo } from './sprint.service'
import { processError } from '@/helpers/processError.helper'
import { add } from 'date-fns'
import { Sprints$ } from './Sprints.store'
import { getUserId } from '@/helpers/getUserId'

export const SprintNew$ = types
    .compose(
        Sprint$,
        types.model({
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

                console.log('sprint snIn', cloneDeep(self))

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
    }))
