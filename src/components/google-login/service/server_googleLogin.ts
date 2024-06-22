import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { ISessionCredentials } from '@/modules/auth/login/services/types'
import ky from 'ky'

export const server_googleLogin = async (props: { formData: { accessId: string } }) => {
    const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
    const xapikey = import.meta.env.VITE_X_API_KEY

    return await tryCatchRequest<Promise<undefined>, ISessionCredentials | undefined>(
        async () => {
            return await ky
                .post(`${endpoint}google-login`, {
                    credentials: 'include',
                    json: props.formData,
                    method: 'POST',
                    headers: {
                        'x-api-key': xapikey,
                        'Content-Type': 'application/json',
                    },
                })
                .json<Promise<ISessionCredentials | undefined>>()
        },
        async (e) => await resolveError(e),
    )
}
