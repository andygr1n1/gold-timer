import { ModuleWrapper } from '@/components/ModuleWrapper'
import { GuestsIndex } from './components/guests/GuestsIndex'
import { invitationEditorDialog$, InvitationEditorDialog$Provider } from './mst/provider'
import { WsTopbar } from './components/ws-topbar/WsTopbar'

export const WeddingStoryAdmin: React.FC = () => {
    return (
        <InvitationEditorDialog$Provider store={invitationEditorDialog$}>
            <ModuleWrapper topBarNodes={<WsTopbar />}>
                <GuestsIndex />
            </ModuleWrapper>
        </InvitationEditorDialog$Provider>
    )
}
