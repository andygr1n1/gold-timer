import { type IUserProfilePasswordSchema } from '../../../services'

export const useUserProfilePasswordFormOnValidate = () => {
    const validate = (values: IUserProfilePasswordSchema) => {
        const errors: Partial<Record<keyof IUserProfilePasswordSchema, string>> = {}

        if (values.repeatNewPassword !== values.newPassword) {
            errors.repeatNewPassword = 'Repeated password does not match the new password'
            errors.newPassword = 'Passwords do not match'
        }

        if (!values.password.length) {
            errors.password = 'Required field'
        }

        if (!values.newPassword.length) {
            errors.newPassword = 'Required field'
        }

        if (!values.repeatNewPassword.length) {
            errors.repeatNewPassword = 'Required field'
        }

        return errors
    }

    return { validate }
}
