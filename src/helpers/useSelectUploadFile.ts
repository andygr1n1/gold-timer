import { processError } from '@/helpers/processMessage'
// import { Buffer } from 'buffer'
import Compressor from 'compressorjs'

export const useSelectUploadFile = async (e: React.ChangeEvent<HTMLInputElement>, action: (src: string) => void) => {
    try {
        const file = e.target.files?.[0]
        if (!file) return
        // const buf = await file.arrayBuffer()
        // const base64 = Buffer.from(buf).toString('base64')
        // const src = `data:${file.type};base64, ${base64}`
        const imageDataUrl = await readFile(file)
        action(String(imageDataUrl))

        // this hack is to enforce file upload on selecting one artifact multiple times
        e.target.value = ''
    } catch (e) {
        processError(e)
    }
}

const readFile = (file: File): Promise<Blob | string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
        try {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result)
            getNormalizedFile(file)
                .then((normalizedFile) => reader.readAsDataURL(normalizedFile))
                .catch((error) => reject(error))
        } catch (error) {
            reject(error)
        }
    })
}

export const getNormalizedFile = (file: File): Promise<File | Blob> => {
    return new Promise((resolve, reject) => {
        new Compressor(file, {
            maxWidth: 1000,
            maxHeight: 1000,
            success(normalizedFile) {
                resolve(normalizedFile)
            },
            error(error) {
                reject(error)
            },
        })
    })
}
