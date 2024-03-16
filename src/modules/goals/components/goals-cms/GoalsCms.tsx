import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { ArtifactsCounter } from '@/modules/dashboard/components/artifacts-counter/ArtifactsCounter'
import { GoalCRUDProvider } from '../goal-crud/GoalCRUD'
import { GoalFilterIcons } from './components/GoalFilterIcons'
import { GoalsCmsHeader } from './components/GoalsCmsHeader'

export const GoalsCms: React.FC = () => {
    return (
        <GoalCRUDProvider>
            <ModuleWrapper context={APP_ROUTES_ENUM.GOALS} topBarNodes={<ArtifactsCounter />}>
                <div className='flex h-full w-full flex-col'>
                    <GoalsCmsHeader />
                    <GoalFilterIcons />
                    {/* <GoalSearchFilter /> */}
                    {/* <GoalsCards key={state} state={state} /> */}
                </div>
            </ModuleWrapper>
        </GoalCRUDProvider>
    )
}
