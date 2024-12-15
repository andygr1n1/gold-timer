import { observer } from 'mobx-react-lite'
import { OpenSideMenu } from './OpenSideMenu.tsx'
import { type PropsWithChildren } from 'react'
import clsx from 'clsx'

export const TopBar: React.FC<PropsWithChildren> = observer(({ children }) => {
    return (
        <div className='relative flex min-h-[65px] w-full mt-2 items-start justify-end gap-2 font-bold xl:flex-row '>
            {/* <div className='absolute left-0  top-1/2  -translate-y-1/2'> {<UserCoins />}</div> */}
            <OpenSideMenu />
            <div className={clsx('flex w-full justify-center')}>{children}</div>
        </div>
    )
})
