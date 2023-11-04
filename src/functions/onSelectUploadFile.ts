import { processError } from '@/functions/processError.helper'
import { Buffer } from 'buffer'

export const onSelectUploadFile = async (e: React.ChangeEvent<HTMLInputElement>, action: (src: string) => void) => {
    try {
        const file = e.target.files?.[0]
        if (!file) return
        const buf = await file.arrayBuffer()
        const base64 = Buffer.from(buf).toString('base64')
        const src = `data:${file.type};base64, ${base64}`
        action(src)

        // this hack is to enforce file upload on selecting one artifact multiple times
        e.target.value = ''
    } catch (e) {
        processError(e)
    }
}
