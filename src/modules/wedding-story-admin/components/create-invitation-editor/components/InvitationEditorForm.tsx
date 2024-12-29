import { IconInvitationMail } from '@/assets/icons/IconInvitationMail'
import { GuestNameInput } from './form-fields/GuestNameInput'
import { GroupNameInput } from './form-fields/GroupNameInput'
import { IconAwardStar } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Form } from 'formik'
import { GuestSurnameInput } from './form-fields/GuestSurnameInput'

export const InvitationEditorForm = () => {
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
                <div className='flex gap-2 my-2 justify-center'>
                    <IconAwardStar className='w-5 h-5 justify-center text-cText opacity-70' />
                </div>
                <GuestNameInput type='name2' />
                <GuestSurnameInput type='surname2' />
            </div>
            <StyledButton type='submit' className='w-full' size='large'>
                Create Invitation
            </StyledButton>
        </Form>
    )
}
