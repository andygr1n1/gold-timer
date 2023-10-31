import { processError } from '@/helpers/processError.helper'
import { cast, flow, getParentOfType, toGenerator, types } from 'mobx-state-tree'
import { mutation_toggleActiveGoalSlide } from '../../graphql/mutation_toggleActiveGoalSlide'
import { deleteImageFromServer } from '@/services/image.service'
import { SERVER_ROUTES } from '@/helpers/enums'
import { mutation_deleteGoalSlide } from '../../graphql/mutation_deleteGoalSlide'
import { GoalsSlides$ } from './GoalsSlides.store'

export const GoalSlide$ = types
    .model('GoalSlide$', {
        id: types.snapshotProcessor(types.identifier, {
            preProcessor(sn: string | undefined) {
                if (!sn) return crypto.randomUUID()

                return sn
            },
        }),
        owner_id: '',
        img_path: '',
        title: '',
        active: true,
        created_at: types.snapshotProcessor(types.maybe(types.Date), {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return undefined
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
    })
    .actions((self) => ({
        toggleShow: flow(function* _toggleShow() {
            try {
                const state = !self.active
                const result = yield* toGenerator(mutation_toggleActiveGoalSlide(self.id, state))
                if (result === undefined) throw new Error('mutation_toggleActiveGoalSlide error')
                self.active = result
            } catch (e) {
                processError(e)
            }
        }),
        deleteGoalSlide: flow(function* _deleteGoalSlide() {
            try {
                yield deleteImageFromServer(self.img_path, SERVER_ROUTES.GOAL_SLIDE_IMAGE_DELETE)
                const result = yield mutation_deleteGoalSlide(self.id)
                if (result === undefined) throw new Error('mutation_deleteGoalSlide error')
                const { destroySlide } = getParentOfType(self, GoalsSlides$)
                destroySlide(cast(self))
            } catch (e) {
                processError(e)
            }
        }),
    }))
