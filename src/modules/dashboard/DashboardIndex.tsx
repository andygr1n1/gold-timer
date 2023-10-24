import { observer } from 'mobx-react-lite'
import { TopGoalsWidgets } from '@/modules/goals/components/top-goals-widget/TopGoalsWidgets'
import { GoalsDashboardCarousel } from '@/modules/dashboard/components/goals-dashboard-slider/GoalsDashboardCarousel'
import { useRootStore } from '@/StoreProvider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { CreateNewNoteDashboard } from '../notes/components/create-note-dashboard/CreateNewNoteDashboard'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { CreateNewItemIcon } from '@/modules/dashboard/components/CreateNewItemIcon'
import { GoalsCounter } from './components/goals-counter/GoalsCounter'
import { CRUD_GoalDialog } from '../goals/components/crud-goal/CRUD_GoalDialog'

export const DashboardIndex: React.FC = observer(() => {
    const {
        user$: { hasGoalsSliderAddon },
    } = useRootStore()
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])

    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.DASHBOARD}
            hideTopBar={!!isLargeDesktop}
            topBarNodes={<CreateNewItemIcon />}
        >
            <div className='flex flex-col gap-7'>
                <div className='m-auto flex min-h-[314px] w-[314px] flex-col justify-center gap-20 md:justify-end xl:w-full xl:flex-row'>
                    <div className='flex flex-[50%]'>
                        <GoalsCounter />
                    </div>
                    <div className='flex flex-[50%] justify-center '>
                        {hasGoalsSliderAddon && <GoalsDashboardCarousel />}
                    </div>
                </div>
                {/*  */}
                <div className='flex w-full flex-col gap-20 xl:flex-row'>
                    <CreateNewNoteDashboard />
                    <TopGoalsWidgets />
                </div>
            </div>
            {/* DIALOG */}
            <CRUD_GoalDialog />
        </ModuleWrapper>
    )
})
