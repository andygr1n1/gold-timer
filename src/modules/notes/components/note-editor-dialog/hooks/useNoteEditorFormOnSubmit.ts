import { type FormikHelpers } from 'formik'
import { type INoteSchema } from '@/modules/notes/shared-services/types'
import { useNoteEditor$ } from '../stores/note-editor-store/useNoteEditor.store'
import { useUpsertNote } from '../../../shared-services/upsert-note/useUpsertNote'
import { noteEditorDialog$ } from '../mst/provider'
import { notifySuccess } from '@/helpers/processMessage'

export const useNoteEditorFormOnSubmit = () => {
    const { onCancel } = useNoteEditor$()
    const { upsertNote } = useUpsertNote()

    const onSubmit = (values: INoteSchema, formikHelpers: FormikHelpers<INoteSchema>) => {
        const { setSubmitting } = formikHelpers
        const tagInput = noteEditorDialog$.tagInput
        upsertNote({
            note: {
                ...values,
                tag: tagInput.length ? `${values.tag || ''}${!!values.tag?.length ? ',' : ''}${tagInput}` : values.tag,
            },
            onSuccess: () => {
                onCancel()
                formikHelpers.resetForm()
                noteEditorDialog$.onChangeField('tagInput', '')
                notifySuccess('Note saved')
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
