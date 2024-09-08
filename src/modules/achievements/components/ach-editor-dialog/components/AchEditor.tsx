import { type IAchEditor } from '@/modules/achievements/services/types'
import { Formik } from 'formik'
import { AchEditorForm } from './AchEditorForm'
import { useEditorFormOnSubmit } from '../hooks/useEditorFormOnSubmit'
import { useEditorFormOnValidate } from '../hooks/useEditorFormOnValidate'
import { useAchEditorInitialValues } from '../hooks/useAchEditorInitialValues'

/**
 * @goalId toggle between new note and edit note
 */
const AchEditor = () => {
    const { onSubmit } = useEditorFormOnSubmit()
    const { validate } = useEditorFormOnValidate()
    const { initialValues } = useAchEditorInitialValues()

    return (
        <Formik<IAchEditor> enableReinitialize initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <AchEditorForm />
        </Formik>
    )
}

export default AchEditor
