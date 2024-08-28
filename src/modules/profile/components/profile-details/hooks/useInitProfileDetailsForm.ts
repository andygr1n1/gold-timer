import { useFormikContext } from 'formik'
import { useEffect } from 'react'
import { useProfileDetailsFormInitialValues } from './useProfileDetailsFormInitialValues'
import { useProfile$ } from '../../../stores/useProfile.store'
import type { IUserProfileSchema } from '@/modules/profile/services'

export const useInitProfileDetailsForm = () => {
    const { viewMode } = useProfile$()
    const { initialValues, isLoading } = useProfileDetailsFormInitialValues()
    const formikContext = useFormikContext<IUserProfileSchema>()

    useEffect(() => {
        formikContext.setFormikState((prevState) => ({
            ...prevState,
            values: initialValues,
        }))
    }, [viewMode])

    return { isLoading, viewMode }
}
