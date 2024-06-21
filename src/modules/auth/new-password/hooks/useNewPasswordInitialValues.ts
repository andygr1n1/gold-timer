import { getParam_Code } from '@/helpers/urlSearchParams'
import { IUserNewPasswordSchema } from '../services/types'

export const useNewPasswordInitialValues = (): { initialValues: IUserNewPasswordSchema } => {
    return { initialValues: { password: '', passwordRepeat: '', restoreCode: getParam_Code() } }
}
