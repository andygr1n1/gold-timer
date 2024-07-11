import { INoteSchema, noteSchema } from '@/modules/notes/shared-services/types'
import { convertFromRaw, convertToRaw } from 'draft-js'

export const useNoteEditorFormOnValidate = () => {
    const validate = (values: INoteSchema) => {
        const result = noteSchema.safeParse(values)
        const errors: Partial<Record<keyof INoteSchema, string>> = {}
        if (!result.success) {
            for (const issue of result.error.issues) {
                const key = issue.path[0] as keyof INoteSchema
                errors[key] = issue.message
            }
        }
        const rawContentState = JSON.parse(values.description)
        const contentState = convertFromRaw(rawContentState)

        if (!convertToRaw(contentState).blocks.find((block) => !!block.text.length)) {
            errors.description = 'Required field'
        }

        return errors
    }

    return { validate }
}
