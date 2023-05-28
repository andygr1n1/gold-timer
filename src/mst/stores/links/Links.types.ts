import { Instance } from 'mobx-state-tree'
import { Link$ } from './Link.store'
import { Link } from './Link.model'

export interface ILink$ extends Instance<typeof Link$> {}
export interface ILink extends Instance<typeof Link> {}
