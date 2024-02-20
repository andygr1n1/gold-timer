import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/lib/enums'
import { ArtifactsCounter } from '@/modules/dashboard/components/artifacts-counter/ArtifactsCounter'
import { GoalSearchFilter } from '../shared/GoalSearchFilter'
import { GoalCRUDProvider } from '../goal-crud/GoalCRUD'
import { GoalFilterIcons } from './components/GoalFilterIcons'

export const GoalsCms: React.FC = () => {
    return (
        <GoalCRUDProvider>
            <ModuleWrapper context={APP_ROUTES_ENUM.GOALS} topBarNodes={<ArtifactsCounter />}>
                <div className='flex h-full w-full flex-col'>
                    <div className='relative my-10 flex w-full items-center justify-between'>
                        <GoalFilterIcons />
                    </div>
                    <GoalSearchFilter />
                    {/* <GoalsCards key={state} state={state} /> */}
                </div>
            </ModuleWrapper>
        </GoalCRUDProvider>
    )
}
