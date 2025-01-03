import { resolveError } from '@/helpers/tryCatchRequest'
import { type ISessionCredentials } from '@/modules/auth/login/services/types'
import ky from 'ky'

export const server_googleLogin = async ({ formData: json }: { formData: { accessJWT: string } }) => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    try {
        return await ky
            .post(`${endpoint}google-login`, {
                credentials: 'include',
                json,
                method: 'POST',
                headers: {
                    'x-api-key': xapikey,
                    'Content-Type': 'application/json',
                },
            })
            .json<Promise<ISessionCredentials | undefined>>()
    } catch (e) {
        return await resolveError(e)
    }
}
