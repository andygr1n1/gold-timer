import type { Instance } from 'mobx-state-tree'
import type { Root$ } from './stores/Root.store'

export interface IRoot$ extends Instance<typeof Root$> {}
