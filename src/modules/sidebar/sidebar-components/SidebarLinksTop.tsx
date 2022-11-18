import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { SidebarLinkCreator } from './SidebarLinkCreator'
import { SidebarLink } from './SidebarLink'
import { Icon } from '@iconify/react'

export const SidebarLinksTop: React.FC = () => {
    return (
        <div className=' flex flex-auto flex-col gap-8 '>
            <SidebarLink to={APP_ROUTES_ENUM.GOALS}>
                <Icon icon='ic:round-dashboard' className='text-2xl' />
            </SidebarLink>
            <SidebarLinkCreator />
            <SidebarLink to={APP_ROUTES_ENUM.E_MONEY}>
                <Icon icon='fluent-emoji-flat:money-with-wings' className='text-2xl' />
            </SidebarLink>
        </div>
    )
}
