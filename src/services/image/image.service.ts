import { getUserId } from '@/helpers/getUserId'
import { processError } from '@/helpers/processMessage'
import axios from 'axios'

export interface IUploadImgRes {
    fileName: string
}

export const uploadNewImageToServer = async (imgBase64: string, route: string): Promise<string | undefined> => {
    try {
        const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
        const xapikey = import.meta.env.VITE_X_API_KEY

        const formData = new FormData()
        formData.append('base64', imgBase64)
        formData.append('userId', getUserId())

        const { data, status } = await axios<IUploadImgRes>({
            method: 'POST',
            headers: {
                'x-api-key': xapikey,
                'Content-Type': 'multipart/form-data',
            },
            url: `${endpoint}${route}`,
            data: formData,
        })

        if (status !== 200) throw new Error(`uploadNewImage: ${status}`)
        return data?.fileName
    } catch (e) {
        processError(e)
        return
    }
}

export const deleteImageFromServer = async (imgTitle: string, route: string): Promise<string | undefined> => {
    try {
        const endpoint = import.meta.env.VITE_NODE_HEROKU_ORIGIN
        const xapikey = import.meta.env.VITE_X_API_KEY

        const formData = new FormData()
        formData.append('imgTitle', imgTitle)

        const { data, status } = await axios<IUploadImgRes>({
            method: 'POST',
            headers: {
                'x-api-key': xapikey,
                'Content-Type': 'multipart/form-data',
            },
            // url: `${endpoint}sprint-image-delete`,
            url: `${endpoint}${route}`,
            data: formData,
        })

        if (status !== 200) throw new Error(`deleteImage: ${status}`)
        return data?.fileName
    } catch (e) {
        processError(e)
        return
    }
}
