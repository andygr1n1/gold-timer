import { StyledButton } from '@/components/buttons/StyledButton'
import CreateInvitationEditor from './CreateInvitationEditor'
import { useDispatch } from 'react-redux'
import { updateField } from '../../services/weddingStoryEditorSlice'

export const CreateInvitationEditorTrigger = () => {
    const dispatch = useDispatch()
    const onOpen = () => {
        dispatch(updateField({ field: 'open', value: true }))
    }

    return (
        <>
            <div className='w-full justify-center flex md:w-auto'>
                <StyledButton className='w-full md:w-auto' variant='outlined' onClick={() => onOpen()}>
                    New invitation
                </StyledButton>
            </div>

            <CreateInvitationEditor />
        </>
    )
}
