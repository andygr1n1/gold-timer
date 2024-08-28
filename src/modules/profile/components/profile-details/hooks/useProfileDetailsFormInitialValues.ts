import { type IUserProfileSchema, useFetchProfileInfo } from '../../../services/index.ts'

export const useProfileDetailsFormInitialValues = () => {
    const { data, isLoading } = useFetchProfileInfo()
    const initialValues: IUserProfileSchema = initialData()

    return { initialValues: data || initialValues, isLoading }
}

const initialData = (): IUserProfileSchema => ({
    id: crypto.randomUUID(),
    birthday: null,
    email: '',
    name: '',
    phone: '',
    avatar: '',
})
