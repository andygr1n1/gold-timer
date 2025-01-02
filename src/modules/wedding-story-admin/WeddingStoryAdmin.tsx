import { ModuleWrapper } from '@/components/ModuleWrapper'
import { invitationEditorDialog$, InvitationEditorDialog$Provider } from './mst/invitationEditorDialog.provider'
import { WsTopbar } from './components/ws-topbar/WsTopbar'
import { guestsFilters$, GuestsFilters$Provider } from './mst/guestsFilters.provider'
import { WsViews } from './components/WsViews'

export const WeddingStoryAdmin: React.FC = () => {
    return (
        <InvitationEditorDialog$Provider store={invitationEditorDialog$}>
            <GuestsFilters$Provider store={guestsFilters$}>
                <ModuleWrapper topBarNodes={<WsTopbar />}>
                    <WsViews />
                </ModuleWrapper>
            </GuestsFilters$Provider>
        </InvitationEditorDialog$Provider>
    )
}
