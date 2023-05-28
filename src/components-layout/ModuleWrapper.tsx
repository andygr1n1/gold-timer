import { TopBar } from '@/layout/topBar/TopBar'
import { observer } from 'mobx-react-lite'

export const ModuleWrapper: React.FC<{ title?: string; children: React.ReactNode }> = observer(
    ({ children, title }) => {
        return (
            <div className={'flex'}>
                <div className=' mx-5 my-5 flex-auto overflow-auto rounded-lg bg-global-2-bg xl:ml-0 '>
                    <TopBar />
                    <div className='flex min-h-[calc(100vh-200px)] w-[calc(100%-40px)] flex-col overflow-auto p-4 xl:h-[calc(100vh-140px)]'>
                        {title && <h3 className='my-5'>{title}</h3>}
                        {children}
                    </div>
                </div>
            </div>
        )
    },
)
