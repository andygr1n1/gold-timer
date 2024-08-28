import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import ky from 'ky'

export const server_resendActivationLink = async (props: { email?: string | null }) => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    return await tryCatchRequest<Promise<undefined>, undefined>(
        async () => {
            await ky
                .post(`${endpoint}register/resend-activation-link`, {
                    credentials: 'include', //
                    json: { email: props.email },
                    headers: {
                        'x-api-key': xapikey,
                    },
                })
                .json<{ status: string }>()
        },
        async (e) => await resolveError(e),
    )
}
