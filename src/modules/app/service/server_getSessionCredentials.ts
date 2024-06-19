import ky from 'ky'
import { resolveError } from '@/functions/tryCatchRequest'
import { ISessionCredentials } from '@/modules/auth/login/services/types'

export const getSessionCredentials = async (): Promise<string | null> => {
    const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
    const xapikey = import.meta.env.VITE_X_API_KEY

    try {
        const res = await ky
            .post(`${endpoint}login/refresh`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'x-api-key': xapikey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'autoLogin' }),
            })
            .json<ISessionCredentials | null>()

        return res?.accessId || null
    } catch (error) {
        await resolveError(error)
        return null
    }
}
