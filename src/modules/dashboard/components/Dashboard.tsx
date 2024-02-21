import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { GoalsSlidesCarouselWidget } from '@/modules/goals-slides/GoalsSlidesCarouselWidget'
import { TopActiveGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-active-goals-widget/TopActiveGoalsWidget'
import { TopExpiredGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-expired-goals-widget/TopExpiredGoalsWidget'
import { TopFavoriteGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-favorite-goals-widget/TopFavoriteGoalsWidget'
import { TopRitualGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-ritual-goals-widget/TopRitualGoalsWidget'
import { CreateNewNoteDashboard } from '@/modules/notes/components/create-note-dashboard/CreateNewNoteDashboardIndex'
import { ArtifactsCounter } from './artifacts-counter/ArtifactsCounter'
import { isUnderDevelopment } from '@/functions/isUnderDevelopment.helper'

export const Dashboard: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.DASHBOARD} topBarNodes={<ArtifactsCounter />}>
            {isUnderDevelopment() && <CreateNewNoteDashboard />}
            <GoalsSlidesCarouselWidget />
            <TopActiveGoalsWidget />
            <TopExpiredGoalsWidget />
            <TopRitualGoalsWidget />
            <TopFavoriteGoalsWidget />
            {/* stabilized */}
            <div className='flex max-h-[1px] flex-[100%] md:flex-[45%]' />
        </ModuleWrapper>
    )
}
