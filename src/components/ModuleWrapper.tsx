import { TopBar } from '@/components/top-bar/TopBar'
import { observer } from 'mobx-react-lite'

export const ModuleWrapper: React.FC<{
    children: React.ReactNode
    topBarNodes?: React.ReactNode
    hideTopBar?: boolean
}> = observer(function ModuleWrapper({ children, topBarNodes, hideTopBar }) {
    return (
        <div
            id='module-wrapper'
            className='mx-auto my-5 w-[calc(100%-40px)] max-w-[1300px] flex-auto rounded-lg md:my-2 md:w-[calc(100%-160px)]'
        >
            {!hideTopBar && <TopBar>{topBarNodes}</TopBar>}
            <div className='my-5 flex w-full flex-wrap justify-start gap-8'>{children}</div>
        </div>
    )
})
