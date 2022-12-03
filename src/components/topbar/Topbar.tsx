import { SidebarLinkCreator } from '@/modules/sidebar/sidebar-components/SidebarLinkCreator'
import { useUserStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const GoalsTopbar: React.FC = observer(() => {
    const { coins } = useUserStore()

    return (
        <div className='sticky top-0 z-50 flex h-[40px] min-h-[40px] w-full items-center justify-between bg-white'>
            <div className='px-3'>
                <SidebarLinkCreator />
            </div>
            <Icon icon='octicon:goal-16' width={25} height={25} className='text-sky-700' />
            <div className='m-0 flex items-center justify-center gap-2 px-3'>
                <Icon icon='ri:coins-fill' width={25} height={25} className='text-teal-600' />
                <div className='cursor-default font-mono text-lg font-extrabold text-teal-600' title='coins'>
                    {coins}
                </div>
            </div>
        </div>
    )
})
