import { APP_ROUTES_ENUM } from '@/services/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { observer } from 'mobx-react-lite'
import { SideMenuLink } from './components/SideMenuLink'
import { useOutsideAlerter } from '@/hooks/useClickOutside.hook'
import { useEffect, useRef } from 'react'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { GoToDashboard } from './components/GoToDashboard'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { UserInfo } from './components/user-info/UserInfo'
import { cn } from '@/helpers/cn'
import { IconFocus } from '@/assets/icons/IconFocus'
import { IconBook } from '@/assets/icons/IconBook'
import { IconProfile } from '@/assets/icons/IconProfile'
import { IconAchievements } from '@/assets/icons/IconAchievements'
import { IconLandscape } from '@/assets/icons/IconLandscape'
import { IconBell } from '@/assets/icons'
import { IconSprint } from '@/assets/icons/IconSprint'

const SideMenu: React.FC = observer(() => {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    const onClose = () => {
        useSideMenu.onChange()
    }

    useOutsideAlerter(wrapperRef, onClose, isDesktop)

    useEffect(() => {
        isDesktop && useSideMenu.is_open && onClose()
    }, [isDesktop])

    if (!isDesktop && useSideMenu.is_detached_from_DOM) return null

    return (
        <>
            <div
                className={cn(
                    useSideMenu.is_open && 'fixed  animate-opacity-3',
                    'inset-0 animate-opacity-3 bg-gray-900 bg-opacity-90',
                )}
                style={{ zIndex: 100 }}
            />
            <div
                ref={wrapperRef}
                className={`${
                    useSideMenu.is_open ? 'animate-slide-in' : 'animate-slide-out lg:animate-opacity ml-[-320px] '
                }
                text-cText bg-global-2-bg font-kzen  absolute left-0 z-[120] flex h-full shadow-md shadow-black/20
               lg:static  lg:m-0 lg:mr-0 lg:flex
            `}
            >
                <div className='flex w-[230px] min-w-[230px] flex-col overflow-auto py-5'>
                    <div className='flex flex-auto flex-col gap-5 overflow-auto mb-10  '>
                        <UserInfo />
                        <div className='w-[calc(100%-32px)] h-full px-4'>
                            <div className='mx-auto flex h-full w-[180px] flex-auto flex-col gap-5 overflow-auto '>
                                <div className='mx-auto flex  h-full w-[180px] flex-auto flex-col gap-5 overflow-auto '>
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.PROFILE}
                                        title='Profile'
                                        icon={<IconProfile width={26} height={26} className='ml-[-3px]' />}
                                    />
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.ACHIEVEMENTS}
                                        title='Achievements'
                                        icon={<IconAchievements width={24} height={24} className='ml-[-3px]' />}
                                    />
                                    <XMenuDivider />
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.GOALS}
                                        title='Goals'
                                        icon={<IconFocus width={24} height={24} />}
                                    />

                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.SPRINTS}
                                        title='Sprints'
                                        icon={<IconSprint width={24} height={24} />}
                                    />
                                    <XMenuDivider />
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.NOTES}
                                        title='Notes'
                                        icon={<IconBook width={24} height={24} />}
                                    />
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.STORIES}
                                        title='Stories'
                                        icon={<IconLandscape width={24} height={24} className='ml-[-2px]' />}
                                    />
                                </div>
                                <SideMenuLink
                                    to={APP_ROUTES_ENUM.NOTIFICATIONS}
                                    title='Notifications'
                                    icon={<IconBell width={24} height={24} className='ml-[-2px]' />}
                                />
                            </div>
                        </div>
                    </div>

                    <GoToDashboard />
                </div>
            </div>
        </>
    )
})

export default SideMenu
