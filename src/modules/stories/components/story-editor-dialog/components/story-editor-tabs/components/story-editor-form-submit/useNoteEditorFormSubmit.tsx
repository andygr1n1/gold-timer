import { type INewStorySchema } from '@/modules/stories/services/types'
import { useFormikContext } from 'formik'

export const useNoteEditorFormSubmit = () => {
    const formikContext = useFormikContext<INewStorySchema>()

    return { OkText: 'Save', tooltipText: '', disabled: false, isSubmitting: formikContext.isSubmitting }
}
