import { useGoalsStore } from '@/StoreProvider'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { GoalsList } from '@/modules/goals/components/goals-list/GoalsList'
import { observer } from 'mobx-react-lite'
import goalsImage from '@/assets/goals1.png'
import { SearchGoalsInput } from './components/SearchGoalsInput'
import { GoalsSettingsIcon } from './components/GoalsSettingsIcon'
import { useListenGoalsFilterStore } from './helpers/useListenGoalsFilterStore.hook'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { GoalsFavorites } from './components/filters/GoalsFavorites'
import { StyledButton } from '@/components/buttons/StyledButton'
import { CRUD_GoalDialog } from './components/crud-goal/CRUD_GoalDialog'

export const GoalsIndex: React.FC = observer(() => {
    const {
        goals,
        openCreateMode,
        goals_filter$: { show_deleted },
    } = useGoalsStore()

    useListenGoalsFilterStore()
    const { isMobile } = useWindowMatchMedia(['isMobile'])

    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.GOALS}
            topBarNodes={
                <div className='flex w-full items-center justify-center gap-4 xl:px-20'>
                    <SearchGoalsInput />
                    <GoalsSettingsIcon />
                </div>
            }
        >
            <div className='flex h-full w-full flex-col gap-5 xl:w-[calc(100%-160px)] xl:px-20'>
                {!isMobile && (
                    <div className='m-1 mt-5 flex justify-between gap-5'>
                        <div className='ml-[-20px] flex items-center justify-center'>
                            <GoalsFavorites />
                        </div>
                        <StyledButton
                            variant='outlined'
                            onClick={() => {
                                openCreateMode()
                            }}
                        >
                            + Add new goal
                        </StyledButton>
                    </div>
                )}
                <GoalsList />
                {!!!goals.length && !show_deleted && (
                    <img
                        className='absolute-center pointer-events-none h-[200px] w-[200px] opacity-10'
                        src={goalsImage}
                    />
                )}
            </div>
            <CRUD_GoalDialog />
        </ModuleWrapper>
    )
})
