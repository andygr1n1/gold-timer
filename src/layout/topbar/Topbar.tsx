import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { Coins } from './components/Coins'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Logout } from './components/Logout'
import { NotificationBell } from './components/NotificationBell'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { GithubLink } from './components/GithubLink'
import { RitualPower } from './components/RitualPower/RitualPower'

export const TopBar: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    return (
        <div className='flex  h-[65px] min-h-[65px] w-full items-center justify-between xl:flex-row '>
            <div className='relative mx-3 flex w-full items-center justify-between'>
                <div className='flex w-[100px] items-center justify-center gap-4'>
                    {!isDesktop ? (
                        <div className='flex h-6 w-6 flex-auto items-center justify-center xl:mx-6'>
                            {!useSideMenu.is_open ? (
                                <Icon
                                    icon='line-md:close-to-menu-transition'
                                    className={`text-nav-link hover:text-nav-link-active static right-4 top-0 cursor-pointer font-bold xl:hidden`}
                                    width={23}
                                    height={23}
                                    onClick={useSideMenu.onChange}
                                />
                            ) : null}
                        </div>
                    ) : (
                        <GithubLink />
                    )}
                </div>

                <div className='flex w-[100px] items-center gap-2'>
                    <Coins />
                    <RitualPower />
                </div>

                <div className='flex w-[150px] items-center gap-2'>
                    <NotificationBell />
                    <ThemeSwitcher />
                    <Logout />
                </div>
            </div>
        </div>
    )
})
