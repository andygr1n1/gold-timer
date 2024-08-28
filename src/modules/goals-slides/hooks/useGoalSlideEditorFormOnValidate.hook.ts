import { type IGoalSlideSchema, goalSlideFormSchema } from '../service/types'

export const useGoalSlideEditorFormOnValidate = () => {
    const validate = (values: IGoalSlideSchema) => {
        const result = goalSlideFormSchema.safeParse(values)
        const errors: Partial<Record<keyof IGoalSlideSchema, string>> = {}
        if (!result.success) {
            for (const issue of result.error.issues) {
                const key = issue.path[0] as keyof IGoalSlideSchema
                errors[key] = issue.message
            }
        }

        if (!values.title.length) {
            errors.title = 'Required field'
        }

        return errors
    }

    return { validate }
}
