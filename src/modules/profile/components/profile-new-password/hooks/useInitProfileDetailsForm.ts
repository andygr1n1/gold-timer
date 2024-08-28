import { useFormikContext } from 'formik'
import { useEffect } from 'react'
import { type IUserProfileSchema } from '../../../services'
import { useProfile$ } from '../../../stores/useProfile.store'
import { useProfileDetailsFormInitialValues } from '../../profile-details/hooks/useProfileDetailsFormInitialValues'

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
