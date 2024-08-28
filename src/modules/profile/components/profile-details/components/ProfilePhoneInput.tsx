import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { type IUserProfileSchema } from '@/modules/profile/services'
import { useProfile$ } from '@/modules/profile/stores/useProfile.store'

export const ProfilePhoneInput = () => {
    const { viewMode } = useProfile$()
    const formikContext = useFormikContext<IUserProfileSchema>()

    return (
        <div>
            <FormLabel title='Phone' />
            <XInput
                data-testid='profile-phone-input'
                disabled={viewMode}
                readOnly={viewMode}
                value={formikContext.values.phone || ''}
                name='phone'
                placeholder='Phone'
                onChange={formikContext.handleChange}
                error={formikContext.touched.phone && Boolean(formikContext.errors.phone)}
                errorMessage={formikContext.errors.phone}
            />
        </div>
    )
}
