import { ModuleWrapper } from '@/components/ModuleWrapper'
import { ArtifactsCounter } from '../../../../dashboard/components/artifacts-counter/ArtifactsCounter'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useLocation } from 'react-router-dom'
import { ActiveFilterIcon } from './ActiveFilterIcon'
import { BackToDashboardIcon } from './BackToDashboardIcon'
import { GoalSearchFilter } from '../../shared/GoalSearchFilter'
import { GoalsCards } from './GoalsCards'
import { IGoalQueryTypeFilter } from '@/modules/goals/service/types'

export const ActiveGoalFilterView: React.FC = () => {
    const location = useLocation()
    const state: IGoalQueryTypeFilter = location.state?.filter
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.DASHBOARD} topBarNodes={<ArtifactsCounter />}>
            <div className='flex h-full w-full flex-col'>
                <div className='relative my-10 flex w-full items-center justify-between'>
                    <BackToDashboardIcon />
                    <ActiveFilterIcon key={state} state={state} />
                    {/* <GoalSearchFilter /> */}
                </div>
                <GoalSearchFilter />
                <GoalsCards key={state} state={state} />
            </div>
        </ModuleWrapper>
    )
}
