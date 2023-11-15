import { observer } from 'mobx-react-lite'
import { TopGoalsWidgets } from '@/modules/goals/components/top-goals-widget/TopGoalsWidgets'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { CreateNewNoteDashboard } from '../notes/components/create-note-dashboard/CreateNewNoteDashboard'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { GoalsCounter } from './components/goals-counter/GoalsCounter'
import { CRUD_GoalDialog } from '../goals/components/crud-goal/CRUD_GoalDialog'
import { CRUD_NoteDialog } from '../notes/components/crud-note/CRUD_NoteDialog'
import { GoalsSlidesCarousel } from '../goals-slides/GoalsSlidesCarousel'

export const DashboardIndex: React.FC = observer(() => {
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])

    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.DASHBOARD} hideTopBar={!!isLargeDesktop}>
            <div className='flex flex-col gap-7'>
                <div className='m-auto flex min-h-[314px] w-[314px] flex-col justify-center gap-20 md:justify-end xl:w-full xl:flex-row'>
                    <div className='flex flex-[50%]'>
                        <GoalsCounter />
                    </div>
                    <div className='flex flex-[50%] justify-center '>
                        <GoalsSlidesCarousel />
                    </div>
                </div>
                {/*  */}
                <div className='flex w-full flex-col gap-20 xl:flex-row'>
                    <CreateNewNoteDashboard />
                    <TopGoalsWidgets />
                </div>
            </div>
            {/* DIALOG */}
            <CRUD_NoteDialog />
            <CRUD_GoalDialog />
        </ModuleWrapper>
    )
})
