import { XInput } from '@/components-x/x-input/XInput'
import { useFormikContext } from 'formik'
import { type IBaseAuthSchema } from '../shared-services/types'

export const AuthPasswordInput: React.FC<{ repeatType?: boolean }> = ({ repeatType = false }) => {
    const formikContext = useFormikContext<IBaseAuthSchema>()

    return (
        <XInput
            autoComplete='off'
            className='w-[220px]'
            placeholder='****'
            type={'password'}
            name={repeatType ? 'passwordRepeat' : 'password'}
            onChange={formikContext.handleChange}
            value={repeatType ? formikContext.values.passwordRepeat : formikContext.values.password}
            error={
                repeatType
                    ? formikContext.touched.passwordRepeat && Boolean(formikContext.errors.passwordRepeat)
                    : formikContext.touched.password && Boolean(formikContext.errors.password)
            }
            errorMessage={repeatType ? formikContext.errors.passwordRepeat : formikContext.errors.password}
        />
    )
}
