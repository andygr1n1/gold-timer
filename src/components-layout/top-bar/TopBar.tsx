import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Logout } from './components/Logout'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { DynamicSearch } from './components/dynamic-search/DynamicSearch'

export const TopBar: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    return (
        <div className='flex  h-[65px] min-h-[65px] w-full items-center justify-between xl:flex-row '>
            <div className='relative flex w-full items-center justify-between'>
                {!isDesktop && (
                    <div className='flex w-[60px] items-start justify-start gap-4'>
                        <div className='flex h-6 w-6 flex-auto items-center justify-start 2xl:mx-6'>
                            {!useSideMenu.is_open ? (
                                <Icon
                                    icon='line-md:close-to-menu-transition'
                                    className={`text-navLink hover:text-navLink-active cursor-pointer 2xl:hidden`}
                                    width={23}
                                    height={23}
                                    onClick={useSideMenu.onChange}
                                />
                            ) : null}
                        </div>
                    </div>
                )}

                <div className='flex w-full'>
                    <DynamicSearch />
                </div>

                <div className='flex w-[60px] items-center'>
                    <ThemeSwitcher />
                    <Logout />
                </div>
            </div>
        </div>
    )
})
