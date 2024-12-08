import ky from 'ky'
import type { IUserData } from './types'
import { resolveError } from '@/helpers/tryCatchRequest'

export const server_getUserDataByEmail = async (props: { email?: string | null }) => {
    try {
        const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
        const xapikey = import.meta.env['VITE_X_API_KEY']

        const res = await ky
            .post(`${endpoint}user-get-information`, {
                credentials: 'include', //
                json: { email: props.email },
                headers: {
                    'x-api-key': xapikey,
                },
            })
            .json<{ user: IUserData }>()

        return res?.user
    } catch (e) {
        return await resolveError(e)
    }
}
