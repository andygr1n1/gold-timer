import { TopBar } from '@/components/top-bar/TopBar'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { observer } from 'mobx-react-lite'

export const ModuleWrapper: React.FC<{
    context: APP_ROUTES_ENUM
    children: React.ReactNode
    topBarNodes?: React.ReactNode
    hideTopBar?: boolean
}> = observer(function ModuleWrapper({ children, topBarNodes, hideTopBar }) {
    return (
        <div className='bg-global-bg mx-7 my-5 flex-auto  rounded-lg md:mx-20 md:w-[calc(100%-160px)]'>
            {!hideTopBar && <TopBar>{topBarNodes}</TopBar>}
            <div className='font-kzen flex w-full flex-col '>{children}</div>
        </div>
    )
})
