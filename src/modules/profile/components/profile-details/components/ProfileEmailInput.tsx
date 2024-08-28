import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { type IUserProfileSchema } from '@/modules/profile/services'

export const ProfileEmailInput = () => {
    const formikContext = useFormikContext<IUserProfileSchema>()

    return (
        <div>
            <FormLabel title='Email' />
            <XInput
                data-testid='profile-email-input'
                disabled={true}
                readOnly={true}
                autoFocus={true}
                value={formikContext.values.email}
                name='email'
                placeholder='Email'
                onChange={formikContext.handleChange}
                error={formikContext.touched.email && Boolean(formikContext.errors.email)}
                errorMessage={formikContext.errors.email}
            />
        </div>
    )
}
