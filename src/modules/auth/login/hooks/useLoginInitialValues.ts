import { type IUserLoginSchema } from '../services/types'

export const useLoginInitialValues = (): { initialValues: IUserLoginSchema } => {
    return { initialValues: { email: '', password: '' } }
}
