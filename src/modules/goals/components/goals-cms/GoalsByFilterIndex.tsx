import { Suspense, lazy } from 'react'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { useLocation } from 'react-router-dom'
import { GoalsCards } from './components/GoalsCards'
import { IGoalStatus } from '@/modules/goals/shared-service/types'
import { GoalsHeader } from './components/GoalsHeader'
const GoalEditorDialog = lazy(() => import('@/modules/goals/components/goal-editor-dialog/GoalEditorDialog'))

export const GoalsByFilterIndex: React.FC = () => {
    const location = useLocation()
    const queryFilter: IGoalStatus = location.state?.filter
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.DASHBOARD}>
            <Suspense fallback={null}>
                <GoalEditorDialog />
            </Suspense>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                <GoalsHeader />
                <GoalsCards key={queryFilter} queryFilter={queryFilter} />
            </div>
        </ModuleWrapper>
    )
}
