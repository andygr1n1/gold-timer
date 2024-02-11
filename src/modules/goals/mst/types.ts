import type { Instance } from 'mobx-state-tree'
import { Goal$ } from './Goal.store'

export interface IGoal$ extends Instance<typeof Goal$> {}
