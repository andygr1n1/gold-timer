import { Formik } from 'formik'
import { type INewStorySchema } from '@/modules/stories/services/types'
import { useStoryEditorFormOnSubmit } from '../hooks/useStoryEditorFormOnSubmit'
import { useStoryEditorFormOnValidate } from '../hooks/useStoryEditorFormOnValidate'
import { useStoryEditorFormInitialValues } from '../hooks/useStoryEditorFormInitialValues'
import { StoryEditorForm } from './StoryEditorForm'

const StoryEditor = () => {
    const { onSubmit } = useStoryEditorFormOnSubmit()
    const { validate } = useStoryEditorFormOnValidate()
    const { initialValues } = useStoryEditorFormInitialValues()

    return (
        <Formik<INewStorySchema>
            enableReinitialize
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            <StoryEditorForm />
        </Formik>
    )
}

export default StoryEditor
