import type { Instance } from 'mobx-state-tree'
import type { Root$ } from '../modules/login/stores/Root.store'
import { User$ } from '../modules/login/stores/User.store'

export interface IUser$ extends Instance<typeof User$> {}
export interface IRoot$ extends Instance<typeof Root$> {}
