import { IconInvitationMail } from '@/assets/icons/IconInvitationMail'
import { GuestNameInput } from './form-fields/GuestNameInput'
import { GroupNameInput } from './form-fields/GroupNameInput'
import { IconAwardStar } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Form, useFormikContext } from 'formik'
import { GuestSurnameInput } from './form-fields/GuestSurnameInput'
import { Checkbox } from 'antd'
import type { IInvitationEditorSchema } from '@/modules/wedding-story-admin/services/types'

export const InvitationEditorForm = () => {
    const formikContext = useFormikContext<IInvitationEditorSchema>()
    const { values } = formikContext

    return (
        <Form className='flex flex-col gap-4 h-full'>
            <div className='flex flex-col gap-4 flex-auto'>
                <div className='flex justify-center'>
                    <IconInvitationMail className='w-10 h-10 text-cText opacity-70' />
                </div>
                <GroupNameInput />
                <div className='flex gap-2 my-2 justify-center'>
                    <IconAwardStar className='w-5 h-5 justify-center text-cText opacity-70' />
                </div>
                <GuestNameInput type='name1' />
                <GuestSurnameInput type='surname1' />
                {!values.solo && (
                    <>
                        <div className='flex gap-2 my-2 justify-center'>
                            <IconAwardStar className='w-5 h-5 justify-center text-cText opacity-70' />
                        </div>
                        <GuestNameInput type='name2' />
                        <GuestSurnameInput type='surname2' />
                    </>
                )}
                <div className='flex gap-2 my-2 justify-center'>
                    <IconAwardStar className='w-5 h-5 justify-center text-cText opacity-70' />
                </div>
                <div className='flex gap-2 my-2'>
                    <Checkbox
                        checked={values.solo}
                        onChange={(e) => formikContext.setFieldValue('solo', e.target.checked)}
                    >
                        Solo
                    </Checkbox>
                </div>
            </div>
            <StyledButton type='submit' className='w-full' size='large'>
                Create Invitation
            </StyledButton>
        </Form>
    )
}
