import { useMutation } from '@tanstack/react-query'
import { validation_noteLabelName } from './validation_noteLabelName'
import { type ICreateLabelForm } from '../../../service/types'
import { useFormikContext } from 'formik'

export const useValidateNoteLabelName = () => {
    const formikContext = useFormikContext<ICreateLabelForm>()
    const mutation = useMutation({
        mutationFn: ({ value }: { value: string }) => validation_noteLabelName({ value }),
        onSuccess: (res) => {
            formikContext.setFieldValue('duplicateName', !!!res?.length)
        },
    })

    const validateName = ({ value }: { value: string }) => {
        mutation.mutate({ value })
    }

    return { validateName }
}
