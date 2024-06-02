import { tryCatchRequest } from '@/functions/tryCatchRequest'
import ky from 'ky'
import { IVerifyActivationCode, activationCodeSchema } from './types'

export const server_verifyActivationCode = async (props: {
    activationCode?: string | null
}): Promise<IVerifyActivationCode | undefined> => {
    const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
    const xapikey = import.meta.env.VITE_X_API_KEY

    return await tryCatchRequest<IVerifyActivationCode | undefined, undefined>(async () => {
        const parsedProps = activationCodeSchema.safeParse(props)
        if (!parsedProps.success) {
            throw new Error('Invalid activation code')
        }

        await ky
            .post(`${endpoint}register/validate-activation-code`, {
                json: { activationCode: props.activationCode },
                headers: {
                    'x-api-key': xapikey,
                },
            })
            .json<IVerifyActivationCode>()
    })
}
