import axios from 'axios'
import { ILoginRes } from './login.interface'

export const sendLoginData = async (loginData: {
    email: string
    password: string
    remember: boolean
}): Promise<ILoginRes | undefined> => {
    try {
        const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
        const xapikey = import.meta.env.VITE_X_API_KEY

        if (!loginData) return

        const { data, status } = await axios<ILoginRes>({
            method: 'post',
            headers: {
                'x-api-key': xapikey,
            },
            url: `${endpoint}login`,
            data: loginData,
        })

        console.warn('login status:', status)
        return data
    } catch (e) {
        console.error('sendLoginData Error:::', e)
    }
}
