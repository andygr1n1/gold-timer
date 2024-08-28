import { extractTextFromHtml } from '@/helpers/extractTextFromHtml'
import { type INoteSchema } from '@/modules/notes/shared-services/types'

export const useNoteEditorFormOnValidate = () => {
    const validate = (values: INoteSchema) => {
        const errors: Partial<Record<keyof INoteSchema, string>> = {}

        if (!extractTextFromHtml(values.description).length) {
            errors.description = 'Required field'
        }

        return errors
    }

    return { validate }
}
