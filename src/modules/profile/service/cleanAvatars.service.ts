import axios from 'axios'

export const cleanAvatar = async (avatarId: string) => {
    const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
    const xapikey = import.meta.env.VITE_X_API_KEY

    axios.delete(`${endpoint}file-remove-avatar`, {
        headers: {
            'x-api-key': xapikey,
        },
        method: 'delete',
        data: {
            data: avatarId,
        },
    })
}
