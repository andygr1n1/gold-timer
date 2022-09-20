import type { Instance, SnapshotIn } from 'mobx-state-tree'
import { Goal } from './models/Goal.model'
import { Goal$ } from './stores/Goal.store'
import { Goals$ } from './stores/Goals.store'
import type { Root$ } from './stores/Root.store'

export interface IRoot$ extends Instance<typeof Root$> {}
export interface IGoals$ extends Instance<typeof Goals$> {}

export interface IRoot$SnapshotIn extends SnapshotIn<typeof Root$> {}

export interface IGoal$ extends Instance<typeof Goal$> {}

export interface IGoal extends Instance<typeof Goal> {}
export interface IGoalSnapshotIn extends SnapshotIn<typeof Goal> {}
