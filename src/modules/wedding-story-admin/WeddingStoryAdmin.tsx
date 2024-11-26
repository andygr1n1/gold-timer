import { ModuleWrapper } from '@/components/ModuleWrapper'
import { GuestsIndex } from './components/guests/GuestsIndex'
import { invitationEditorDialog$, InvitationEditorDialog$Provider } from './mst/invitationEditorDialog.provider'
import { WsTopbar } from './components/ws-topbar/WsTopbar'
import { guestsFilters$, GuestsFilters$Provider } from './mst/guestsFilters.provider'

export const WeddingStoryAdmin: React.FC = () => {
    return (
        <InvitationEditorDialog$Provider store={invitationEditorDialog$}>
            <GuestsFilters$Provider store={guestsFilters$}>
                <ModuleWrapper topBarNodes={<WsTopbar />}>
                    <GuestsIndex />
                </ModuleWrapper>
            </GuestsFilters$Provider>
        </InvitationEditorDialog$Provider>
    )
}
