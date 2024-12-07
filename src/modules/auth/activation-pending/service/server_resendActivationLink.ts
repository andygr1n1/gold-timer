import { resolveError } from '@/helpers/tryCatchRequest'
import ky from 'ky'

export const server_resendActivationLink = async (props: { email?: string | null }) => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']

    try {
        await ky
            .post(`${endpoint}register/resend-activation-link`, {
                credentials: 'include', //
                json: { email: props.email },
                headers: {
                    'x-api-key': xapikey,
                },
            })
            .json<{ status: string }>()
    } catch (e) {
        return await resolveError(e)
    }
}
