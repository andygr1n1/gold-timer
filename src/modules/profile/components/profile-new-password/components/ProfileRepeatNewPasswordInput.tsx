import { XInput } from '@/components-x/x-input/XInput'
import { useFormikContext } from 'formik'
import { type IUserProfilePasswordSchema } from '@/modules/profile/services'
import { FormLabel } from '@/components/form/FormLabel'

export const ProfileRepeatNewPasswordInput = () => {
    const formikContext = useFormikContext<IUserProfilePasswordSchema>()

    return (
        <div>
            <FormLabel title='Repeat new password' />
            <XInput
                placeholder='****'
                type={'password'}
                autoComplete='off'
                name={'repeatNewPassword'}
                onChange={formikContext.handleChange}
                value={formikContext.values.repeatNewPassword}
                error={formikContext.touched.repeatNewPassword && Boolean(formikContext.errors.repeatNewPassword)}
                errorMessage={formikContext.errors.repeatNewPassword}
            />
        </div>
    )
}
