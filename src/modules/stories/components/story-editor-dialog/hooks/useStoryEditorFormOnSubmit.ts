import { type FormikHelpers } from 'formik'
import { useStoryEditorDialog$ } from '../mst/provider'
import { useMs } from '@/hooks/useMs'
import { type INewStorySchema } from '@/modules/stories/services/types'
import { useInsertStory } from '@/modules/stories/services/insert-story/useInsertStory'

export const useStoryEditorFormOnSubmit = () => {
    const { onChangeField } = useStoryEditorDialog$()
    const { insertStory } = useInsertStory()
    const { msSuccess } = useMs()

    const onSubmit = (values: INewStorySchema, formikHelpers: FormikHelpers<INewStorySchema>) => {
        const { setSubmitting } = formikHelpers
        insertStory({
            values,
            onSuccess: () => {
                onChangeField('open', false)
                formikHelpers.resetForm()
                msSuccess()
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
