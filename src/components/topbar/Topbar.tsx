import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { useUserStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { CloseSideMenu } from '../sidemenu/components/Close.sidemenu'
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher'

export const GoalsTopbar: React.FC = observer(() => {
    const { coins } = useUserStore()

    // console.log('useSideMenu.is_open', useSideMenu.is_open)

    useEffect(() => {
        console.log('useSideMenu.is_open', useSideMenu.is_open)
    }, [useSideMenu.is_open])

    return (
        <div className='border-b-solid sticky top-0 z-10 flex h-[40px] min-h-[40px] w-full items-center justify-end border border-sky-500 bg-white shadow-lg'>
            <div className='m-0 flex items-center justify-center gap-2 px-3'>
                <Icon icon='ri:coins-fill' width={25} height={25} className='text-sky-600' />
                <div className='cursor-default font-mono text-lg font-extrabold text-sky-600 underline' title='coins'>
                    {coins}
                </div>
                <div className='flex h-6 w-6 items-center justify-center'>
                    {!useSideMenu.is_open ? (
                        <Icon
                            icon='line-md:close-to-menu-transition'
                            className={`text-navlink hover:text-navlink-active static right-4 top-0 cursor-pointer font-bold lg:hidden`}
                            width={23}
                            height={23}
                            onClick={useSideMenu.onChange}
                        />
                    ) : (
                        <CloseSideMenu className='!static flex' />
                    )}
                </div>
            </div>
            {/*  <div className='mr-5 flex gap-2'>
                <SidebarLink to={APP_ROUTES_ENUM.SETTINGS}>
                    <Icon icon='material-symbols:settings-rounded' width={25} height={25} />
                </SidebarLink>
            </div> */}
            <ThemeSwitcher />
        </div>
    )
})
