import axios from 'axios'
import { ILoginRes } from './login.interface'

export const sendRegistrationData = async (registrationData: {
    name: string
    email: string
    password: string
}): Promise<ILoginRes | undefined> => {
    try {
        const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
        const xapikey = import.meta.env.VITE_X_API_KEY

        if (!registrationData) return

        const { data, status } = await axios<ILoginRes>({
            method: 'post',
            headers: {
                'x-api-key': xapikey,
            },
            url: `${endpoint}register`,
            data: registrationData,
        })

        console.warn('registration status:', status)
        return data
    } catch (e) {
        console.error('sendRegistrationData Error:::', (e as { code: string }).code)
        alert(`sendRegistrationData Error:::, ${(e as { code: string }).code}`)
    }
}
