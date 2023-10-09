import type { Instance, SnapshotIn } from 'mobx-state-tree'
import { Goal } from './models/Goal.model'
import { Achievement } from './models/Achievement.model'
import { Goal$ } from './stores/Goal.store'
import { Goals$ } from './stores/Goals.store'
import type { Root$ } from './stores/Root.store'
import { GoalRitual } from './models/GoalRitual.model'
import { User$ } from './stores/User.store'
import { GoalNew$ } from './stores/GoalNew.store'

export interface IGoals$ extends Instance<typeof Goals$> {}
export interface IUser$ extends Instance<typeof User$> {}
export interface IRoot$ extends Instance<typeof Root$> {}

export interface IRoot$SnapshotIn extends SnapshotIn<typeof Root$> {}

export interface IGoalNew$ extends Instance<typeof GoalNew$> {}
export interface IGoal$ extends Instance<typeof Goal$> {}
export interface IGoal$SnapshotIn extends SnapshotIn<typeof Goal$> {}

export interface IGoal extends Instance<typeof Goal> {}
export interface IGoalSnapshotIn extends SnapshotIn<typeof Goal> {}

export interface IGoalRitual extends Instance<typeof GoalRitual> {}
export interface IGoalRitualSnapshotIn extends SnapshotIn<typeof GoalRitual> {}

export interface IAchievement extends Instance<typeof Achievement> {}
export interface IAchievementSnapshotIn extends SnapshotIn<typeof Achievement> {}
