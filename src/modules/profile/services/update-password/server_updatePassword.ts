import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import ky from 'ky'
import { type IUserProfilePasswordSchema } from '../types'

export const server_updatePassword = async ({ values: json }: { values: IUserProfilePasswordSchema }) => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    return await tryCatchRequest<Promise<unknown>, { message: string } | undefined>(
        async () => {
            return await ky
                .post(`${endpoint}update-password`, {
                    credentials: 'include', //
                    json,
                    method: 'POST',
                    headers: {
                        'x-api-key': xapikey,
                        'Content-Type': 'application/json',
                    },
                })
                .json<Promise<{ message: string } | undefined>>()
        },
        async (e) => await resolveError(e),
    )
}
