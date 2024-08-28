import {
    type IUserProfilePasswordSchema,
    type IUserProfileSchema,
    useFetchProfileInfo,
} from '../../../services/index.ts'

export const useUserProfilePasswordFormInitialValues = () => {
    const { data, isLoading } = useFetchProfileInfo()
    const initialValues: IUserProfilePasswordSchema = initialData({ user: data })

    return { initialValues, isLoading }
}

const initialData = ({ user }: { user: IUserProfileSchema | undefined }): IUserProfilePasswordSchema => ({
    email: user?.email || '',
    password: '',
    newPassword: '',
    repeatNewPassword: '',
})
