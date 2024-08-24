import { FormikHelpers } from 'formik'
import { INoteSchema } from '@/modules/notes/shared-services/types'
import { useNoteEditor$ } from '../stores/note-editor-store/useNoteEditor.store'
import { useUpsertNote } from '../../../shared-services/upsert-note/useUpsertNote'
import { noteEditorDialog$ } from '../mst/provider'
import { useMs } from '@/hooks/useMs'

export const useNoteEditorFormOnSubmit = () => {
    const { onCancel } = useNoteEditor$()
    const { upsertNote } = useUpsertNote()
    const { msSuccess } = useMs()

    const onSubmit = (values: INoteSchema, formikHelpers: FormikHelpers<INoteSchema>) => {
        const { setSubmitting } = formikHelpers
        const tagInput = noteEditorDialog$.tagInput
        console.log('values', values)
        upsertNote({
            note: {
                ...values,
                tag: tagInput.length ? `${values.tag || ''}${!!values.tag?.length ? ',' : ''}${tagInput}` : values.tag,
            },
            onSuccess: () => {
                onCancel()
                formikHelpers.resetForm()
                noteEditorDialog$.onChangeField('tagInput', '')
                msSuccess()
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
