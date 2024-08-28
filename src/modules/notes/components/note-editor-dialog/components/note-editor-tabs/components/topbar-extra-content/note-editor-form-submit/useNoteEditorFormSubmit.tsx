import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'

export const useNoteEditorFormSubmit = () => {
    const formikContext = useFormikContext<IGoalSchema>()

    return { OkText: 'Save', tooltipText: '', disabled: false, isSubmitting: formikContext.isSubmitting }
}
