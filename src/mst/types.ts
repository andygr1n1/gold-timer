import type { Instance, SnapshotIn } from 'mobx-state-tree'
import { Achievement } from './models/Achievement.model'
import type { Root$ } from './stores/Root.store'
import { User$ } from './stores/User.store'

export interface IUser$ extends Instance<typeof User$> {}
export interface IRoot$ extends Instance<typeof Root$> {}

export interface IRoot$SnapshotIn extends SnapshotIn<typeof Root$> {}

export interface IAchievement extends Instance<typeof Achievement> {}
export interface IAchievementSnapshotIn extends SnapshotIn<typeof Achievement> {}
