import { observer } from 'mobx-react-lite'
import { PropsWithChildren } from 'react'
import { LoginLogo } from './LoginLogo'

export const LoginContainer: React.FC<PropsWithChildren> = observer(({ children }) => {
    return (
        <div
            className='absolute-center relative flex-auto mx-auto w-full h-[calc(100vh-10%)] md:max-h-[calc(100vh-40%)]
            max-w-xs rounded-lg gap-5 flex flex-col p-5'
        >
            <div className='absolute left-1/2  -translate-x-1/2 '>
                <LoginLogo />
            </div>
            <div className='pt-12 mt-14 w-full h-full rounded-xl shadow-xl bg-global-bg-regal'>{children}</div>
        </div>
    )
})
