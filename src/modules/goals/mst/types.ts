import type { Instance, SnapshotIn } from 'mobx-state-tree'
import { Goal$ } from './stores/Goal.store'
import { GoalRitual } from './models/GoalRitual.model'
import { GoalsFilter$ } from './stores/GoalsFilter.store'

export interface IGoal$ extends Instance<typeof Goal$> {}
export interface IGoal$SnapshotIn extends SnapshotIn<typeof Goal$> {}

export interface IGoalRitual extends Instance<typeof GoalRitual> {}
export interface IGoalRitualSnapshotIn extends SnapshotIn<typeof GoalRitual> {}

export interface IGoalsFilter$ extends SnapshotIn<typeof GoalsFilter$> {}
