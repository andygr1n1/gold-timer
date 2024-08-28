import { Formik } from 'formik'
import { NoteEditorForm } from './NoteEditorForm'
import { type INoteSchema } from '@/modules/notes/shared-services/types'
import { useNoteEditorFormInitialValues } from '../hooks/useNoteEditorFormInitialValues'
import { useNoteEditorFormOnValidate } from '../hooks/useNoteEditorFormOnValidate'
import { useNoteEditorFormOnSubmit } from '../hooks/useNoteEditorFormOnSubmit'

/**
 * @goalId toggle between new note and edit note
 */
const NoteEditor = () => {
    const { onSubmit } = useNoteEditorFormOnSubmit()
    const { validate } = useNoteEditorFormOnValidate()
    const { initialValues } = useNoteEditorFormInitialValues()

    return (
        <Formik<INoteSchema> enableReinitialize initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <NoteEditorForm />
        </Formik>
    )
}

export default NoteEditor
