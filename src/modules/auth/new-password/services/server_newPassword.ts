import { resolveError } from '@/helpers/tryCatchRequest'
import ky from 'ky'
import { type IUserNewPasswordSchema } from './types'

export const server_newPassword = async (props: { formData: IUserNewPasswordSchema }) => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    try {
        return await ky
            .post(`${endpoint}new-password`, {
                credentials: 'include', //
                json: props.formData,
                method: 'POST',
                headers: {
                    'x-api-key': xapikey,
                    'Content-Type': 'application/json',
                },
            })
            .json<Promise<{ message: string } | undefined>>()
    } catch (e) {
        return await resolveError(e)
    }
}
