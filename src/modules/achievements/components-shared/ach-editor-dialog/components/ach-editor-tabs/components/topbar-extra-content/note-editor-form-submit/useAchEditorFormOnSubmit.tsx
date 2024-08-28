import { type IAchSchema } from '@/modules/achievements/services/types'
import { useFormikContext } from 'formik'

export const useAchEditorFormOnSubmit = () => {
    const formikContext = useFormikContext<IAchSchema>()

    return { OkText: 'Save', tooltipText: '', disabled: false, isSubmitting: formikContext.isSubmitting }
}
