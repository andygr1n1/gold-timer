import { type IUserLoginSchema, userLoginSchema } from '../services/types'

export const useLoginOnValidate = () => {
    const validate = (values: IUserLoginSchema) => {
        const result = userLoginSchema.safeParse(values)

        if (!result.success) {
            const errors: Partial<IUserLoginSchema> = {}
            for (const issue of result.error.issues) {
                errors[issue.path[0] as keyof IUserLoginSchema] = issue.message
            }
            if (!values.email.length) {
                errors.email = 'Required field'
            }
            return errors
        }

        return {}
    }

    return { validate }
}
