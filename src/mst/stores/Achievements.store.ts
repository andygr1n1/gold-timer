import { types } from 'mobx-state-tree'
import { Achievement } from '../models/Achievement.model'
import { IAchievement } from '../types'

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
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
