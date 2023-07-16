import { TopBar } from '@/components-layout/top-bar/TopBar'
import { observer } from 'mobx-react-lite'

export const ModuleWrapper: React.FC<{ title?: string; children: React.ReactNode }> = observer(function ModuleWrapper({
    children,
    title,
}) {
    return (
        <div className=' mx-5 my-5 flex-auto rounded-lg bg-global-2-bg xl:ml-0 2xl:h-full 2xl:min-h-[calc(100vh-350px)]'>
            <TopBar />
            <div className='flex w-[calc(100%-40px)] flex-col p-4'>
                {title && <h3 className='my-5'>{title}</h3>}
                {children}
            </div>
        </div>
    )
})
