import { IFetchUserByEmailResponse, fetchUserByEmail } from '@/graphql/queries/fetchUserByEmail.query'
import { flow, types, toGenerator } from 'mobx-state-tree'

export const RegisterCredentials$ = types
    .model({
        name: '',
        register_email_input: '',
        register_email_in_use: false,
    })
    .views((self) => ({
        get registerEmailInUseError(): boolean {
            return !!self.register_email_input.length && self.register_email_in_use
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        validateEmail: flow(function* _failGoal(): Generator<
            PromiseLike<undefined | IFetchUserByEmailResponse[]>,
            undefined | number,
            undefined
        > {
            try {
                const result = yield* toGenerator(fetchUserByEmail(self.register_email_input))
                if (!result) throw new Error('validateEmail error')
                if (result.length) {
                    self.register_email_in_use = true
                    return 401
                }
                return 200
            } catch (e) {
                alert(e)
                return 401
            }
        }),
    }))
