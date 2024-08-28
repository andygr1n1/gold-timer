import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { type IUserProfileSchema } from '@/modules/profile/services'
import { useProfile$ } from '@/modules/profile/stores/useProfile.store'

export const ProfileNameInput = () => {
    const { viewMode } = useProfile$()
    const formikContext = useFormikContext<IUserProfileSchema>()

    return (
        <div>
            <FormLabel title='Name' />
            <XInput
                data-testid='profile-name-input'
                disabled={viewMode}
                readOnly={viewMode}
                autoFocus={true}
                value={formikContext.values.name}
                name='name'
                placeholder='Name'
                onChange={formikContext.handleChange}
                error={formikContext.touched.name && Boolean(formikContext.errors.name)}
                errorMessage={formikContext.errors.name}
            />
        </div>
    )
}
