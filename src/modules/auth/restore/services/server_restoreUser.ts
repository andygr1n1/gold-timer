import { resolveError } from '@/helpers/tryCatchRequest'
import ky from 'ky'
import { type IUserRestoreSchema } from './types'

export const server_restoreUser = async (props: { formData: IUserRestoreSchema }) => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    try {
        return await ky
            .post(`${endpoint}restore`, {
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
