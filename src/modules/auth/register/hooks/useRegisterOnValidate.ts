import { type IUserRegisterSchema, userRegisterSchema } from '../services/types'

export const useRegisterOnValidate = () => {
    const validate = (values: IUserRegisterSchema) => {
        const result = userRegisterSchema.safeParse(values)
        const errors: Partial<IUserRegisterSchema> = {}
        if (!result.success) {
            for (const issue of result.error.issues) {
                errors[issue.path[0] as keyof IUserRegisterSchema] = issue.message
            }
        }

        if (!values.email.length) {
            errors.email = 'Required field'
        }

        if (values.password !== values.passwordRepeat) {
            errors.password = 'Passwords do not match'
            errors.passwordRepeat = 'Passwords do not match'
        }
        return errors
    }

    return { validate }
}
