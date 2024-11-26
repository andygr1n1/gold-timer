import { StyledButton } from '@/components/buttons/StyledButton'
import { useInvitationEditorDialog$ } from '../../mst/invitationEditorDialog.provider'
import CreateInvitationEditor from './CreateInvitationEditor'

export const CreateInvitationEditorTrigger: React.FC = () => {
    const { onOpen } = useInvitationEditorDialog$()

    return (
        <>
            <div className='w-full justify-end flex'>
                <StyledButton size='small' onClick={() => onOpen()}>
                    New invitation
                </StyledButton>
            </div>

            <CreateInvitationEditor />
        </>
    )
}
