import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import ky from 'ky'
import { type ISessionLogout } from './types'
import { getSessionJWTFromCookie } from '@/helpers/universalCookie'

export const server_logoutUser = async () => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    return await tryCatchRequest<Promise<undefined>, ISessionLogout | undefined>(
        async () => {
            return await ky
                .post(`${endpoint}logout`, {
                    credentials: 'include',
                    json: { message: 'logout', sessionJWT: getSessionJWTFromCookie() },
                    method: 'POST',
                    headers: {
                        'x-api-key': xapikey,
                        'Content-Type': 'application/json',
                    },
                })
                .json<Promise<ISessionLogout | undefined>>()
        },
        async (e) => await resolveError(e),
    )
}
