import { fetchData } from '@/functions/fetchData'
import { processError } from '@/functions/processMessage'
import { fetchUserByEmail } from '@/graphql/queries/fetchUserByEmail.query'
import { atom } from 'jotai'
import { atomWithImmer } from 'jotai-immer'

export const registerAtom = atomWithImmer({ name: '', register_email_input: '', register_email_in_use: false })

// getters
export const registerEmailInUseError = atom((get) => {
    const store = get(registerAtom)
    return !!store.register_email_input.length && store.register_email_in_use
})
// actions
export const validateUser = atom(null, async (get, set): Promise<number> => {
    const store = get(registerAtom)
    return await fetchData<number, number>(
        () =>
            fetchUserByEmail(store.register_email_input).then((res) => {
                if (!res) throw new Error('validateEmail error')

                if (res.length) {
                    set(registerAtom, (store) => {
                        store.register_email_in_use = true
                    })
                    return 401
                }
                return 200
            }),
        (e) => {
            processError(e)
            return 401
        },
    )
})
