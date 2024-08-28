import { XInput } from '@/components-x/x-input/XInput'
import { useFormikContext } from 'formik'
import { type IBaseAuthSchema } from '../shared-services/types'

export const AuthEmailInput = () => {
    const formikContext = useFormikContext<IBaseAuthSchema>()
    return (
        <XInput
            autoComplete='email'
            className='w-[220px]'
            placeholder='Email'
            name='email'
            value={formikContext.values.email}
            onChange={formikContext.handleChange}
            error={formikContext.touched.email && Boolean(formikContext.errors.email)}
            errorMessage={formikContext.errors.email}
        />
    )
}
