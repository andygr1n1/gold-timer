import { type IAchEditor, achSchema } from '@/modules/achievements/services/types'

export const useEditorFormOnValidate = () => {
    const validate = (values: IAchEditor) => {
        const result = achSchema.safeParse(values)
        const errors: Partial<Record<keyof IAchEditor, string>> = {}
        if (!result.success) {
            for (const issue of result.error.issues) {
                const key = issue.path[0] as keyof IAchEditor
                errors[key] = issue.message
            }
        }

        if (!values.title.length) {
            errors.title = 'Required field'
        }

        if (!values.img_path?.length && !values.img_src?.length) {
            errors.img_src = 'Required field'
        }

        return errors
    }

    return { validate }
}
