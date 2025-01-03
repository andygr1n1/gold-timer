import { ModuleWrapper } from '@/components/ModuleWrapper'
import { WsTopbar } from './components/ws-topbar/WsTopbar'
import { WeddingStoryViews } from './WeddingStoryViews'

export const WeddingStoryAdmin = () => {
    return (
        <ModuleWrapper topBarNodes={<WsTopbar />}>
            <WeddingStoryViews />
        </ModuleWrapper>
    )
}
