import { observer } from 'mobx-react-lite'
import { MenuIcon } from '../icons/OpenSideMenuIcon.tsx'
import { PropsWithChildren } from 'react'

export const TopBar: React.FC<PropsWithChildren> = observer(({ children }) => {
    return (
        <div className='flex h-[65px] min-h-[65px] w-full items-center justify-end gap-2 xl:flex-row '>
            {children}
            <MenuIcon />
        </div>
    )
})
