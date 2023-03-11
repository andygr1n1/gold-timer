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
        <div className='flex  h-[65px] min-h-[65px] w-full items-center justify-between  xl:flex-row '>
            <div className='relative mx-3 flex w-full items-center justify-between '>
                <TopbarSearch />
                <div className='flex w-[100px] items-center justify-center gap-4 '>
                    <div className='flex h-6 w-6 flex-auto items-center justify-center xl:mx-6'>
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

                <div className='flex w-[100px] items-center gap-2'>
                    <Coins />
                    <NotificationBell />
                </div>

                <div className='flex w-[100px] items-center gap-2'>
                    <ThemeSwitcher />
                    <Logout />
                </div>
            </div>
        </div>
    )
})
