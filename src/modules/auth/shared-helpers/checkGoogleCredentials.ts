import { processError } from '@/functions/processMessage'
import axios from 'axios'

export const checkGoogleCredentials = async (accessToken?: string) => {
    try {
        if (!accessToken) throw new Error('Google sign in failed')
        const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
        const xapikey = import.meta.env.VITE_X_API_KEY

        const { data, status } = await axios<{ jwt: string }>({
            method: 'post',
            headers: {
                'x-api-key': xapikey,
            },
            url: `${endpoint}google-sign-in`,
            data: { accessToken },
        })

        console.log('data', data, status)
        // i need userId and jwtToken with limit
    } catch (e) {
        processError(e)
    }
}
