import { observer } from 'mobx-react-lite'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { CreateNewNoteDashboard } from '../notes/components/create-note-dashboard/CreateNewNoteDashboardIndex'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { ArtifactsCounter } from './components/artifacts-counter/ArtifactsCounter'
import { CRUD_GoalDialog } from '../goals/components/crud-goal/CRUD_GoalDialog'
import { CRUD_NoteDialog } from '../notes/components/crud-note/CRUD_NoteDialog'
import { TopFavoriteGoalsWidget } from '../goals/components/top-goals-widget/top-favorite-goals-widget/TopFavoriteGoalsWidget'
import { TopExpiredGoalsWidget } from '../goals/components/top-goals-widget/top-expired-goals-widget/TopExpiredGoalsWidget'
import { TopActiveGoalsWidget } from '../goals/components/top-goals-widget/top-active-goals-widget/TopActiveGoalsWidget'
import { TopRitualGoalsWidget } from '../goals/components/top-goals-widget/top-ritual-goals-widget/TopRitualGoalsWidget'
import { GoalsSlidesCarouselWidget } from '../goals-slides/GoalsSlidesCarouselWidget'
import clsx from 'clsx'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { UserCoins } from '@/components/side-menu/components/UserCoins'
import { SelectedWidgetGoalsView } from '../goals/components/top-goals-widget/selected-widget-goals-view/SelectedWidgetGoalsView'

export const DashboardIndex: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.DASHBOARD}
            topBarNodes={
                <div className='relative flex w-full font-bold'>
                    <div className='absolute left-0  top-1/2  -translate-y-1/2'> {isDesktop && <UserCoins />}</div>
                    <div className={clsx('flex w-full justify-center', !isDesktop && 'pl-12')}>
                        <ArtifactsCounter />
                        {/* DIALOG */}
                        <CRUD_NoteDialog />
                        <CRUD_GoalDialog />
                    </div>
                </div>
            }
        >
            <div className='mb-5 flex flex-wrap justify-start gap-8'>
                <CreateNewNoteDashboard />
                <GoalsSlidesCarouselWidget />
                <TopActiveGoalsWidget />
                <TopExpiredGoalsWidget />
                <TopRitualGoalsWidget />
                <TopFavoriteGoalsWidget />
                {/* stabilized */}
                <div className='flex max-h-[1px] flex-[100%] md:flex-[45%]' />
                {/* DIALOG */}
                <SelectedWidgetGoalsView />
            </div>
        </ModuleWrapper>
    )
})
