import { Suspense, lazy } from 'react'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { TopActiveGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-active-goals-widget/TopActiveGoalsWidget'
import { TopExpiredGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-expired-goals-widget/TopExpiredGoalsWidget'
import { TopFavoriteGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-favorite-goals-widget/TopFavoriteGoalsWidget'
import { TopRitualGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-ritual-goals-widget/TopRitualGoalsWidget'
import { ArtifactsCounter } from './artifacts-counter/ArtifactsCounter'
import { NotepadIndex } from '@/modules/notepad/NotepadIndex'
import { GoalsSlidesCarouselWidget } from '@/modules/goals-slides/GoalsSlidesCarouselWidget'
import NoteEditorDialog from '@/modules/notes/components/note-editor-dialog/NoteEditorDialog'
const GoalEditorDialog = lazy(() => import('@/modules/goals/components/goal-editor-dialog/GoalEditorDialog'))

export const Dashboard: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.DASHBOARD} topBarNodes={<ArtifactsCounter />}>
            <NotepadIndex />
            <GoalsSlidesCarouselWidget />
            <TopActiveGoalsWidget />
            <TopExpiredGoalsWidget />
            <TopRitualGoalsWidget />
            <TopFavoriteGoalsWidget />
            {/* stabilized */}
            <div className='flex max-h-[1px] flex-[100%] 2lg:flex-[45%]' />
            {/* dialog */}
            <Suspense fallback={null}>
                <GoalEditorDialog />
            </Suspense>

            <Suspense fallback={null}>
                <NoteEditorDialog />
            </Suspense>
        </ModuleWrapper>
    )
}
