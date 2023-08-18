import { TopBar } from '@/components-layout/top-bar'
import { observer } from 'mobx-react-lite'

export const ModuleWrapper: React.FC<{ title?: string; children: React.ReactNode }> = observer(function ModuleWrapper({
    children,
}) {
    return (
        <div className='bg-global-bg mx-5 my-5 flex-auto rounded-lg xl:ml-0'>
            <TopBar />
            <div className='font-droid flex w-[calc(100%-34px)] flex-col p-4'>{children}</div>
        </div>
    )
})
