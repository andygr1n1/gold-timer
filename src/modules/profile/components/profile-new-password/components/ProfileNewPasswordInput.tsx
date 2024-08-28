import { XInput } from '@/components-x/x-input/XInput'
import { useFormikContext } from 'formik'
import { type IUserProfilePasswordSchema } from '@/modules/profile/services'
import { FormLabel } from '@/components/form/FormLabel'

export const ProfileNewPasswordInput = () => {
    const formikContext = useFormikContext<IUserProfilePasswordSchema>()

    return (
        <div>
            <FormLabel title='New password' />
            <XInput
                autoComplete='new-password'
                placeholder='****'
                type='password'
                name='newPassword'
                onChange={formikContext.handleChange}
                value={formikContext.values.newPassword}
                error={formikContext.touched.newPassword && Boolean(formikContext.errors.newPassword)}
                errorMessage={formikContext.errors.newPassword}
            />
        </div>
    )
}
