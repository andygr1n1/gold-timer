import type { Instance, SnapshotIn } from 'mobx-state-tree'
import { Goal } from './models/Goal.model'
import { Achievement } from './models/Achievement.model'
import { Goal$ } from './stores/Goal.store'
import { Goals$ } from './stores/Goals.store'
import type { Root$ } from './stores/Root.store'
import { GoalRitual } from './models/GoalRitual.model'
import { Task$ } from './stores/Task.store'
import { Task } from './models/Task.model'
import { User$ } from './stores/User.store'
import { SprintGoal } from './models/SprintGoal.model'
import { Sprint$ } from './stores/Sprint.store'
import { SprintDay } from './models/SprintDay.model'
import { SprintNew$ } from './stores/SprintNew.store'
import { SprintsFilter$ } from './stores/SprintsFilter.store'

export interface IGoals$ extends Instance<typeof Goals$> {}
export interface IUser$ extends Instance<typeof User$> {}
export interface IRoot$ extends Instance<typeof Root$> {}

export interface IRoot$SnapshotIn extends SnapshotIn<typeof Root$> {}

export interface IGoal$ extends Instance<typeof Goal$> {}
export interface IGoal$SnapshotIn extends SnapshotIn<typeof Goal$> {}

export interface IGoal extends Instance<typeof Goal> {}
export interface IGoalSnapshotIn extends SnapshotIn<typeof Goal> {}

export interface IGoalRitual extends Instance<typeof GoalRitual> {}
export interface IGoalRitualSnapshotIn extends SnapshotIn<typeof GoalRitual> {}

export interface IAchievement extends Instance<typeof Achievement> {}
export interface IAchievementSnapshotIn extends SnapshotIn<typeof Achievement> {}

export interface ITask extends Instance<typeof Task> {}
export interface ITask$ extends Instance<typeof Task$> {}
export interface ITask$SnapshotIn extends SnapshotIn<typeof Task$> {}

export interface ISprint$ extends Instance<typeof Sprint$> {}
export interface ISprint$SnIn extends SnapshotIn<typeof Sprint$> {}

export interface ISprintsFilter$ extends Instance<typeof SprintsFilter$> {}

export interface ISprintNew$ extends Instance<typeof SprintNew$> {}

export interface ISprintDay extends Instance<typeof SprintDay> {}
export interface ISprintDaySnIn extends SnapshotIn<typeof SprintDay> {}

export interface ISprintGoal extends Instance<typeof SprintGoal> {}
