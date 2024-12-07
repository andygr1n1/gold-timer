import { resolveError } from '@/helpers/tryCatchRequest'
import ky from 'ky'
import type { ISessionCredentials, IUserLoginSchema } from './types'

export const server_loginUser = async (props: { formData: IUserLoginSchema }) => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    try {
        return await ky
            .post(`${endpoint}login`, {
                credentials: 'include',
                json: props.formData,
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
