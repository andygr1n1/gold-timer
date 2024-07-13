import { IUserProfileSchema, userProfileSchema } from '../../../services'

export const useProfileDetailsFormOnValidate = () => {
    const validate = (values: IUserProfileSchema) => {
        const result = userProfileSchema.safeParse(values)
        const errors: Partial<Record<keyof IUserProfileSchema, string>> = {}
        if (!result.success) {
            for (const issue of result.error.issues) {
                const key = issue.path[0] as keyof IUserProfileSchema
                errors[key] = issue.message
            }
        }

        if (!values.name.length) {
            errors.name = 'Required field'
        }
        console.log('errors', errors)
        return errors
    }

    return { validate }
}
