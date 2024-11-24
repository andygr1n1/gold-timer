import { Formik } from 'formik'
import { InvitationEditorForm } from './InvitationEditorForm'
import type { IInvitationEditorSchema } from '@/modules/wedding-story-admin/types'
import { useInvitationEditorFormOnSubmit } from '@/modules/wedding-story-admin/hooks/useInvitationEditorFormOnSubmit'
import { useInvitationEditorFormOnValidate } from '@/modules/wedding-story-admin/hooks/useInvitationEditorFormOnValidate'
import { useInvitationEditorFormInitialValues } from '@/modules/wedding-story-admin/hooks/useInvitationEditorFormInitialValues'

const InvitationEditor = () => {
    const { onSubmit } = useInvitationEditorFormOnSubmit()
    const { validate } = useInvitationEditorFormOnValidate()
    const { initialValues } = useInvitationEditorFormInitialValues()

    return (
        <Formik<IInvitationEditorSchema>
            enableReinitialize
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            <InvitationEditorForm />
        </Formik>
    )
}

export default InvitationEditor
