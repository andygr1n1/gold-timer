import { SidebarLinksTop } from './sidebar-components/SidebarLinksTop'
import { SidebarLinksBottom } from './sidebar-components/SidebarLinksBottom'

export const Sidebar: React.FC = () => {
    return (
        <div className='flex h-full flex-col bg-sky-600 p-5 pt-20'>
            <SidebarLinksTop />
            <SidebarLinksBottom />
        </div>
    )
}
