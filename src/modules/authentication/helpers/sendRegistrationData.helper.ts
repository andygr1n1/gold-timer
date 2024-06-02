import axios from 'axios'
import { processError } from '@/functions/processMessage'

export const sendRegistrationData = async (registrationData: {
    name: string
    email: string
    password: string
}): Promise<{ status: string; jwt: string } | undefined> => {
    try {
        const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
        const xapikey = import.meta.env.VITE_X_API_KEY

        const { data } = await axios<{ status: string; jwt: string }>({
            method: 'post',
            headers: {
                'x-api-key': xapikey,
            },
            url: `${endpoint}register`,
            data: registrationData,
        })

        return data
    } catch (e) {
        processError((e as { code: string }).code, 'sendRegistrationData error')
    }
}
