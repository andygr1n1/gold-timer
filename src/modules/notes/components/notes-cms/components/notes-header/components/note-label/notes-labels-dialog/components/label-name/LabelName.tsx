import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { type ICreateLabelForm } from '../../service/types'
import { useCallback, useMemo } from 'react'
import { debounce } from 'lodash-es'
import { useValidateNoteLabelName } from './service/useValidateNoteLabelName'

export const LabelName = () => {
    const formikContext = useFormikContext<ICreateLabelForm>()

    const { validateName } = useValidateNoteLabelName()

    const sendRequest = useCallback((value: string) => {
        validateName({ value })
    }, [])

    const onChange = useMemo(() => {
        return debounce(sendRequest, 300)
    }, [sendRequest])

    return (
        <div className='w-full'>
            <FormLabel title='Name' />
            <XInput
                data-testid='label-name'
                autoFocus={true}
                value={formikContext.values.name}
                name='name'
                onChange={(e) => {
                    formikContext.handleChange(e)
                    onChange(e.target.value)
                }}
                error={formikContext.touched.name && Boolean(formikContext.errors.name)}
                errorMessage={formikContext.errors.name}
            />
        </div>
    )
}
