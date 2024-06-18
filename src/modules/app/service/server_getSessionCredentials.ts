import ky from 'ky'
import { resolveError } from '@/functions/tryCatchRequest'
import { IUserSchema } from '@/services/user-store/useUserStore'

export const getSessionCredentials = async (): Promise<IUserSchema | null> => {
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
            .json<{ message: string; user: IUserSchema } | null>()

        return res?.user || null
    } catch (error) {
        await resolveError(error)
        return null
    }
}
