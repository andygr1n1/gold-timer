import { applySnapshot, flow, types } from 'mobx-state-tree'
import { Achievement } from '../models/Achievement.model'
import { IAchievement } from '../types'
import { fetchAchievementsByUserId } from '@/graphql/queries/fetchAchievementsByUserId.query'
import { getUserId } from '@/helpers/getUserId'
import { processError } from '@/helpers/processError.helper'
import { IGoal$SnapshotIn } from '@/modules/goals/mst/types'

export const Achievements$ = types
    .model({
        achievements: types.array(Achievement),
        new_achievement: types.optional(Achievement, {}),
    })
    .views((self) => ({
        get visibleAchievements(): IAchievement[] {
            return self.achievements.filter((ach) => ach.visible)
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        fetchAchievements: flow(function* _fetchGoals() {
            try {
                const res: IGoal$SnapshotIn[] = yield fetchAchievementsByUserId(getUserId())
                if (!res) throw new Error('fetchGoals error')
                applySnapshot(self.achievements, res)
            } catch (e) {
                processError(e, 'fetchAchievements error')
            }
        }),
    }))
