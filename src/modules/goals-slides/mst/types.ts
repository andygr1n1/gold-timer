import { Instance, SnapshotIn } from 'mobx-state-tree'
import { GoalSlide$ } from './stores/GoalSlide.store'

export interface IGoalSlide$ extends Instance<typeof GoalSlide$> {}
export interface IGoalSlide$SnIn extends SnapshotIn<typeof GoalSlide$> {}
