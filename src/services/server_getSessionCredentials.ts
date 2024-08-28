import ky from 'ky'
import { resolveError } from '@/helpers/tryCatchRequest'
import { type ISessionCredentials } from '@/modules/auth/login/services/types'
import { getSessionJWTFromCookie } from '@/helpers/universalCookie'

export const server_getSessionCredentials = async (): Promise<
    { serverCredentials: ISessionCredentials } | undefined
> => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    try {
        const res = await ky
            .post(`${endpoint}login/refresh`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'x-api-key': xapikey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'autoLogin', sessionJWT: getSessionJWTFromCookie() }),
            })
            .json<ISessionCredentials | undefined>()

        if (!res) throw new Error('server_getSessionCredentials: response')

        return { serverCredentials: res }
    } catch (error) {
        await resolveError(error)
        return
    }
}
