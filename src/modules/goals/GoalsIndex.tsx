import { useGoalsStore } from '@/StoreProvider'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { PageGoals } from '@/modules/goals/components/goals-list/PageGoals'
import { observer } from 'mobx-react-lite'
import goalsImage from '@/assets/goals-1.png'

export const GoalsIndex: React.FC = observer(() => {
    const { goals } = useGoalsStore()
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.GOALS}>
            {goals.length ? (
                <div className='mt-5 h-[calc(100%-150px)] w-full overflow-auto rounded-md'>
                    <PageGoals />
                </div>
            ) : (
                <img className='absolute-center pointer-events-none h-[200px] w-[200px] opacity-10' src={goalsImage} />
            )}
        </ModuleWrapper>
    )
})
