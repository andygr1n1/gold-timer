import { Instance, SnapshotIn } from 'mobx-state-tree'
import { Sprint$ } from './stores/Sprint.store'
import { SprintNew$ } from './stores/SprintNew.store'
import { SprintsFilter$ } from './stores/SprintsFilter.store'
import { SprintDay } from './models/SprintDay.model'

export interface ISprint$ extends Instance<typeof Sprint$> {}
export interface ISprint$SnIn extends SnapshotIn<typeof Sprint$> {}

export interface ISprintsFilter$ extends Instance<typeof SprintsFilter$> {}

export interface ISprintNew$ extends Instance<typeof SprintNew$> {}

export interface ISprintDay extends Instance<typeof SprintDay> {}
export interface ISprintDaySnIn extends SnapshotIn<typeof SprintDay> {}
