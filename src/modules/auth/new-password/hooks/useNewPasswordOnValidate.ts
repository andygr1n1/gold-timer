import { type IUserNewPasswordSchema, userNewPasswordSchema } from '../services/types'

export const useNewPasswordOnValidate = () => {
    const validate = (values: IUserNewPasswordSchema) => {
        const result = userNewPasswordSchema.safeParse(values)
        const errors: Partial<IUserNewPasswordSchema> = {}
        if (!result.success) {
            for (const issue of result.error.issues) {
                errors[issue.path[0] as keyof IUserNewPasswordSchema] = issue.message
            }
        }

        if (values.password !== values.passwordRepeat) {
            errors.password = 'Passwords do not match'
            errors.passwordRepeat = 'Passwords do not match'
        }
        return errors
    }

    return { validate }
}
