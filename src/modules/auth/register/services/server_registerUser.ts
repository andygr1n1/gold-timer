import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import ky from 'ky'
import { type IUserRegisterSchema } from './types'

export const server_registerUser = async (props: { formData: IUserRegisterSchema }) => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    return await tryCatchRequest<Promise<unknown>, { message: string } | undefined>(
        async () => {
            return await ky
                .post(`${endpoint}register`, {
                    credentials: 'include', //
                    json: props.formData,
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
