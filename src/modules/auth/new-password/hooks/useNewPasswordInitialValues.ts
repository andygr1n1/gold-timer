import { getParam_Code } from '@/functions/urlSearchParams'
import { IUserNewPasswordSchema } from '../services/types'

export const useNewPasswordInitialValues = (): { initialValues: IUserNewPasswordSchema } => {
    return { initialValues: { password: '', passwordRepeat: '', restoreCode: getParam_Code() } }
}
