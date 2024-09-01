import { type FormikHelpers } from 'formik'
import { useStoryEditorDialog$ } from '../mst/provider'
import { type INewStorySchema } from '@/modules/stories/services/types'
import { useInsertStory } from '@/modules/stories/services/insert-story/useInsertStory'
import { notifySuccess } from '@/helpers/processMessage'

export const useStoryEditorFormOnSubmit = () => {
    const { onClose } = useStoryEditorDialog$()
    const { insertStory, updateStory } = useInsertStory()

    const onSubmit = (values: INewStorySchema, formikHelpers: FormikHelpers<INewStorySchema>) => {
        const { setSubmitting } = formikHelpers


      values.id
          ? updateStory({
                values,
                onSuccess: () => {
                    onClose()
                    formikHelpers.resetForm()
                    notifySuccess('Story updated')
                },
                onSettled: () => {
                    setSubmitting(false)
                },
            })
          : insertStory({
                values,
                onSuccess: () => {
                    onClose()
                    formikHelpers.resetForm()
                    notifySuccess('Story saved')
                },
                onSettled: () => {
                    setSubmitting(false)
                },
            })
    }

    return { onSubmit }
}
