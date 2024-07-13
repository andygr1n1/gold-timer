import { useFormikContext } from 'formik'
import { useEffect } from 'react'
import { useProfileDetailsFormInitialValues } from './useProfileDetailsFormInitialValues'
import { IUserProfileSchema } from '../../../services'
import { useProfile$ } from '../../../stores/useProfile.store'

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
