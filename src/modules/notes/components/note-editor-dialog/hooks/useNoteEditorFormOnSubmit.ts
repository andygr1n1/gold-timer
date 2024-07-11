import { FormikHelpers } from 'formik'
import { INoteSchema } from '@/modules/notes/shared-services/types'
import { useNoteEditor$ } from '../stores/note-editor-store/useNoteEditor.store'
import { useUpsertNote } from '../../../shared-services/upsert-note/useUpsertNote'

export const useNoteEditorFormOnSubmit = () => {
    const { onCancel } = useNoteEditor$()
    const { upsertNote } = useUpsertNote()

    const onSubmit = (values: INoteSchema, formikHelpers: FormikHelpers<INoteSchema>) => {
        const { setSubmitting } = formikHelpers

        upsertNote({
            note: values,
            onSuccess: () => {
                onCancel()
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
