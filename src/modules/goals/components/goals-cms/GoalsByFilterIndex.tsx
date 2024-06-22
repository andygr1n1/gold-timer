import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { useLocation } from 'react-router-dom'
import { GoalsCards } from './components/GoalsCards'
import { IGoalQueryTypeFilter } from '@/modules/goals/service/types'
import { GoalsHeader } from './components/GoalsHeader'

export const GoalsByFilterIndex: React.FC = () => {
    const location = useLocation()
    const state: IGoalQueryTypeFilter = location.state?.filter

    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.DASHBOARD}>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                <GoalsHeader />
                <GoalsCards key={state} state={state} />
            </div>
        </ModuleWrapper>
    )
}
