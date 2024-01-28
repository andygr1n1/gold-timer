import { observer } from 'mobx-react-lite'
import { MenuIcon } from '../icons/OpenSideMenuIcon.tsx'
import { PropsWithChildren } from 'react'
import { UserCoins } from './UserCoins.tsx'
import clsx from 'clsx'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.tsx'

export const TopBar: React.FC<PropsWithChildren> = observer(({ children }) => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    return (
        <div className='relative flex h-[65px] min-h-[65px] w-full items-center justify-end gap-2 font-bold xl:flex-row '>
            <div className='absolute left-0  top-1/2  -translate-y-1/2'> {isDesktop && <UserCoins />}</div>
            <div className={clsx('flex w-full justify-center', !isDesktop && 'pl-12')}>{children}</div>
            <MenuIcon />
        </div>
    )
})
