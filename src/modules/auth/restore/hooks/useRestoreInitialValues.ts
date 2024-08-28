import { type IUserRestoreSchema } from '../services/types'

export const useRestoreInitialValues = (): { initialValues: IUserRestoreSchema } => {
    return { initialValues: { email: '' } }
}
