import { IconAwardStar } from '@/assets/icons'
import { IconInvitationMail } from '@/assets/icons/IconInvitationMail'
import { XModal } from '@/components-x/x-modal/XModal'
import { StyledButton } from '@/components/buttons/StyledButton'
import type { IInvitationEditorSchema, IWeddingGroup } from '@/modules/wedding-story-admin/services/types'
import { Form, Formik } from 'formik'
import { GroupNameInput } from '../../../create-invitation-editor/components/form-fields/GroupNameInput'
import { useInvitationEditorFormOnValidate } from '@/modules/wedding-story-admin/hooks/useInvitationEditorFormOnValidate'
import { useInvitationEditorFormInitialValues } from '@/modules/wedding-story-admin/hooks/useInvitationEditorFormInitialValues'
import { useEditWeddingGroupEditorFormOnSubmit } from '@/modules/wedding-story-admin/hooks/useEditWeddingGroupEditorFormOnSubmit'
import { GuestTableInput } from './GuestTableInput'

export const WeddingGroupEditor: React.FC<{
    open: boolean
    editGroup: (value?: boolean) => void
    weddingGroup: IWeddingGroup
}> = ({ open, editGroup, weddingGroup }) => {
    const { onSubmit } = useEditWeddingGroupEditorFormOnSubmit()
    const { validate } = useInvitationEditorFormOnValidate()
    const { initialValues } = useInvitationEditorFormInitialValues({ weddingGroup })

    return (
        <XModal open={open} fullHeight onCancel={() => editGroup(false)} title={<div>Edit Group</div>}>
            {open && (
                <Formik<IInvitationEditorSchema>
                    enableReinitialize
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={(values, formikHelpers) => onSubmit(values, formikHelpers, weddingGroup, editGroup)}
                >
                    <Form className='flex flex-col gap-4 h-full'>
                        <div className='flex flex-col gap-4 flex-auto'>
                            <div className='flex justify-center'>
                                <IconInvitationMail className='w-10 h-10 text-cText opacity-70' />
                            </div>
                            <GroupNameInput />
                            <div className='flex gap-2 my-2 justify-center'>
                                <IconAwardStar className='w-5 h-5 justify-center text-cText opacity-70' />
                            </div>
                            {weddingGroup.wedding_guests[0] && (
                                <GuestTableInput type='name1' guest={weddingGroup.wedding_guests[0]} />
                            )}
                            {weddingGroup.wedding_guests[1] && (
                                <GuestTableInput type='name2' guest={weddingGroup.wedding_guests[1]} />
                            )}
                        </div>
                        <StyledButton type='submit' className='w-full' size='large'>
                            Edit Invitation
                        </StyledButton>
                    </Form>
                </Formik>
            )}
        </XModal>
    )
}
