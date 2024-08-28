import { type IGoalSchema, goalSchema } from '@/modules/goals/shared-service'

export const useGoalEditorFormOnValidate = () => {
    const validate = (values: IGoalSchema) => {
        const result = goalSchema.safeParse(values)
        const errors: Partial<Record<keyof IGoalSchema, string>> = {}
        if (!result.success) {
            for (const issue of result.error.issues) {
                const key = issue.path[0] as keyof IGoalSchema
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
