import axios from 'axios'
import { IRestoreAccRes } from './login.interface'
import { processError } from '@/functions/processMessage'

export const restoreAccount = async (restoreData: { email: string }): Promise<IRestoreAccRes | undefined> => {
    try {
        const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
        const xapikey = import.meta.env.VITE_X_API_KEY

        if (!restoreData) return

        const { data, status } = await axios<IRestoreAccRes>({
            method: 'post',
            headers: {
                'x-api-key': xapikey,
            },
            url: `${endpoint}restore`,
            data: restoreData,
        })

        console.warn('login status:', status)
        return data
    } catch (e) {
        processError(e, 'restoreAccount error')
    }
}
