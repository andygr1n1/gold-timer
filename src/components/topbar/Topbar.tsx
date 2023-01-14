import { useSideMenu } from '@/hooks/useToggleSideMenu.hook'
import { useUserStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const GoalsTopbar: React.FC = observer(() => {
    const { coins } = useUserStore()

    return (
        <div className='border-b-solid sticky top-0 z-10 flex h-[40px] min-h-[40px] w-full items-center justify-end border border-sky-500 bg-white shadow-lg'>
            <div className='m-0 flex items-center justify-center gap-2 px-3'>
                <Icon icon='ri:coins-fill' width={25} height={25} className='text-sky-600' />
                <div className='cursor-default font-mono text-lg font-extrabold text-sky-600 underline' title='coins'>
                    {coins}
                </div>
                <Icon
                    icon='line-md:close-to-menu-transition'
                    className='cursor-pointer font-bold hover:text-blue-500 lg:hidden'
                    height={23}
                    width={23}
                    onClick={useSideMenu.onChange}
                />
            </div>
            {/*  <div className='mr-5 flex gap-2'>
                <SidebarLink to={APP_ROUTES_ENUM.SETTINGS}>
                    <Icon icon='material-symbols:settings-rounded' width={25} height={25} />
                </SidebarLink>
            </div> */}
        </div>
    )
})
