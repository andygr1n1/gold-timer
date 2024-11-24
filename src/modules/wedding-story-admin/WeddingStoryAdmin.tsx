import { StyledButton } from '@/components/buttons/StyledButton'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { GuestsIndex } from './components/guests/GuestsIndex'
import CreateInvitationEditor from './components/create-invitation-editor/CreateInvitationEditor'
import { invitationEditorDialog$, InvitationEditorDialog$Provider } from './mst/provider'

export const WeddingStoryAdmin: React.FC = () => {
    return (
        <ModuleWrapper>
            <InvitationEditorDialog$Provider store={invitationEditorDialog$}>
                <div className='w-full justify-end flex'>
                    <StyledButton onClick={() => invitationEditorDialog$.onOpen()}>Create an Invitation</StyledButton>
                </div>

                <CreateInvitationEditor />
            </InvitationEditorDialog$Provider>
            <GuestsIndex />
        </ModuleWrapper>
    )
}
