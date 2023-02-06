import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { Coins } from '../coins/Coins'
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher'
import { Logout } from './Logout'
import { NotificationBell } from './NotificationBell'
import { TopbarSearch } from './TopbarSearch'

export const GoalsTopbar: React.FC = observer(() => {
    return (
        <div className='flex  h-[100px] min-h-[100px] w-full flex-col-reverse items-center justify-between xl:h-[65px] xl:min-h-[65px] xl:flex-row '>
            <TopbarSearch />
            <div className='mx-3 flex items-center'>
                <div className='flex items-center justify-center gap-4'>
                    <Coins />
                    <NotificationBell />
                    <div className='mx-6 flex h-6 w-6 items-center justify-center'>
                        {!useSideMenu.is_open ? (
                            <Icon
                                icon='line-md:close-to-menu-transition'
                                className={`static right-4 top-0 cursor-pointer font-bold text-navlink hover:text-navlink-active xl:hidden`}
                                width={23}
                                height={23}
                                onClick={useSideMenu.onChange}
                            />
                        ) : // <CloseSideMenu className='!static flex' />
                        null}
                    </div>
                </div>
                {/*  <div className='mr-5 flex gap-2'>
                <SidebarLink to={APP_ROUTES_ENUM.SETTINGS}>
                    <Icon icon='material-symbols:settings-rounded' width={25} height={25} />
                </SidebarLink>
                </div> */}

                <div className='flex items-center'>
                    <ThemeSwitcher />
                    <Logout />
                </div>
            </div>
        </div>
    )
})
