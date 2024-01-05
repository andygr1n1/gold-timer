import { useGoalsStore } from '@/StoreProvider'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { GoalsList } from '@/modules/goals/components/goals-list/GoalsList'
import { observer } from 'mobx-react-lite'
import goalsImage from '@/assets/goals-1.png'
import { SearchGoalsInput } from './components/SearchGoalsInput'
import { useListenGoalsFilterStore } from './helpers/useListenGoalsFilterStore.hook'
import { CRUD_GoalDialog } from './components/crud-goal/CRUD_GoalDialog'
import { GoalsModuleDropdown } from './components/goals-module-dropdown/GoalsModuleDropdown'

export const GoalsIndex: React.FC = observer(() => {
    const {
        goals,
        goals_filter$: { show_deleted },
    } = useGoalsStore()

    useListenGoalsFilterStore()

    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.GOALS}>
            <div className='mb-5 flex flex-wrap justify-start gap-8'>
                {!!!goals.length && !show_deleted ? (
                    <img
                        className='absolute-center pointer-events-none h-[200px] w-[200px] opacity-10'
                        src={goalsImage}
                    />
                ) : (
                    <img className='pointer-events-none m-auto my-10 h-[50px] w-[50px] opacity-100' src={goalsImage} />
                )}
                <div className='flex w-full items-center justify-center gap-4 xl:px-20'>
                    <GoalsModuleDropdown />
                    <SearchGoalsInput />
                </div>
                <GoalsList />
            </div>
            <CRUD_GoalDialog />
        </ModuleWrapper>
    )
})
