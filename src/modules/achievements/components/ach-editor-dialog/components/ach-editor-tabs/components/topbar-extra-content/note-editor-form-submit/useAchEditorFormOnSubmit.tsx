import { type IAch } from '@/modules/achievements/services/types'
import { useFormikContext } from 'formik'

export const useAchEditorFormOnSubmit = () => {
    const formikContext = useFormikContext<IAch>()

    return { OkText: 'Save', tooltipText: '', disabled: false, isSubmitting: formikContext.isSubmitting }
}
