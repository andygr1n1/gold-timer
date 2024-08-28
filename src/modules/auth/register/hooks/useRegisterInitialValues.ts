import { type IUserRegisterSchema } from '../services/types'

export const useRegisterInitialValues = (): { initialValues: IUserRegisterSchema } => {
    return { initialValues: { email: '', password: '', passwordRepeat: '', name: '' } }
}
