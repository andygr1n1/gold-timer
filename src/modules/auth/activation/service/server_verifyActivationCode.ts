import ky from 'ky'
import { type IVerifyActivationCode } from './types'
import { resolveError } from '@/helpers/tryCatchRequest'

export const server_verifyActivationCode = async (props: {
    activationCode?: string | null
}): Promise<IVerifyActivationCode | undefined> => {
    const endpoint = import.meta.env['VITE_NODE_HEROKU_ORIGIN']
    const xapikey = import.meta.env['VITE_X_API_KEY']
    try {
        const res = await ky
            .post(`${endpoint}register/validate-activation-code`, {
                credentials: 'include',
                json: { activationCode: props.activationCode },
                method: 'POST',
                headers: {
                    'x-api-key': xapikey,
                    'Content-Type': 'application/json',
                },
            })
            .json<IVerifyActivationCode>()

        return res
    } catch (error) {
        await resolveError(error)
        return
    }
}
