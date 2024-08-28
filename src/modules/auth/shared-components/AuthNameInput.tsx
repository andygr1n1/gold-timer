import { XInput } from '@/components-x/x-input/XInput'
import { useFormikContext } from 'formik'
import { type IBaseAuthSchema } from '../shared-services/types'

export const AuthNameInput = () => {
    const formikContext = useFormikContext<IBaseAuthSchema>()
    return (
        <XInput
            className='w-[220px]'
            placeholder='Name'
            name='name'
            value={formikContext.values.name}
            onChange={formikContext.handleChange}
            error={formikContext.touched.name && Boolean(formikContext.errors.name)}
            errorMessage={formikContext.errors.name}
        />
    )
}
