import { TopBar } from '@/components-layout/top-bar/TopBar'
import { observer } from 'mobx-react-lite'

export const ModuleWrapper: React.FC<{ title?: string; children: React.ReactNode }> = observer(function ModuleWrapper({
    children,
}) {
    return (
        <div className='bg-global-bg mx-5 my-5 flex-auto rounded-lg'>
            <TopBar />
            <div className='font-droid flex w-full flex-col '>{children}</div>
        </div>
    )
})
