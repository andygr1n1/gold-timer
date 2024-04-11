import { applySnapshot, destroy, detach, flow, toGenerator, types } from 'mobx-state-tree'
import { GoalSlide$ } from './GoalSlide.store'
import { processError, processSuccess } from '@/functions/processMessage'
import { IGoalSlide$ } from '../types'
import { query_fetchGoalsSlides } from '../../graphql/query_fetchGoalsSlides'
import { SERVER_ROUTES } from '@/helpers/enums'
import { uploadNewImageToServer } from '@/services/image.service'
import { mutation_insertGoalSlide } from '../../graphql/mutation_insertGoalSlide'
import { rootStore$ } from '@/app/StoreProvider'

export const GoalsSlides$ = types
    .model('GoalsSlides$', {
        goals_slides: types.array(GoalSlide$),
        is_crud_open: false,
        //
        img_cropped_src: '',
        img_src: '',
        img_src_title: '',
    })
    .views((self) => ({
        get visibleSlides(): IGoalSlide$[] {
            return self.goals_slides.filter((gS) => gS.active)
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        fetchGoalsSlides: flow(function* _query_fetchGoalsSlides() {
            try {
                const res: IGoalSlide$[] = yield query_fetchGoalsSlides()
                if (!res) throw new Error('fetchGoals error')
                applySnapshot(self.goals_slides, res)
            } catch (e) {
                processError(e, 'fetchAchievements error')
            }
        }),
        saveNewGoalSlide: flow(function* _saveNewGoalSlide(croppedImage: string) {
            rootStore$.onChangeField('loading', true)
            self.img_cropped_src = croppedImage
            try {
                const newGoalSlide = yield* toGenerator(
                    uploadNewImageToServer(self.img_cropped_src, SERVER_ROUTES.GOAL_SLIDE_IMAGE_UPLOAD),
                )
                if (!newGoalSlide) return
                const newGoalSlideRes = yield* toGenerator(mutation_insertGoalSlide(newGoalSlide, self.img_src_title))
                newGoalSlideRes && self.goals_slides.push(newGoalSlideRes)
                processSuccess('Slide was successfully uploaded')
            } catch (e) {
                processError(e, 'saveNewGoalSlide error')
            } finally {
                rootStore$.onChangeField('loading', false)
                self.img_cropped_src = ''
            }
        }),
        destroySlide(slide: IGoalSlide$) {
            destroy(detach(slide))
        },
    }))
