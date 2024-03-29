import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'

export const LoginContainer: React.FC<PropsWithChildren> = observer(({ children }) => {
    return (
        <div className='text-cText flex h-full w-full items-center justify-center'>
            <div className='bg-global-bg-regal relative w-[325px] rounded-lg  p-5'>{children}</div>
        </div>
    )
})
