import { getUserId } from '@/helpers/getUserId'
import { processError } from '@/helpers/processError.helper'
import axios from 'axios'

export interface IUploadSprintImgRes {
    fileName: string
}

export const uploadNewSprintLogo = async (imgBase64: string): Promise<string | undefined> => {
    try {
        const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
        const xapikey = import.meta.env.VITE_X_API_KEY

        const formData = new FormData()
        formData.append('base64', imgBase64)
        formData.append('userId', getUserId())

        const { data, status } = await axios<IUploadSprintImgRes>({
            method: 'POST',
            headers: {
                'x-api-key': xapikey,
                'Content-Type': 'multipart/form-data',
            },
            url: `${endpoint}upload-sprint-image`,
            data: formData,
        })

        if (status !== 200) throw new Error(`uploadNewSprintLogo: ${status}`)
        return data?.fileName
    } catch (e) {
        processError(e)
        return
    }
}

export const deleteSprintLogo = async (imgTitle: string): Promise<string | undefined> => {
    try {
        const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
        const xapikey = import.meta.env.VITE_X_API_KEY

        const formData = new FormData()
        formData.append('imgTitle', imgTitle)

        const { data, status } = await axios<IUploadSprintImgRes>({
            method: 'POST',
            headers: {
                'x-api-key': xapikey,
                'Content-Type': 'multipart/form-data',
            },
            url: `${endpoint}sprint-image-delete`,
            data: formData,
        })

        if (status !== 200) throw new Error(`deleteSprintLogo: ${status}`)
        return data?.fileName
    } catch (e) {
        processError(e)
        return
    }
}
