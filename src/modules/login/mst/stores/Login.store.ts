import { types } from 'mobx-state-tree'
import { RegisterCredentials$ } from './RegisterCredentials.store'

export const Login$ = types.model({
    register_credentials: types.optional(RegisterCredentials$, {}),
})
