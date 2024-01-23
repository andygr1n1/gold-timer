import { flow, toGenerator, types } from 'mobx-state-tree'
import { fetchUserSecret } from '@/graphql/queries/fetchUserSecret.query'
import { User } from '../models/User.model'

export const UserEdit$ = types
    .compose(
        User,
        types.model('UserEdit$', {
            repeat_password: '',
            new_password: '',
        }),
    )
    .views((self) => ({
        get newPasswordIsValid(): boolean {
            return self.new_password === self.repeat_password
        },
        get passwordIsValid(): boolean {
            return !!self.password.length && this.newPasswordIsValid
        },
        get updatePassword(): string {
            return self.new_password.length ? self.new_password : self.password
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        fetchUserPassword: flow(function* _fetchUserPassword() {
            const resPassword = yield* toGenerator(fetchUserSecret(self.id))
            if (!resPassword) return

            self.password = resPassword
        }),
    }))
