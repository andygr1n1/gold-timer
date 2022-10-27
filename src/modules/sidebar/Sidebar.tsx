import { SidebarLogo } from './sidebar-components/SidebarLogo'
import { SidebarLinksTop } from './sidebar-components/SidebarLinksTop'
import { SidebarLinksBottom } from './sidebar-components/SidebarLinksBottom'

export const Sidebar: React.FC = () => {
    return (
        <div className='flex h-full w-[200px] min-w-[200px] flex-col bg-blue-800 px-10 py-5'>
            <SidebarLogo />
            <SidebarLinksTop />
            <SidebarLinksBottom />
        </div>
    )
}
