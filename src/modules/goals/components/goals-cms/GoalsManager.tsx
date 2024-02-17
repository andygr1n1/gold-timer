import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/lib/enums'

export const GoalsManager: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.GOALS}>
            <div className='mb-5 flex flex-wrap justify-start gap-8'>
                GoalsManager
                {/* {!!!goals.length && !show_deleted ? (
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
                <GoalsList /> */}
            </div>
        </ModuleWrapper>
    )
}
