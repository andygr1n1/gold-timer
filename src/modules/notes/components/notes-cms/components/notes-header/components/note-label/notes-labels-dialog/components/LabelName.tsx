import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { ICreateLabelForm } from '../service/types'

export const LabelName = () => {
    const formikContext = useFormikContext<ICreateLabelForm>()

    return (
        <div className='w-full'>
            <FormLabel title='Name' />
            <XInput
                data-testid='label-name'
                autoFocus={true}
                value={formikContext.values.name}
                name='name'
                onChange={formikContext.handleChange}
                error={formikContext.touched.name && Boolean(formikContext.errors.name)}
                errorMessage={formikContext.errors.name}
            />
        </div>
    )
}
