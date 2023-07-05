import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { Coins } from './components/Coins'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Logout } from './components/Logout'
import { NotificationBell } from './components/NotificationBell'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { GithubLink } from './components/GithubLink'
import { RitualPower } from './components/ritual-power/RitualPower'
import { FigmaLink } from './components/FigmaLink'

export const TopBar: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    return (
        <div className='flex  h-[65px] min-h-[65px] w-full items-center justify-between xl:flex-row '>
            <div className='relative mx-3 flex w-full items-center justify-between'>
                <div className='flex w-[100px] items-start justify-start gap-4'>
                    {!isDesktop ? (
                        <div className='flex h-6 w-6 flex-auto items-center justify-start 2xl:mx-6'>
                            {!useSideMenu.is_open ? (
                                <Icon
                                    icon='line-md:close-to-menu-transition'
                                    className={`cursor-pointer text-navLink hover:text-navLink-active 2xl:hidden`}
                                    width={23}
                                    height={23}
                                    onClick={useSideMenu.onChange}
                                />
                            ) : null}
                        </div>
                    ) : import.meta.env.DEV ? (
                        <div className='flex items-center gap-2'>
                            <GithubLink />
                            <FigmaLink />
                        </div>
                    ) : null}
                </div>

                {isDesktop && (
                    <div className='flex w-[100px] items-center gap-2'>
                        <Coins />
                        <RitualPower />
                    </div>
                )}

                <div className='flex w-[100px] items-center gap-2'>
                    <NotificationBell />
                    <ThemeSwitcher />
                    <Logout />
                </div>
            </div>
        </div>
    )
})
