import { XInput } from '@/components-x/x-input/XInput'
import { useFormikContext } from 'formik'
import { type IUserProfilePasswordSchema } from '@/modules/profile/services'
import { FormLabel } from '@/components/form/FormLabel'

export const ProfilePasswordInput = () => {
    const formikContext = useFormikContext<IUserProfilePasswordSchema>()

    return (
        <div>
            <FormLabel title='Password' />
            <XInput
                autoComplete='off'
                placeholder='****'
                type={'password'}
                name={'password'}
                onChange={formikContext.handleChange}
                value={formikContext.values.password}
                error={formikContext.touched.password && Boolean(formikContext.errors.password)}
                errorMessage={formikContext.errors.password}
            />
        </div>
    )
}
