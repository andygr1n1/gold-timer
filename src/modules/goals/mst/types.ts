import type { Instance, SnapshotIn } from 'mobx-state-tree'
import { Goal } from './models/Goal.model'
import { Goal$ } from './stores/Goal.store'
import { Goals$ } from './stores/Goals.store'
import { GoalRitual } from './models/GoalRitual.model'
import { GoalNew$ } from './stores/GoalNew.store'

export interface IGoals$ extends Instance<typeof Goals$> {}

export interface IGoalNew$ extends Instance<typeof GoalNew$> {}
export interface IGoal$ extends Instance<typeof Goal$> {}
export interface IGoal$SnapshotIn extends SnapshotIn<typeof Goal$> {}

export interface IGoal extends Instance<typeof Goal> {}
export interface IGoalSnapshotIn extends SnapshotIn<typeof Goal> {}

export interface IGoalRitual extends Instance<typeof GoalRitual> {}
export interface IGoalRitualSnapshotIn extends SnapshotIn<typeof GoalRitual> {}
