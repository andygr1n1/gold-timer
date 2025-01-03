import { ModuleWrapper } from '@/components/ModuleWrapper'
import { invitationEditorDialog$, InvitationEditorDialog$Provider } from './mst/invitationEditorDialog.provider'
import { WsTopbar } from './components/ws-topbar/WsTopbar'
import { WeddingStoryViews } from './WeddingStoryViews'

export const WeddingStoryAdmin: React.FC = () => {
    return (
        <InvitationEditorDialog$Provider store={invitationEditorDialog$}>
            <ModuleWrapper topBarNodes={<WsTopbar />}>
                <WeddingStoryViews />
            </ModuleWrapper>
        </InvitationEditorDialog$Provider>
    )
}
