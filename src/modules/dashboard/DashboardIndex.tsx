import { observer } from 'mobx-react-lite'
import { TopGoalsWidgets } from '@/modules/dashboard/components/top-goals-widgets/TopGoalsWidgets'
import { GoalsDashboardCarousel } from '@/modules/dashboard/components/goals-dashboard-slider/GoalsDashboardCarousel'
import { useRootStore } from '@/StoreProvider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { AddNew } from '@/components/buttons/AddNew.button'
import { CreateNewNote } from './components/create-new-task-widget/components/CreateNewNote'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { CreateNewItemIcon } from '@/modules/dashboard/components/CreateNewItemIcon'
import { GoalsCounter } from './components/goals-counter/GoalsCounter'

export const DashboardIndex: React.FC = observer(() => {
    const {
        user$: { hasGoalsSliderAddon },
        goals$: { goCreateNewGoalMode },
        sprints$: { activateNewSprintCreator },
    } = useRootStore()
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])

    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.DASHBOARD}
            hideTopBar={!!isLargeDesktop}
            topBarNodes={<CreateNewItemIcon />}
        >
            <div className='flex flex-col gap-7 xl:px-20'>
                <div className='m-auto flex min-h-[314px] w-[314px] flex-col justify-center gap-10 md:justify-end xl:w-full xl:flex-row'>
                    <div className='flex flex-[50%]'>
                        <GoalsCounter />
                    </div>
                    <div className='flex flex-[50%] justify-center '>
                        {hasGoalsSliderAddon && <GoalsDashboardCarousel />}
                    </div>
                </div>
                {/*  */}
                <div className='flex w-full flex-col justify-center gap-10  md:justify-end xl:flex-row'>
                    <div className='flex flex-[50%] flex-col gap-7'>
                        {isLargeDesktop && <CreateNewNote />}
                        <div className=' flex max-w-[380px] items-center gap-5  '>
                            {isLargeDesktop && (
                                <div
                                    onClick={goCreateNewGoalMode}
                                    className='bg-global-2-bg group flex flex-[50%]  cursor-pointer justify-center rounded-lg px-5 py-5'
                                >
                                    <AddNew title='Add goal' />
                                </div>
                            )}
                            {isLargeDesktop && (
                                <div
                                    onClick={activateNewSprintCreator}
                                    className='bg-global-2-bg group flex  flex-[50%] cursor-pointer justify-center rounded-lg px-5 py-5'
                                >
                                    <AddNew title='Add sprint' />
                                </div>
                            )}
                        </div>
                    </div>
                    <TopGoalsWidgets />
                </div>
            </div>
        </ModuleWrapper>
    )
})
