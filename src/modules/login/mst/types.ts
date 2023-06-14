import { Instance } from 'mobx-state-tree'
import { Login$ } from './stores/Login.store'

export interface ILogin$ extends Instance<typeof Login$> {}
