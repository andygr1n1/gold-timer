import { applySnapshot, flow, types } from 'mobx-state-tree'
import { GoalSlide$ } from './GoalSlide.store'
import { processError } from '@/helpers/processError.helper'
import { IGoalSlide$ } from '../types'
import { query_fetchGoalsSlides } from '../../graphql/query_fetchGoalsSlides'

export const GoalsSlides$ = types
    .model('GoalsSlides$', {
        goals_slides: types.array(GoalSlide$),
    })
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
    }))
