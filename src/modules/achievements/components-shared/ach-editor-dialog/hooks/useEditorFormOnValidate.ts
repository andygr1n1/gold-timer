import { type IAchSchema, achSchema } from '@/modules/achievements/services/types'

export const useEditorFormOnValidate = () => {
    const validate = (values: IAchSchema) => {
        const result = achSchema.safeParse(values)
        const errors: Partial<Record<keyof IAchSchema, string>> = {}
        if (!result.success) {
            for (const issue of result.error.issues) {
                const key = issue.path[0] as keyof IAchSchema
                errors[key] = issue.message
            }
        }

        if (!values.title.length) {
            errors.title = 'Required field'
        }

        if (!values.img_path.length && !values.img_src?.length) {
            errors.img_src = 'Required field'
        }

        return errors
    }

    return { validate }
}