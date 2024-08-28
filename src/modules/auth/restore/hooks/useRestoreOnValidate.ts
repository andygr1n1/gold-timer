import { type IUserRestoreSchema, userRestoreSchema } from '../services/types'

export const useRestoreOnValidate = () => {
    const validate = (values: IUserRestoreSchema) => {
        const result = userRestoreSchema.safeParse(values)
        const errors: Partial<IUserRestoreSchema> = {}
        if (!result.success) {
            for (const issue of result.error.issues) {
                errors[issue.path[0] as keyof IUserRestoreSchema] = issue.message
            }
        }

        if (!values.email.length) {
            errors.email = 'Required field'
        }

        return errors
    }

    return { validate }
}
